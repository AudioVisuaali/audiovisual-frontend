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
import EyeSlash from 'svgs/EyeSlash';
import Slider from 'components/Slider';

// import messages from './messages';
import Wrapper from './styles/Wrapper';
import PlayButton from './styles/PlayButton';
import ControlLeft from './styles/ControlLeft';
import ControlRight from './styles/ControlRight';
import ControlWrapper from './styles/ControlWrapper';
import SliderContainer from './styles/SliderContainer';
import FullScreenContainer from './styles/FullScreenContainer';
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
  muted,
  onMute,
  video,
  onHideControls,
}) => {
  const [isUserSeeking, setIsUserSeeking] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const [seekingAt, setSeekingAt] = useState(null);

  useEffect(() => {
    if (isUserSeeking) return;
    setSeeking(false);
  }, [played]);

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

    const parsed = parseFloat(seekingAt, 10);

    if (Number.isNaN(parsed)) {
      return;
    }

    onSeek(parsed);
  };

  const playedOrSeek = seeking ? seekingAt : played;

  return (
    <Wrapper>
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
      <ControlWrapper>
        <ControlLeft>
          <PlayButton onClick={onPlay}>
            {playing ? <PauseSVG /> : <PlaySVG />}
          </PlayButton>
          <Volume
            volume={volume}
            muted={muted}
            onMute={onMute}
            onVolume={onVolume}
          />
          <Stats
            isLive={isLive}
            video={video}
            played={playedOrSeek || 0}
            duration={duration}
          />
        </ControlLeft>
        <ControlRight>
          <FullScreenContainer>
            <PlayButton onClick={onHideControls}>
              <EyeSlash />
            </PlayButton>
            <PlayButton onClick={onToggleFullscreen}>
              {isFullscreen ? <CompressSVG /> : <ExpandSVG />}
            </PlayButton>
          </FullScreenContainer>
        </ControlRight>
      </ControlWrapper>
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
  muted: PropTypes.bool,
  onMute: PropTypes.func,
};

export default Controls;
