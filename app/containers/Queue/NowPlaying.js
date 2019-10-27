import React from 'react';
import PropTypes from 'prop-types';
import QueueItem from 'components/QueueItem';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import CurrentlyPlaying from './styles/CurrentlyPlaying';
import NowPlayingWrapper from './styles/NowPlayingWrapper';

const NowPlaying = ({ currentlyPlaying, onSkip }) => (
  <NowPlayingWrapper>
    <CurrentlyPlaying>
      <FormattedMessage {...messages.currentlyPlayingLabel} />
    </CurrentlyPlaying>
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
