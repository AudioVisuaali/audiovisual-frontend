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
} from 'containers/WebSocket/selectors';
import {
  emitRoomSeek,
  emitRoomIsPlaying,
  emitRoomNextVideo,
  emitRoomAddVideo,
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
} from './utils';

class Player extends React.Component {
  constructor(props) {
    super();
    const { currentVideo, playing } = props;
    this.playerRef = React.createRef();
    this.state = {
      syncing: false,
      playing,
      video: currentVideo,
      played: 0,
      duration: 0,
      muted: getMuted(),
      volume: getVolume(),
      initialSeeked: false,
      showPlayer: true,
    };
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
      video: nextProps.currentVideo,
    };

    const noNeedOfReload =
      currentVideo &&
      nextProps.currentVideo &&
      nextProps.currentVideo.url === currentVideo.url;

    // Youtube player allows to play next video when tab is not active.
    //   Remounting the player requires an active tab to resume playback
    if (noNeedOfReload) {
      this.setState(newState);
      this.setSeek(0);
      return;
    }

    newState.duration = 0;
    newState.showPlayer = false;
    await this.setState(newState);

    await this.forceUpdate();

    this.setState({ showPlayer: true });
  }

  setSeek = seconds => {
    if (!this.playerRef || !this.playerRef.seekTo) {
      return;
    }

    this.playerRef.seekTo(parseFloat(seconds, 10));
    this.setState({ syncing: false });
  };

  getCurrentTime = () => {
    if (!this.playerRef || !this.playerRef.seekTo) {
      return null;
    }
    return this.playerRef.getCurrentTime();
  };

  checkAndSync = playedSeconds => {
    const { timelineAction } = this.props;

    const accPlayTime = getSeeked(timelineAction);
    // Video should never be ahead
    const offsetVal = getThresholdValue();
    const offset = offsetVal < 0.04 ? 0.04 : offsetVal;
    const played = this.getCurrentTime();
    const min = accPlayTime - offset;
    const max = accPlayTime + offset;
    const isOutOfBoundary = min > played || max < played;

    const offsetMs = Math.ceil((accPlayTime - playedSeconds) * 1000);
    console.log(`[Offset] ${accPlayTime}s±${offset}s, offset: ${offsetMs}ms`);

    if (isOutOfBoundary) {
      this.setState({ playing: false });
      this.setSeek(accPlayTime + 0.3);

      setTimeout(() => {
        this.setState({ playing: true });
      }, 300);
    }

    return isOutOfBoundary;
  };

  handleProgress = played => {
    const { syncing, duration } = this.state;
    const { playedSeconds } = played;

    const newState = { played: playedSeconds };

    if (!syncing && duration) {
      newState.syncing = this.checkAndSync(playedSeconds);
    }

    this.setState(newState);
  };

  handleDuration = duration => {
    const { timelineAction } = this.props;
    const { initialSeeked } = this.state;

    const seconds = initialSeeked ? 0 : getSeeked(timelineAction);
    this.setSeek(seconds);

    this.setState({ initialSeeked: true, duration });
    this.setSubtitle();
  };

  handlePlay = () => {
    const { playing } = this.state;
    this.props.setIsPlaying(!playing);
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

  handleRepeat = () => {
    const { video } = this.state;
    this.props.addVideo(video.repeat);
  };

  handlePlayerPlay = async () => {
    this.setState({ playing: true });
    if (this.props.playing) return;

    await this.forceUpdate();

    this.setState({ playing: false });
  };

  handlePlayerPause = async () => {
    this.setState({ playing: false });
    if (!this.props.playing) return;

    await this.forceUpdate();

    this.setState({ playing: true });
  };

  handleEnded = async () => {
    this.setState({ played: 0 }, this.props.nextVideo);
  };

  setSubtitle = () => {
    const player = this.playerRef.getInternalPlayer();
    const { currentVideo } = this.props;
    addSubtitle(currentVideo, player);
  };

  handlePlayerRef = ref => {
    this.playerRef = ref;
  };

  handleMute = () => {
    this.setState(prevState => {
      setItem(MUTED, !prevState.muted);
      return {
        muted: !prevState.muted,
      };
    });
  };

  handleVolume = volume => {
    this.setState({ volume, muted: false });
    setItem(VOLUME, volume);
  };

  getPlayer = (toggleFullscreen, isFullscreen) => {
    const {
      duration,
      played,
      playing,
      video,
      volume,
      showPlayer,
      muted,
      syncing,
    } = this.state;

    if (!showPlayer) {
      return null;
    }

    const isLive = video.type === 'twitch-live';

    const playerVolume = muted ? 0 : volume;

    return (
      <Wrapper>
        <RunningBehind show={syncing} />
        <VideoPlayer
          onDuration={this.handleDuration}
          onPause={this.handlePlayerPause}
          onPlay={this.handlePlayerPlay}
          onProgress={this.handleProgress}
          onEnded={this.handleEnded}
          ref={this.handlePlayerRef}
          playing={playing}
          url={video.url}
          volume={playerVolume}
        />
        <ShowOnHover show={!playing}>
          <Hotkeys
            onToggleFullscreen={toggleFullscreen}
            onForward={this.windForward}
            onRewind={this.rewind}
            onRepeat={this.handleRepeat}
            onTogglePlay={this.handlePlay}
            onToggleMute={this.handleMute}
          />
          <VideoHeader video={video} />
          <Controls
            onToggleFullscreen={toggleFullscreen}
            onVolume={this.handleVolume}
            onSeek={this.handleSeek}
            onPlay={this.handlePlay}
            duration={duration}
            isFullscreen={isFullscreen}
            playing={playing}
            played={played}
            volume={volume}
            isLive={isLive}
            muted={muted}
            onMute={this.handleMute}
          />
        </ShowOnHover>
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
  nextVideo: PropTypes.func.isRequired,
  timelineAction: PropTypes.object,
  currentVideo: PropTypes.object,
  playing: PropTypes.bool,
  addVideo: PropTypes.func.isRequired,
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
});

const mapDispatchToProps = dispatch => ({
  setIsPlaying: evt => dispatch(emitRoomIsPlaying(evt)),
  seekTo: evt => dispatch(emitRoomSeek(evt)),
  addVideo: evt => dispatch(emitRoomAddVideo(evt)),
  nextVideo: () => dispatch(emitRoomNextVideo()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Player);
