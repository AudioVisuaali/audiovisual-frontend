import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatToReadable, secondsToClockFormat } from 'utils/time';

import VideoStats from './styles/VideoStats';
import VideoLive from './styles/VideoLive';
import RedBall from './styles/RedBall';

const Stats = ({ isLive, duration, played }) => {
  const [durationStr, setDurationStr] = useState();

  const updateDuration = () => {
    const newDuration = formatToReadable(secondsToClockFormat(duration));
    setDurationStr(newDuration);
  };

  useEffect(updateDuration, [duration]);
  useEffect(updateDuration, []);

  if (isLive) {
    return (
      <VideoLive>
        <RedBall />
        LIVE
      </VideoLive>
    );
  }

  const playedF = formatToReadable(secondsToClockFormat(played));
  const time = `${playedF}/${durationStr}`;

  return <VideoStats>{time}</VideoStats>;
};

Stats.propTypes = {
  isLive: PropTypes.bool,
  duration: PropTypes.number,
  played: PropTypes.number,
};

export default Stats;
