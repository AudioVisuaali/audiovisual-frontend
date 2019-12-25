/**
 *
 * Hotkeys
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Hotkeys extends React.Component {
  constructor() {
    super();
    document.addEventListener('keydown', this.handleKey, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey, true);
  }

  handleKey = e => {
    const {
      onToggleMute,
      onToggleFullscreen,
      onTogglePlay,
      onRepeat,
      onForward,
      onRewind,
    } = this.props;
    const { keyCode } = e;

    if (e.target.nodeName.toLowerCase() !== 'body') {
      return;
    }

    switch (keyCode) {
      case 82:
        onRepeat();
        break;

      case 109: // m
        onToggleMute();
        break;
      case 77: // M
        onToggleMute();
        break;

      case 32:
        e.preventDefault();
        onTogglePlay();
        break;
      case 112: // p
        onTogglePlay();
        break;
      case 80: // P
        onTogglePlay();
        break;

      case 102: // f
        onToggleFullscreen();
        break;
      case 70: // F
        onToggleFullscreen();
        break;

      case 39: // ArrowRight
        onForward();
        break;

      case 37: // ArrowLeft
        onRewind();
        break;

      default:
        break;
    }
  };

  render() {
    return null;
  }
}

Hotkeys.propTypes = {
  onToggleMute: PropTypes.func,
  onToggleFullscreen: PropTypes.func,
  onTogglePlay: PropTypes.func,
  onRepeat: PropTypes.func,
  onForward: PropTypes.func,
  onRewind: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Hotkeys);
