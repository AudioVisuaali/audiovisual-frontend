import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import VolumeSVG from 'svgs/Volume';
import VolumeMutedSVG from 'svgs/VolumeMuted';

const Wrapper = styled.div`
  display: flex;
  border-radius: 20px;
  width: 40px;
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
  transition: all 0.2s;
  padding: 0;

  &:hover {
    width: 160px;
    padding-left: 14px;
    background-color: rgba(0, 0, 0, 0.6);
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

const Slider = styled.input`
  appearance: none;
  flex-grow: 1;
  cursor: pointer;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.9;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
`;

const Volume = ({ volume, onVolume }) => {
  const [volumE, setVolume] = useState(volume);
  const [muted, setMuted] = useState(volume === 0);

  const onClick = () => {
    if (muted) {
      onVolume(volumE);
    } else {
      onVolume(0);
    }
    setMuted(!muted);
  };

  const onSliderVolume = e => {
    const value = parseFloat(e.target.value);
    setMuted(value === 0);
    setVolume(value);
    onVolume(value);
  };

  const currentVolume = muted ? 0 : volumE;

  return (
    <Wrapper>
      <SliderContainer>
        <Slider
          value={currentVolume}
          onChange={onSliderVolume}
          type="range"
          min="0"
          max="1"
          step="any"
        />
      </SliderContainer>
      <Button onClick={onClick}>
        {currentVolume ? <VolumeSVG /> : <VolumeMutedSVG />}
      </Button>
    </Wrapper>
  );
};

Volume.propTypes = {
  onVolume: PropTypes.func.isRequired,
  volume: PropTypes.number.isRequired,
};

export default Volume;
