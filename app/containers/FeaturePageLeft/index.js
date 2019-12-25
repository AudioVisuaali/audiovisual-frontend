/**
 *
 * FeaturePageLeft
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Scrollbars } from 'react-custom-scrollbars';

import Player from 'containers/Player';
import VideosManagement from 'containers/VideosManagement';
import { makeSelectCurrentlyPlaying } from 'containers/WebSocket/selectors';
import FeaturePageRight from 'containers/FeaturePageRight';

import VideoContainerPixelFix from './styles/VideoContainerPixelFix';
import Wrapper from './styles/Wrapper';
import VideoContainer from './styles/VideoContainer';
import DynamicVideoContainer from './styles/DynamicVideoContainer';
import PopUpSelector from './PopUpSelector';

const smallPlayerOffset = 100;

export class FeaturePageLeft extends React.Component {
  constructor() {
    super();
    this.playerContainer = React.createRef();
    this.scrollBars = React.createRef();
    this.state = {
      playerHeight: 0,
      isFixedPlayer: false,
      smallPlayer: false,
      isVideoManagementSelected: true,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { width } = this.playerContainer.current.getBoundingClientRect();

    const newHeight = Math.ceil((width * 9) / 16);

    if (this.state.playerHeight === newHeight) return;

    this.setState({ playerHeight: newHeight });
  };

  handleScroll = e => {
    const { smallPlayer, playerHeight, isFixedPlayer } = this.state;
    const isLargePlayer = e.scrollTop > smallPlayerOffset;
    const newIsFixedPlayer = e.scrollTop > playerHeight;

    if (isLargePlayer !== smallPlayer) {
      this.setState({ smallPlayer: isLargePlayer });
    }

    if (newIsFixedPlayer !== isFixedPlayer) {
      this.setState({ isFixedPlayer: newIsFixedPlayer });
    }
  };

  handleRequestScroll = () => {
    const { playerHeight } = this.state;
    const node = this.scrollBars.current.container.firstChild;

    const fromTop = playerHeight < 500 ? 200 : playerHeight - 60;

    const properties = { top: fromTop };
    properties.behavior = 'smooth';
    node.scrollTo(properties);
  };

  handlePopUp = value => this.setState({ isVideoManagementSelected: value });

  innerContent = () => {
    const { isMobile, currentVideo } = this.props;
    const {
      isVideoManagementSelected,
      smallPlayer,
      playerHeight,
      isFixedPlayer,
    } = this.state;

    const smallPlayerAndAllowed = currentVideo && smallPlayer;
    const VideoPlayerStyle = { height: playerHeight };
    const pixelFixStyle = { height: playerHeight - 1 };
    return (
      <>
        <VideoContainerPixelFix style={pixelFixStyle}>
          <VideoContainer style={VideoPlayerStyle}>
            <DynamicVideoContainer
              sticky={isFixedPlayer}
              dynamic={smallPlayerAndAllowed}
            >
              <Player />
            </DynamicVideoContainer>
          </VideoContainer>
        </VideoContainerPixelFix>
        {!isMobile || (isMobile && isVideoManagementSelected) ? (
          <VideosManagement onRequestScroll={this.handleRequestScroll} />
        ) : (
          <FeaturePageRight isMobile={isMobile} />
        )}
      </>
    );
  };

  checkForMobile = () => {
    const { isMobile } = this.props;

    if (isMobile) {
      return this.innerContent();
    }

    return (
      <Scrollbars
        ref={this.scrollBars}
        onUpdate={this.handleScroll}
        autoHide
        autoHideTimeout={200}
        autoHideDuration={200}
        universal
      >
        {this.innerContent()}
      </Scrollbars>
    );
  };

  render() {
    const { isMobile } = this.props;
    const { isVideoManagementSelected } = this.state;

    return (
      <Wrapper ref={this.playerContainer}>
        {isMobile && (
          <PopUpSelector
            chatSelected={isVideoManagementSelected}
            onSelect={this.handlePopUp}
          />
        )}
        {this.checkForMobile()}
      </Wrapper>
    );
  }
}

FeaturePageLeft.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  currentVideo: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = createStructuredSelector({
  currentVideo: makeSelectCurrentlyPlaying(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(FeaturePageLeft);
