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

import Wrapper from './styles/Wrapper';
import VideoContainer from './styles/VideoContainer';
import DynamicVideoContainer from './styles/DynamicVideoContainer';
import PopUpSelector from './PopUpSelector';

const smallPlayerOffset = 100;

export class FeaturePageLeft extends React.Component {
  constructor() {
    super();
    this.playerContainer = React.createRef();
    this.state = {
      playerHeight: 0,
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

    const newWidth = Math.ceil((width * 9) / 16);

    if (this.state.playerHeight === newWidth) return;

    this.setState({ playerHeight: newWidth });
  };

  handleScroll = e => {
    const { smallPlayer } = this.state;
    const isLargePlayer = e.scrollTop > smallPlayerOffset;

    if (isLargePlayer === smallPlayer) return;

    this.setState({ smallPlayer: isLargePlayer });
  };

  handlePopUp = value => this.setState({ isVideoManagementSelected: value });

  innerContent = () => {
    const { isMobile, currentVideo } = this.props;
    const { isVideoManagementSelected, smallPlayer, playerHeight } = this.state;

    const smallPlayerAndAllowed = currentVideo && smallPlayer;
    const VideoPlayerStyle = { height: playerHeight };
    return (
      <>
        <VideoContainer style={VideoPlayerStyle}>
          <DynamicVideoContainer dynamic={smallPlayerAndAllowed}>
            <Player />
          </DynamicVideoContainer>
        </VideoContainer>
        {!isMobile || (isMobile && isVideoManagementSelected) ? (
          <VideosManagement />
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
