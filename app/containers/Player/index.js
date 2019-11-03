/**
 *
 * Player
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import Axios from 'axios';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectCurrentlyPlaying,
  makeSelectSeek,
  makeSelectPlaying,
  makeSelectTimelineAction,
} from 'containers/WebSocket/selectors';
import {
  WS_ACTION_IS_PLAYING,
  WS_ACTION_SEEK,
  WS_ACTION_NEXT_VIDEO,
} from 'containers/WebSocket/constants';
import Controls from 'components/Controls';
import { VOLUME, setItem, getItem } from 'utils/localStorage';
import { openFullscreen, closeFullscreen } from 'utils/fullscreen';
import { getSeeked } from 'utils/time';
import VideoHeader from './VideoHeader';

import Wrapper from './styles/Wrapper';
import ControlWapper from './styles/ControlWapper';
import GreyBG from './styles/GreyBG';
import nextVideoSound from './audio';
import playerConfig from './playerConfig';

const createTrackNode = trackRaw => {
  const node = document.createElement('track');
  node.label = 'English';
  node.kind = 'subtitles';
  node.srclang = 'en';
  node.default = true;

  // Cross url doesn't work (browser end, NOT CORS)
  const base64 = btoa(unescape(encodeURIComponent(trackRaw)));
  node.src = `data:image/png;base64, ${base64}`;
  return node;
};

class Player extends React.Component {
  constructor(props) {
    super();
    this.playerRef = React.createRef();
    this.wrapperRef = React.createRef();
    this.showPalyerControlsTimeout = null;
    this.state = {
      isFullscreen: false,
      playing: props.playing,
      url: props.currentVideo && props.currentVideo.url,
      allowNext: true,
      displayControls: false,
      played: 0,
      duration: 0,
      volume: parseFloat(getItem(VOLUME)) || 0,
      initialSeeked: false,
      isLive: props.currentVideo && props.currentVideo.type === 'twitch-live',
    };

    this.onMouseMove = this.onMouseMove.bind(this);
    document.addEventListener('fullscreenchange', this.handleExitFullScreen);
    document.addEventListener(
      'webkitfullscreenchange',
      this.handleExitFullScreen,
    );
    document.addEventListener('mozfullscreenchange', this.handleExitFullScreen);
    document.addEventListener('MSFullscreenChange', this.handleExitFullScreen);
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { seek, currentVideo, playing } = this.props;

    if (nextProps.seek.updatedAt !== seek.updatedAt) {
      this.setSeek(nextProps.seek.seekTo);
    }

    if (nextProps.playing !== playing) {
      this.setState({ playing: nextProps.playing });
    }

    const nextUnique = nextProps.currentVideo && nextProps.currentVideo.unique;
    const CurrentUnique = currentVideo && currentVideo.unique;

    if (nextUnique === CurrentUnique) return;

    const audio = new Audio(nextVideoSound);

    if (nextProps.currentVideo) {
      audio.play();
    }

    const nextURL = nextProps.currentVideo && nextProps.currentVideo.url;
    const CurrentURL = currentVideo && currentVideo.url;

    const isLive =
      nextProps.currentVideo && nextProps.currentVideo.type === 'twitch-live';
    if (nextURL !== CurrentURL) {
      // TODO
      // this.playerRef.getInternalPlayer().loadVideoById('UOxkGD8qRB4');
      this.setState({
        played: 0,
        duration: 0,
        allowNext: false,
        url: nextURL,
        isLive,
      });
      return;
    }

    this.setState({ played: 0, duration: 0, allowNext: false, url: null });
    setTimeout(() => {
      this.setState({
        isLive,
        url: nextProps.currentVideo ? nextProps.currentVideo.url : null,
      });
    }, 0);
  }

  toggleFullscreen = () => {
    const { isFullscreen } = this.state;
    this.setState(state => ({ isFullscreen: !state.isFullscreen }));

    if (isFullscreen) closeFullscreen();
    else {
      openFullscreen(this.wrapperRef);
    }
  };

  handleExitFullScreen = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      this.setState({ isFullscreen: false });
    }
  };

  handleMouseEnter = () => {
    this.setState({ displayControls: true });
    document.addEventListener('mousemove', this.onMouseMove, true);
  };

  onMouseMove() {
    this.setState({ displayControls: true });
    clearTimeout(this.showPalyerControlsTimeout);
    this.showPalyerControlsTimeout = setTimeout(
      () => this.setState({ displayControls: false }),
      1000,
    );
  }

  handleMouseLeave = () => {
    this.setState({ displayControls: false });
    document.removeEventListener('mousemove', this.onMouseMove, true);
  };

  handleVolume = volume => {
    this.setState({ volume });
    setItem(VOLUME, volume);
  };

  setSeek = seconds =>
    // eslint-disable-next-line radix
    this.playerRef && this.playerRef.seekTo(parseInt(seconds), 'seconds');

  handleProgress = played => this.setState({ played: played.playedSeconds });

  handleDuration = duration => {
    if (!this.state.initialSeeked) {
      const { timelineAction, playing } = this.props;
      const seconds = getSeeked(timelineAction, playing);
      this.setSeek(seconds);
    }

    this.setState({ initialSeeked: true, duration, allowNext: true });
    this.setSubtitle();
  };

  handlePlay = state => this.props.socket(WS_ACTION_IS_PLAYING, state);

  handleSeek = seconds => this.props.socket(WS_ACTION_SEEK, seconds);

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

  handleEnd = () => {
    const { socket, currentVideo } = this.props;
    if (!this.state.allowNext) return;
    this.setState({ allowNext: false });
    socket(WS_ACTION_NEXT_VIDEO, currentVideo.unique);
  };

  setSubtitle = () => {
    const { currentVideo } = this.props;
    if (!(currentVideo && currentVideo.subtitle)) return;

    Axios.get(currentVideo.subtitle).then(res => {
      const track = createTrackNode(res.data);

      // Add subtitle
      const player = this.playerRef.getInternalPlayer();
      player.appendChild(track);
    });
  };

  handleWrapperRef = ref => {
    this.wrapperRef = ref;
  };

  handlePlayerRef = ref => {
    this.playerRef = ref;
  };

  render() {
    const { currentVideo } = this.props;
    const {
      displayControls,
      duration,
      isFullscreen,
      played,
      playing,
      url,
      volume,
      isLive,
    } = this.state;

    if (!url) {
      return <GreyBG />;
    }

    const showControls = !playing || displayControls;

    return (
      <Wrapper
        ref={this.handleWrapperRef}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onTouchStart={this.handleMouseEnter}
      >
        <ReactPlayer
          onReady={this.handleOnReady}
          onDuration={this.handleDuration}
          onPause={this.handlePlayerPause}
          onPlay={this.handlePlayerPlay}
          onProgress={this.handleProgress}
          onEnded={this.handleEnd}
          ref={this.handlePlayerRef}
          height="100%"
          width="100%"
          config={playerConfig}
          playing={playing}
          url={url}
          volume={volume}
        />
        {url && (
          <ControlWapper show={showControls}>
            <VideoHeader video={currentVideo} />
            <Controls
              onToggleFullscreen={this.toggleFullscreen}
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
          </ControlWapper>
        )}
      </Wrapper>
    );
  }
}

Player.propTypes = {
  socket: PropTypes.func,
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

const mapDispatchToProps = dispatch => ({ dispatch });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Player);
