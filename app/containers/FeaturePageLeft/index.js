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
import PasteContainer from 'containers/PasteContainer';
import VideosManagement from 'containers/VideosManagement';
import { makeSelectCurrentlyPlaying } from 'containers/WebSocket/selectors';

import VideoContainerPixelFix from './styles/VideoContainerPixelFix';
import Wrapper from './styles/Wrapper';
import VideoContainer from './styles/VideoContainer';
import DynamicVideoContainer from './styles/DynamicVideoContainer';

export class FeaturePageLeft extends React.Component {
  constructor() {
    super();
    this.playerContainer = React.createRef();
    this.scrollBars = React.createRef();
    this.state = {
      playerHeight: 0,
      isFixedPlayer: false,
      smallPlayer: false,
      isRelativeMenu: false,
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
    const {
      isRelativeMenu,
      smallPlayer,
      playerHeight,
      isFixedPlayer,
    } = this.state;
    const isLargePlayer = e.scrollTop > playerHeight * 0.35;
    const newIsFixedPlayer = e.scrollTop > playerHeight;
    const newIsRelativeMenu = e.scrollTop > playerHeight + 20;

    if (isLargePlayer !== smallPlayer) {
      this.setState({ smallPlayer: isLargePlayer });
    }

    if (newIsFixedPlayer !== isFixedPlayer) {
      this.setState({ isFixedPlayer: newIsFixedPlayer });
    }

    if (isRelativeMenu !== newIsRelativeMenu) {
      this.setState({ isRelativeMenu: newIsRelativeMenu });
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

  render() {
    const { currentVideo } = this.props;
    const { smallPlayer, isFixedPlayer, isRelativeMenu } = this.state;

    const smallPlayerAndAllowed = currentVideo && smallPlayer;

    return (
      <>
        <PasteContainer />
        <Wrapper ref={this.playerContainer}>
          <Scrollbars
            className="scroll-bars-fix"
            ref={this.scrollBars}
            onUpdate={this.handleScroll}
            autoHide
            autoHideTimeout={200}
            autoHideDuration={200}
            universal
          >
            <VideoContainerPixelFix>
              <VideoContainer>
                <DynamicVideoContainer
                  sticky={isFixedPlayer}
                  dynamic={smallPlayerAndAllowed}
                >
                  <Player />
                </DynamicVideoContainer>
              </VideoContainer>
            </VideoContainerPixelFix>
            <VideosManagement
              isRelativeMenu={isRelativeMenu}
              onRequestScroll={this.handleRequestScroll}
            />
          </Scrollbars>
        </Wrapper>
      </>
    );
  }
}

FeaturePageLeft.propTypes = {
  currentVideo: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = createStructuredSelector({
  currentVideo: makeSelectCurrentlyPlaying(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(FeaturePageLeft);
