import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import VolumeUpSVG from 'svgs/VolumeUp';
import VolumeDownSVG from 'svgs/VolumeDown';
import VolumeSVG from 'svgs/Volume';
import VolumeMutedSVG from 'svgs/VolumeMuted';
import Slider from 'components/Slider';

const hoverBackground = p =>
  p.theme.isDark ? p.theme.whiteRGBA[10] : p.theme.grey[700];

const Wrapper = styled.div`
  display: flex;
  border-radius: 20px;
  width: 40px;
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  padding: 0;
  margin-left: 5px;

  &:hover {
    width: 160px;
    padding-right: 14px;
    background-color: ${hoverBackground};
  }
`;

const Button = styled.button`
  flex-grow: 0;
  flex-shrink: 0;
  background-color: transparent;
  height: 40px;
  width: 40px;
  border: none;
  color: #fff;
  padding: 8px 8px 8px 8px;
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.2em;
  margin-bottom: 0.19125em;
`;

function getVolumeSVG(volume) {
  if (!volume) {
    return <VolumeMutedSVG />;
  }

  if (volume < 0.33) {
    return <VolumeDownSVG />;
  }

  if (volume < 0.66) {
    return <VolumeSVG />;
  }

  return <VolumeUpSVG />;
}

const Volume = ({ volume, muted, onMute, onVolume }) => {
  const onSliderVolume = e => {
    const value = parseFloat(e.target.value);
    onVolume(value);
  };

  const currentVolume = muted ? 0 : volume;

  return (
    <Wrapper>
      <Button onClick={onMute}>{getVolumeSVG(currentVolume)}</Button>

      <div style={{ overflow: 'hidden' }}>
        <SliderContainer>
          <Slider
            disableTheme
            value={currentVolume}
            onChange={onSliderVolume}
            type="range"
            min="0"
            max="1"
            step="any"
          />
        </SliderContainer>
      </div>
    </Wrapper>
  );
};

Volume.propTypes = {
  onVolume: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
  muted: PropTypes.bool.isRequired,
  onMute: PropTypes.func.isRequired,
};

export default Volume;
