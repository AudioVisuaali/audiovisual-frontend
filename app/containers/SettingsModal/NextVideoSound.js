import React, { useState } from 'react';
import styled from 'styled-components';

import Label from 'components/Label';
import Slider from 'components/Slider';
import { SOUND_NEXT_VIDEO, setItem, getItem } from 'utils/localStorage';

import ThreshHold from './ThreshHold';

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

const getSoundNextVideoLevel = () => {
  const value = getItem(SOUND_NEXT_VIDEO);
  const parsed = parseFloat(value, 10);
  if (Number.isNaN(parsed)) {
    return 80;
  }

  return parsed;
};

const NextVideoSound = () => {
  // Value needs to exist somewhere
  const [threshold, setThreshold] = useState(getSoundNextVideoLevel());

  const handleBlur = e => {
    const { value } = e.target;
    setItem(SOUND_NEXT_VIDEO, value);
    setThreshold(value);
  };

  return (
    <div>
      <Slider
        min="0"
        max="100"
        step="1"
        type="range"
        value={threshold}
        onInput={handleBlur} // Touch
        onChange={handleBlur}
      />
      <Info>
        <Label>0%</Label>
        <ThreshHold>{threshold}%</ThreshHold>
        <Label>100%</Label>
      </Info>
    </div>
  );
};

export default NextVideoSound;
