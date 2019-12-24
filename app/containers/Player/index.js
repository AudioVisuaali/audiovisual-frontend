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
} from 'containers/WebSocket/actions';
import Controls from 'components/Controls';
import Fullscreen from 'components/Fullscreen';
import ShowOnHover from 'components/ShowOnHover';
import { VOLUME, setItem, getItem } from 'utils/localStorage';
import { getSeeked } from 'utils/time';
import VideoHeader from './VideoHeader';
import VideoPlayer from './VideoPlayer';

import Wrapper from './styles/Wrapper';
import GreyBG from './styles/GreyBG';
import { addSubtitle, playNextSound } from './utils';

class Player extends React.Component {
  constructor(props) {
    super();
    this.playerRef = React.createRef();
    this.state = {
      playing: props.playing,
      url: props.currentVideo && props.currentVideo.url,
      allowNext: true,
      played: 0,
      duration: 0,
      volume: parseFloat(getItem(VOLUME)) || 0.2,
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
      url: nextProps.currentVideo ? nextProps.currentVideo.url : null,
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

  handleVolume = volume => {
    this.setState({ volume });
    setItem(VOLUME, volume);
  };

  setSeek = seconds =>
    // eslint-disable-next-line radix
    this.playerRef && this.playerRef.seekTo(parseInt(seconds));

  handleProgress = played => this.setState({ played: played.playedSeconds });

  handleDuration = duration => {
    const { timelineAction, playing } = this.props;
    const { initialSeeked } = this.state;

    const seconds = initialSeeked ? 0 : getSeeked(timelineAction, playing);
    this.setSeek(seconds);

    this.setState({ initialSeeked: true, duration, allowNext: true });
    this.setSubtitle();
  };

  handlePlay = state => this.props.setIsPlaying(state);

  handleSeek = seconds => {
    this.props.seekTo(seconds);
  };

  handlePlayerPlay = () => {
    this.setState({ playing: true });
    if (this.props.playing) return;

    setTimeout(() => this.setState({ playing: false }), 0);
  };

  handlePlayerPause = () => {
    this.setState({ playing: false });
    if (!this.props.playing) return;

    setTimeout(() => this.setState({ playing: true }), 0);
  };

  handleEnded = () => {
    if (!this.state.allowNext) return;
    this.setState({ allowNext: false });
    this.props.nextVideo();
  };

  setSubtitle = () => {
    const player = this.playerRef.getInternalPlayer();
    const { currentVideo } = this.props;
    addSubtitle(currentVideo, player);
  };

  handlePlayerRef = ref => {
    this.playerRef = ref;
  };

  render() {
    const { currentVideo } = this.props;
    const { duration, played, playing, url, volume, showPlayer } = this.state;

    if (!currentVideo || !showPlayer) {
      return <GreyBG />;
    }

    const isLive = currentVideo.type === 'twitch-live';

    return (
      <Fullscreen style={{ height: '100%' }}>
        {(toggleFullscreen, isFullscreen) => (
          <Wrapper>
            <VideoPlayer
              onDuration={this.handleDuration}
              onPause={this.handlePlayerPause}
              onPlay={this.handlePlayerPlay}
              onProgress={this.handleProgress}
              onEnded={this.handleEnded}
              ref={this.handlePlayerRef}
              playing={playing}
              url={url}
              volume={volume}
            />
            <ShowOnHover show={!playing}>
              <VideoHeader video={currentVideo} />
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
              />
            </ShowOnHover>
          </Wrapper>
        )}
      </Fullscreen>
    );
  }
}

Player.propTypes = {
  setIsPlaying: PropTypes.func.isRequired,
  seekTo: PropTypes.func.isRequired,
  nextVideo: PropTypes.func.isRequired,
  timelineAction: PropTypes.object,
  currentVideo: PropTypes.object,
  playing: PropTypes.bool,
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
  nextVideo: () => dispatch(emitRoomNextVideo()),
});

// eslint-disable-next-line prettier/prettier
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Player);
