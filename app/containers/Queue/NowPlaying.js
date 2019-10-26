import React from 'react';
import PropTypes from 'prop-types';
import QueueItem from 'components/QueueItem';
import CurrentlyPlaying from './CurrentlyPlaying';
import NowPlayingWrapper from './NowPlayingWrapper';

const NowPlaying = ({ currentlyPlaying, onSkip }) => (
  <NowPlayingWrapper>
    <CurrentlyPlaying>Currently playing</CurrentlyPlaying>
    <QueueItem
      onSkip={onSkip}
      video={currentlyPlaying}
      user={currentlyPlaying.addedBy}
    />
  </NowPlayingWrapper>
);

NowPlaying.propTypes = {
  onSkip: PropTypes.func.isRequired,
  currentlyPlaying: PropTypes.object,
};

export default NowPlaying;
