/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import WebSocket from 'containers/WebSocket';
import FeaturePageRight from 'containers/FeaturePageRight';
import FeaturePageLeft from 'containers/FeaturePageLeft';

import Wrapper from './Wrapper';

class FeaturePage extends React.Component {
  constructor() {
    super();
    this.state = {
      socket: null,
      isMobile: false,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    if (window.attachEvent) {
      window.attachEvent('onresize', this.handleResize);
    } else if (window.addEventListener) {
      window.addEventListener('resize', this.handleResize, true);
    }
    this.handleResize();
  }

  componentWillUnmount() {
    if (window.detachEvent) {
      window.detachEvent('onresize', this.handleResize);
    } else if (window.removeEventListener) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleResize = () => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile === this.state.isMobile) return;

    this.setState({ isMobile });
  };

  handleState = emit => {
    this.setState({ socket: emit });
  };

  render() {
    const { isMobile, socket } = this.state;
    return (
      <Wrapper>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <WebSocket onConnection={this.handleState} />
        {socket && (
          <>
            <FeaturePageLeft isMobile={isMobile} socket={socket} />
            {!isMobile && <FeaturePageRight socket={socket} />}
          </>
        )}
      </Wrapper>
    );
  }
}

export default FeaturePage;
