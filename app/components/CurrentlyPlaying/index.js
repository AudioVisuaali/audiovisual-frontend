/**
 *
 * CurrentlyPlaying
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { makeSelectViewers } from 'containers/WebSocket/selectors';
import QueueItem from 'components/QueueItem';

import messages from './messages';
import CurrentlyPlayingText from './styles/CurrentlyPlayingText';
import Wrapper from './styles/Wrapper';

function CurrentlyPlaying({ video, viewers }) {
  const videoAddedBy = viewers.find(v => v.unique === video.addedBy);

  return (
    <Wrapper>
      <CurrentlyPlayingText>
        <FormattedMessage {...messages.curentlyPlaying} />
      </CurrentlyPlayingText>
      <QueueItem video={video} user={videoAddedBy} />
    </Wrapper>
  );
}

CurrentlyPlaying.propTypes = {
  viewers: PropTypes.array.isRequired,
  video: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  viewers: makeSelectViewers(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(CurrentlyPlaying);
