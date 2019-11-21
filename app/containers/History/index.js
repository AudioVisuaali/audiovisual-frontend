/**
 *
 * History
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectPlaylistHistory,
  makeSelectViewers,
} from 'containers/WebSocket/selectors';
import { emitRoomAddVideo } from 'containers/WebSocket/actions';
import QueueItem from 'components/QueueItem';
import BigLabel from 'components/BigLabel';
import DollyEmpty from 'svgs/DollyEmpty';

import messages from './messages';
import Empty from './styles/Empty';
import ShowMore from './styles/ShowMore';

const SHOW_MORE_MAX_VALUE = 10;

export function History({ addVideo, history }) {
  const [showMax, setShowMax] = useState(10);
  const handleRepeat = video => addVideo(video.repeat);

  const handleAddShowMax = () => {
    const newShowTotal = showMax + SHOW_MORE_MAX_VALUE;
    setShowMax(newShowTotal);
  };

  const emptyHistory = () => (
    <Empty>
      <DollyEmpty />
      <FormattedMessage {...messages.noVideosText} />
    </Empty>
  );

  const historyItems = () => {
    const showingVideos = history
      .slice()
      .reverse()
      .slice(0, showMax);

    // Calculates How many videos are available in the history
    //   value caps at SHOW_MORE_MAX_VALUE
    const amountOfVideosNotShown = history.length - showingVideos.length;
    const showMoreAmount =
      amountOfVideosNotShown > SHOW_MORE_MAX_VALUE
        ? SHOW_MORE_MAX_VALUE
        : amountOfVideosNotShown;
    return (
      <>
        <BigLabel>
          <FormattedMessage {...messages.title} />
        </BigLabel>
        {showingVideos.map(video => (
          <QueueItem
            key={video.unique}
            onRepeat={handleRepeat}
            video={video}
            user={video.addedBy}
          />
        ))}
        {!!showMoreAmount && (
          <ShowMore onClick={handleAddShowMax}>
            <FormattedMessage {...messages.showMoreLabel} /> ({showMoreAmount})
          </ShowMore>
        )}
      </>
    );
  };

  return history.length ? historyItems() : emptyHistory();
}

History.propTypes = {
  history: PropTypes.array.isRequired,
  addVideo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  history: makeSelectPlaylistHistory(),
  viewers: makeSelectViewers(),
});

const mapDispatchToProps = dispatch => ({
  addVideo: evt => dispatch(emitRoomAddVideo(evt)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(History);
