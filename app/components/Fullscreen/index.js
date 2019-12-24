import React from 'react';
import PropTypes from 'prop-types';
import {
  openFullscreen,
  closeFullscreen,
  isFullScreen,
  listenFullScreenChange,
  removeListenFullScreenChange,
} from 'utils/fullscreen';

class Fullscreen extends React.Component {
  constructor() {
    super();
    this.wrapperRef = React.createRef();
    this.state = { isFullscreen: false };
    listenFullScreenChange(this.handleFullScreenChange);
  }

  componentWillUnmount() {
    removeListenFullScreenChange(this.handleFullScreenChange);
  }

  toggleFullscreen = () => {
    const { isFullscreen } = this.state;

    if (isFullscreen) {
      closeFullscreen();
    } else {
      openFullscreen(this.wrapperRef);
    }

    // Toggle
    this.setState({ isFullscreen: !isFullscreen });
  };

  handleFullScreenChange = () => {
    // Detect when player is closed by pressing escape key
    if (!isFullScreen()) {
      return;
    }

    this.setState({ isFullscreen: false });
  };

  handleWrapperRef = ref => {
    this.wrapperRef = ref;
  };

  render() {
    // Renders a function with toggleFullscreen as first param
    // <Fullscreen>
    //   {toggleFullscreen => ()}
    const { children, ...rest } = this.props;
    const { isFullscreen } = this.state;

    return (
      <div {...rest} ref={this.handleWrapperRef}>
        {children(this.toggleFullscreen, isFullscreen)}
      </div>
    );
  }
}

Fullscreen.propTypes = {
  children: PropTypes.func,
};

export default Fullscreen;
