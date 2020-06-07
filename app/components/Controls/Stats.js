import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatToReadable, secondsToClockFormat } from 'utils/time';
import TwitchViewerCount from 'components/TwitchViewerCount';
import { FormattedMessage } from 'react-intl';

import VideoStats from './styles/VideoStats';
import VideoLive from './styles/VideoLive';
import RedBall from './styles/RedBall';
import Viewers from './styles/Viewers';
import messages from './messages';

const Stats = ({ isLive, duration, played, video }) => {
  const [durationStr, setDurationStr] = useState();

  const updateDuration = () => {
    const newDuration = formatToReadable(secondsToClockFormat(duration));
    setDurationStr(newDuration);
  };

  useEffect(updateDuration, [duration]);
  useEffect(updateDuration, []);

  if (isLive) {
    return (
      <>
        <VideoLive>
          <RedBall />
          <FormattedMessage {...messages.live} />
        </VideoLive>
        {video.type === 'twitch-live' && (
          <Viewers>
            <TwitchViewerCount channelUrl={video.url} />{' '}
            <FormattedMessage {...messages.viewers} />
          </Viewers>
        )}
      </>
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
