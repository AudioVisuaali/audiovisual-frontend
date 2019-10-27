/**
 *
 * Queue
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import {
  makeSelectPlaylist,
  makeSelectCurrentlyPlaying,
  makeSelectPlayOrder,
  makeSelectLastReorder,
} from 'containers/WebSocket/selectors';
import {
  WS_ACTION_SKIP,
  WS_ACTION_REMOVE_VIDEO,
  WS_ACTION_REORDER,
} from 'containers/WebSocket/constants';
import QueueItem from 'components/QueueItem';

import messages from './messages';
import Wrapper from './styles/Wrapper';
import EmptyQueue from './EmptyQueue';
import NowPlaying from './NowPlaying';
import CurrentlyPlaying from './styles/CurrentlyPlaying';
import SortableContainerUl from './styles/SortableContainerUl';

export function Queue({
  lastReorder,
  socket,
  playOrder,
  currentlyPlaying,
  queue,
}) {
  const [tempQue, setTempQue] = useState([]);
  const [useTemp, setUseTemp] = useState(false);
  useEffect(() => {
    setUseTemp(false);
  }, [lastReorder]);

  const isPlayOrderLinear = playOrder === 'linear';

  const handleSkip = video => {
    if (!currentlyPlaying) return;

    socket(WS_ACTION_SKIP, video.unique);
  };

  const handleDelete = video => {
    socket(WS_ACTION_REMOVE_VIDEO, video.unique);
  };

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex === newIndex) return;
    const { unique } = queue[oldIndex];
    const reorder = { oldIndex, unique, newIndex };
    socket(WS_ACTION_REORDER, reorder);

    const tempQueue = [...queue];
    const video = tempQueue.splice(oldIndex, 1);

    tempQueue.splice(newIndex, 0, video[0]);
    setTempQue(tempQueue);
    setUseTemp(true);
  };

  const SortableItem = SortableElement(({ nth, video }) => (
    <QueueItem
      showPlacement
      placement={isPlayOrderLinear ? nth + 1 : null}
      video={video}
      showMove
      onDelete={handleDelete}
      user={video.addedBy}
    />
  ));

  const SortableList = SortableContainer(() => {
    const selectedQue = useTemp ? tempQue : queue;
    return (
      <SortableContainerUl>
        {selectedQue.map((video, index) => (
          <SortableItem
            key={video.unique}
            index={index}
            nth={index}
            video={video}
          />
        ))}
      </SortableContainerUl>
    );
  });

  const queueItems = () => (
    <>
      <CurrentlyPlaying>
        <FormattedMessage {...messages.queueLabel} />
      </CurrentlyPlaying>
      <SortableList
        transitionDuration={150}
        lockAxis="y"
        onSortEnd={handleSortEnd}
      />
    </>
  );

  return (
    <Wrapper>
      {currentlyPlaying && (
        <NowPlaying currentlyPlaying={currentlyPlaying} onSkip={handleSkip} />
      )}
      {queue.length ? queueItems() : <EmptyQueue />}
    </Wrapper>
  );
}

Queue.propTypes = {
  socket: PropTypes.func.isRequired,
  currentlyPlaying: PropTypes.object,
  queue: PropTypes.arrayOf(PropTypes.object),
  playOrder: PropTypes.string.isRequired,
  lastReorder: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  queue: makeSelectPlaylist(),
  currentlyPlaying: makeSelectCurrentlyPlaying(),
  playOrder: makeSelectPlayOrder(),
  lastReorder: makeSelectLastReorder(),
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

export default compose(withConnect)(Queue);
