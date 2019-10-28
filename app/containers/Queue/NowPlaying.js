import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import QueueItem from 'components/QueueItem';
import BigLabel from 'components/BigLabel';
import messages from './messages';
import NowPlayingWrapper from './styles/NowPlayingWrapper';

const NowPlaying = ({ currentlyPlaying, onSkip }) => (
  <NowPlayingWrapper>
    <BigLabel>
      <FormattedMessage {...messages.currentlyPlayingLabel} />
    </BigLabel>
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
