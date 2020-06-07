/**
 *
 * Player
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectCurrentlyPlaying,
  makeSelectSeek,
  makeSelectPlaying,
  makeSelectTimelineAction,
  makeSelectClientServerTimeOffset,
} from 'containers/WebSocket/selectors';
import {
  emitRoomSeek,
  emitRoomIsPlaying,
  emitRoomNextVideo,
  emitRoomAddVideo,
  setPlayerOffset,
} from 'containers/WebSocket/actions';
import Hotkeys from 'containers/Hotkeys';
import Controls from 'components/Controls';
import Fullscreen from 'components/Fullscreen';
import ShowOnHover from 'components/ShowOnHover';
import RunningBehind from 'components/RunningBehind';
import { VOLUME, MUTED, setItem } from 'utils/localStorage';
import { getSeeked } from 'utils/time';
import VideoHeader from './VideoHeader';
import VideoPlayer from './VideoPlayer';

import Wrapper from './styles/Wrapper';
import GreyBG from './styles/GreyBG';
import {
  addSubtitle,
  playNextSound,
  getThresholdValue,
  getVolume,
  getMuted,
  getYoutubeVideoId,
} from './utils';

class Player extends React.Component {
  constructor(props) {
    super();
    const { currentVideo, playing } = props;
    this.playerRef = React.createRef();
    this.state = {
      isControlsDisabled: false,
      syncing: false,
      playing,
      video: currentVideo,
      played: 0,
      duration: 0,
      muted: getMuted(),
      volume: getVolume(),
      onProgressCount: 0,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.syncTimeout);
    clearTimeout(this.hideControlsTimeout);
  }

  // eslint-disable-next-line camelcase
  async UNSAFE_componentWillReceiveProps(nextProps) {
    const { seek, currentVideo, playing } = this.props;

    if (nextProps.seek.updatedAt !== seek.updatedAt) {
      this.setSeek(nextProps.seek.seekTo);
    }

    if (nextProps.playing !== playing) {
      this.setState({ playing: nextProps.playing });
    }

    const nextUnique = nextProps.currentVideo && nextProps.currentVideo.unique;
    const currentUnique = currentVideo && currentVideo.unique;

    if (nextUnique === currentUnique) {
      return;
    }

    if (nextProps.currentVideo) {
      playNextSound();
    }

    const newState = {
      played: 0,
      onProgressCount: 0,
      playing: nextProps.playing,
      video: nextProps.currentVideo,
    };

    const noNeedOfReload =
      currentVideo &&
      nextProps.currentVideo &&
      nextProps.currentVideo.type === currentVideo.type &&
      nextProps.currentVideo.type === 'youtube';

    // Youtube player allows to play next video when tab is not active.
    //   Remounting the player requires an active tab to resume playback
    if (noNeedOfReload) {
      const player = this.playerRef.getInternalPlayer();
      const ytId = getYoutubeVideoId(nextProps.currentVideo.url);
      player.loadVideoById(ytId);
      this.setState(newState);
      return;
    }

    await this.setState(newState);
  }

  setSeek = seconds => {
    if (!this.playerRef || !this.playerRef.seekTo) {
      return;
    }

    this.playerRef.seekTo(parseFloat(seconds, 10));
  };

  getCurrentTime = () => {
    if (!this.playerRef || !this.playerRef.seekTo) {
      return null;
    }
    return this.playerRef.getCurrentTime();
  };

  checkAndSync = playedSeconds => {
    const { timelineAction, clientServerTimeOffset } = this.props;

    const accPlayTime = getSeeked(timelineAction, clientServerTimeOffset);
    // Video should never be ahead
    const offsetVal = getThresholdValue();
    const offset = offsetVal < 0.03 ? 0.03 : offsetVal;
    const min = accPlayTime - offset;
    const max = accPlayTime + offset;
    const played = this.getCurrentTime();
    const isOutOfBoundary = min > played || max < played;

    if (isOutOfBoundary) {
      const { playing } = this.state;
      this.setState({ playing: false });
      this.setSeek(playing ? accPlayTime + 0.15 : accPlayTime);

      if (this.props.playing) {
        this.syncTimeout = setTimeout(
          () => this.setState({ playing: true }),
          400,
        );
      }
    }

    const offsetMs = Math.ceil((accPlayTime - playedSeconds) * 1000);
    this.props.setPlayerOffset(offsetMs);

    if (isOutOfBoundary) {
      console.log(
        `%c[Offset]%c ${accPlayTime}s±${offset}s, offset: ${offsetMs}ms`,
        'color:red;',
        'color: inherit;',
      );
    }

    return isOutOfBoundary;
  };

  handleProgress = played => {
    const { onProgressCount } = this.state;
    const { playedSeconds } = played;

    if (this.isLive()) {
      return;
    }

    this.setState({
      played: playedSeconds,
      onProgressCount: onProgressCount + 1,
    });

    if (!onProgressCount) {
      return;
    }

    const isSynced = this.checkAndSync(playedSeconds);
    this.setState({ syncing: isSynced });
  };

  handleDuration = duration => {
    this.setState({ played: 0, duration });
    this.setSubtitle();
  };

  handlePlay = () => {
    const { playing, played } = this.state;
    if (this.isLive()) {
      this.setState({ playing: !playing });
      return;
    }
    this.props.setIsPlaying(!playing, played);
  };

  rewind = () => {
    const { played } = this.state;
    const newPlayed = played < 5 ? 0 : played - 5;
    this.handleSeek(newPlayed);
  };

  windForward = () => {
    const { played, duration } = this.state;
    let newPlayed = played + 5;
    if (newPlayed > duration) {
      newPlayed = duration;
    }
    this.handleSeek(newPlayed);
  };

  handleSeek = seconds => {
    this.setState({ syncing: true });
    this.props.seekTo(seconds);
  };

  handlePlayerPlay = async () => {
    this.setState({ playing: true });

    if (this.isLive()) {
      return;
    }

    if (this.props.playing) return;

    await this.forceUpdate();

    this.setState({ playing: false });
  };

  handlePlayerPause = async () => {
    this.setState({ playing: false });

    if (this.isLive()) {
      return;
    }

    if (!this.props.playing) return;

    await this.forceUpdate();

    this.setState({ playing: true });
  };

  setSubtitle = () => {
    if (!this.playerRef.getInternalPlayer) {
      return;
    }

    const player = this.playerRef.getInternalPlayer();
    const { currentVideo } = this.props;
    addSubtitle(currentVideo, player);
  };

  handleMute = () => {
    const { muted } = this.state;
    setItem(MUTED, !muted);
    this.setState({ muted: !muted });
  };

  handleVolume = volume => {
    this.setState({ volume, muted: false });
    setItem(VOLUME, volume);
    setItem(MUTED, !volume);
  };

  handleRef = ref => {
    this.playerRef = ref;
  };

  handleHideControls = () => {
    this.setState({ isControlsDisabled: true });

    this.hideControlsTimeout = setTimeout(
      () => this.setState({ isControlsDisabled: false }),
      8000,
    );
  };

  handleEnded = () => {
    const { video } = this.state;
    if (!video) {
      return;
    }

    const { timeStamp, timeStampType } = this.props.timelineAction;
    if (timeStampType === 'next-video') {
      const timeDiff = new Date().getTime() - timeStamp;
      if (timeDiff < 500) return;
    }

    this.setState({ syncing: false, played: 0 });
    this.props.nextVideo(video.unique);
  };

  isLive = () => this.state.video.type === 'twitch-live';

  getPlayer = (toggleFullscreen, isFullscreen) => {
    const {
      duration,
      played,
      playing,
      video,
      volume,
      muted,
      syncing,
      isControlsDisabled,
    } = this.state;

    const playerVolume = muted ? 0 : volume;

    if (!video) {
      return null;
    }

    return (
      <Wrapper>
        <RunningBehind show={syncing} />
        <VideoPlayer
          onDuration={this.handleDuration}
          onPause={this.handlePlayerPause}
          onPlay={this.handlePlayerPlay}
          onProgress={this.handleProgress}
          onEnded={this.handleEnded}
          ref={this.handleRef}
          playing={playing}
          url={video.url}
          volume={playerVolume}
        />
        <Hotkeys
          onToggleFullscreen={toggleFullscreen}
          onForward={this.windForward}
          onRewind={this.rewind}
          onTogglePlay={this.handlePlay}
          onToggleMute={this.handleMute}
        />
        {!isControlsDisabled && (
          <ShowOnHover currentId={video.unique} show={!playing}>
            <VideoHeader video={video} />
            <Controls
              onHideControls={this.handleHideControls}
              onToggleFullscreen={toggleFullscreen}
              onVolume={this.handleVolume}
              onSeek={this.handleSeek}
              onPlay={this.handlePlay}
              duration={duration}
              isFullscreen={isFullscreen}
              playing={playing}
              played={played}
              volume={volume}
              isLive={this.isLive()}
              video={video}
              muted={muted}
              onMute={this.handleMute}
            />
          </ShowOnHover>
        )}
      </Wrapper>
    );
  };

  render() {
    const { currentVideo } = this.props;

    if (!currentVideo) {
      return <GreyBG />;
    }

    return <Fullscreen style={{ height: '100%' }}>{this.getPlayer}</Fullscreen>;
  }
}

Player.propTypes = {
  setIsPlaying: PropTypes.func.isRequired,
  seekTo: PropTypes.func.isRequired,
  setPlayerOffset: PropTypes.func.isRequired,
  nextVideo: PropTypes.func.isRequired,
  timelineAction: PropTypes.object,
  currentVideo: PropTypes.object,
  playing: PropTypes.bool,
  addVideo: PropTypes.func.isRequired,
  clientServerTimeOffset: PropTypes.number,
  seek: PropTypes.shape({
    updatedAt: PropTypes.number.isRequired,
    seekTo: PropTypes.number,
  }),
};

const mapStateToProps = createStructuredSelector({
  seek: makeSelectSeek(),
  playing: makeSelectPlaying(),
  currentVideo: makeSelectCurrentlyPlaying(),
  timelineAction: makeSelectTimelineAction(),
  clientServerTimeOffset: makeSelectClientServerTimeOffset(),
});

const mapDispatchToProps = dispatch => ({
  setIsPlaying: (isPlaying, played) =>
    dispatch(emitRoomIsPlaying(isPlaying, played)),
  seekTo: evt => dispatch(emitRoomSeek(evt)),
  addVideo: evt => dispatch(emitRoomAddVideo(evt)),
  nextVideo: evt => dispatch(emitRoomNextVideo(evt)),
  setPlayerOffset: evt => dispatch(setPlayerOffset(evt)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Player);
