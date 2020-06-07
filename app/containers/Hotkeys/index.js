/**
 *
 * Hotkeys
 *
 */

import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Hotkeys = props => {
  const {
    onToggleMute,
    onToggleFullscreen,
    onTogglePlay,
    onForward,
    onRewind,
  } = props;

  useEffect(() => {
    const handleKey = e => {
      const { keyCode } = e;

      const nodeName = e.target.nodeName.toLowerCase();
      if (['textarea', 'input'].includes(nodeName)) {
        return;
      }

      switch (keyCode) {
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

    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return null;
};

Hotkeys.propTypes = {
  onToggleMute: PropTypes.func,
  onToggleFullscreen: PropTypes.func,
  onTogglePlay: PropTypes.func,
  onForward: PropTypes.func,
  onRewind: PropTypes.func,
};

export default Hotkeys;
