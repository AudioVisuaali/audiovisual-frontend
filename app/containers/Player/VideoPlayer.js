import React from 'react';
import ReactPlayer from 'react-player';

export const playerConfig = {
  youtube: {
    playerVars: { autoplay: 0, showinfo: 1, controls: 0 },
  },
  vimeo: {
    controls: 0,
  },
};

const Player = React.forwardRef((props, ref) => (
  <ReactPlayer
    {...props}
    ref={ref}
    height="100%"
    width="100%"
    config={playerConfig}
    progressInterval={1000}
  />
));

export default Player;
