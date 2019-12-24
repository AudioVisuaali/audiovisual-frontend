/**
 *
 * Controls
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';

import PlaySVG from 'svgs/Play';
import PauseSVG from 'svgs/Pause';
import ExpandSVG from 'svgs/Expand';
import CompressSVG from 'svgs/Compress';

// import messages from './messages';
import Wrapper from './styles/Wrapper';
import PlayButton from './styles/PlayButton';
import ControlLeft from './styles/ControlLeft';
import ControlRight from './styles/ControlRight';
import ControlWrapper from './styles/ControlWrapper';
import SliderContainer from './styles/SliderContainer';
import FullScreenContainer from './styles/FullScreenContainer';
import Slider from './Slider';
import Volume from './Volume';
import Stats from './Stats';

const Controls = ({
  playing,
  onPlay,
  volume,
  onVolume,
  onSeek,
  played,
  duration,
  onToggleFullscreen,
  isFullscreen,
  isLive,
}) => {
  const [isUserSeeking, setIsUserSeeking] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const [seekingAt, setSeekingAt] = useState(null);

  useEffect(() => {
    if (isUserSeeking) return;
    setSeeking(false);
  }, [played]);

  const handlePlayPause = () => onPlay(!playing);

  const handleSeek = e => {
    // eslint-disable-next-line radix
    setSeekingAt(e.target.value);
  };
  const handleOnMouseDown = () => {
    setSeeking(true);
    setIsUserSeeking(true);
  };
  const handleOnMouseUp = () => {
    setIsUserSeeking(false);
    if (typeof seekingAt === 'object') {
      return;
    }

    onSeek(seekingAt);
  };

  const playedOrSeek = seeking ? seekingAt : played;

  return (
    <Wrapper>
      <ControlWrapper>
        <ControlLeft>
          <PlayButton onClick={handlePlayPause}>
            {playing ? <PauseSVG /> : <PlaySVG />}
          </PlayButton>
          <Stats
            isLive={isLive}
            played={playedOrSeek || 0}
            duration={duration}
          />
        </ControlLeft>
        <ControlRight>
          <Volume volume={volume} onVolume={onVolume} />
          <FullScreenContainer>
            <PlayButton onClick={onToggleFullscreen}>
              {isFullscreen ? <CompressSVG /> : <ExpandSVG />}
            </PlayButton>
          </FullScreenContainer>
        </ControlRight>
      </ControlWrapper>
      {!isLive && (
        <SliderContainer>
          <Slider
            type="range"
            min="0"
            max={duration}
            value={playedOrSeek || 0}
            onTouchStart={handleOnMouseDown} // touch
            onMouseDown={handleOnMouseDown}
            onTouchEnd={handleOnMouseUp} // touch
            onMouseUp={handleOnMouseUp}
            onInput={handleSeek} // touch
            onChange={handleSeek}
            step="any"
          />
        </SliderContainer>
      )}
    </Wrapper>
  );
};

Controls.propTypes = {
  isLive: PropTypes.bool,
  isFullscreen: PropTypes.bool,
  onToggleFullscreen: PropTypes.func,
  onPlay: PropTypes.func,
  onSeek: PropTypes.func,
  onVolume: PropTypes.func,
  playing: PropTypes.bool,
  volume: PropTypes.number,
  played: PropTypes.number,
  duration: PropTypes.number,
};

export default Controls;
