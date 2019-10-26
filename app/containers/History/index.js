/**
 *
 * History
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectPlaylistHistory,
  makeSelectViewers,
} from 'containers/WebSocket/selectors';
import QueueItem from 'components/QueueItem';
import DollyEmpty from 'svgs/DollyEmpty';

// import messages from './messages';
import Empty from './Empty';
import Wrapper from './Wrapper';
import ShowMore from './ShowMore';

const SHOW_MORE_MAX_VALUE = 10;

export function History({ socket, history }) {
  const [showMax, setShowMax] = useState(10);
  const handleRepeat = video =>
    socket('add-video', { url: video.url, subtitle: video.subtitle });

  const handleAddShowMax = () => {
    const newShowTotal = showMax + SHOW_MORE_MAX_VALUE;
    setShowMax(newShowTotal);
  };

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
        {showingVideos.map(video => (
          <QueueItem
            key={video.unique}
            onRepeat={handleRepeat}
            video={video}
            user={video.addedBy}
          />
        ))}
        {showMoreAmount && (
          <ShowMore onClick={handleAddShowMax}>
            Show More ({showMoreAmount})
          </ShowMore>
        )}
      </>
    );
  };

  const emptyHistory = () => (
    <Empty>
      <DollyEmpty />
      Video history is empty
    </Empty>
  );

  return <Wrapper>{history.length ? historyItems() : emptyHistory()}</Wrapper>;
}

History.propTypes = {
  socket: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  history: makeSelectPlaylistHistory(),
  viewers: makeSelectViewers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(History);
