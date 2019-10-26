/**
 *
 * CurrentlyPlaying
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';

import { makeSelectViewers } from 'containers/WebSocket/selectors';
import QueueItem from 'components/QueueItem';

import messages from './messages';
import CurrentlyPlayingText from './styles/CurrentlyPlayingText';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 14px 20px;
  border-radius: 10px;
  border: 1px solid #080808;
  margin-bottom: 50px;
`;

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
