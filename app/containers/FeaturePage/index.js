/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import { Scrollbars } from 'react-custom-scrollbars';

import Primary from './styles/Primary';
import Secondary from './styles/Secondary';
import Wrapper from './styles/Wrapper';
import ChatFieldContainer from './styles/ChatFieldContainer';
import ChatContainer from './styles/ChatContainer';
import VideoContainer from './styles/VideoContainer';
import DynamicVideoContainer from './styles/DynamicVideoContainer';
import ChatTextField from '../../components/ChatTextField';
import VideosManagement from '../VideosManagement';
import VideoInformation from '../VideoInformation';
import ChatSelector from './ChatSelector';

const smallPlayerOffset = 150;
const playerConfig = {
  youtube: {
    playerVars: { showinfo: 1, controls: 1 },
  },
};

class FeaturePage extends React.Component {
  constructor() {
    super();
    this.playerContainer = React.createRef();
    this.state = {
      playerHeight: 0,
      smallPlayer: false,
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

  render() {
    const { smallPlayer, playerHeight } = this.state;
    const VideoPlayerStyle = { height: playerHeight };
    return (
      <Wrapper>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <Primary ref={this.playerContainer}>
          <Scrollbars
            onUpdate={this.handleScroll}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            universal
          >
            <VideoContainer style={VideoPlayerStyle}>
              <DynamicVideoContainer dynamic={smallPlayer}>
                <ReactPlayer
                  height="100%"
                  width="100%"
                  url="https://www.youtube.com/watch?v=POv2cKxqbNY"
                  config={playerConfig}
                  playing
                />
              </DynamicVideoContainer>
            </VideoContainer>
            <VideosManagement />
          </Scrollbars>
        </Primary>
        <Secondary>
          <VideoInformation />
          <ChatSelector></ChatSelector>
          <ChatContainer>asd</ChatContainer>
          <ChatFieldContainer>
            <ChatTextField></ChatTextField>
          </ChatFieldContainer>
        </Secondary>
      </Wrapper>
    );
  }
}

export default FeaturePage;
