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
import { motion, AnimatePresence } from 'framer-motion';

import {
  makeSelectPlaylist,
  makeSelectCurrentlyPlaying,
  makeSelectPlayOrder,
  makeSelectLastReorder,
} from 'containers/WebSocket/selectors';
import {
  emitRoomAddVideo,
  emitRoomSkip,
  emitRoomDelVideo,
  emitRoomReorder,
} from 'containers/WebSocket/actions';
import QueueItem from 'components/QueueItem';
import BigLabel from 'components/BigLabel';

import messages from './messages';
import EmptyQueue from './EmptyQueue';
import NowPlaying from './NowPlaying';
import SortableContainerUl from './styles/SortableContainerUl';

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const QueueItems = ({
  useTemp, // eslint-disable-line react/prop-types
  tempQue, // eslint-disable-line react/prop-types
  queue, // eslint-disable-line react/prop-types
  isPlayOrderLinear, // eslint-disable-line react/prop-types
  handleDelete, // eslint-disable-line react/prop-types
  handleRepeat, // eslint-disable-line react/prop-types
  handleSortEnd, // eslint-disable-line react/prop-types
}) => (
  <>
    <BigLabel>
      <FormattedMessage {...messages.title} />
    </BigLabel>
    <SortableList
      transitionDuration={150}
      lockAxis="y"
      onSortEnd={handleSortEnd}
      useTemp={useTemp}
      tempQue={tempQue}
      queue={queue}
      isPlayOrderLinear={isPlayOrderLinear}
      handleDelete={handleDelete}
      handleRepeat={handleRepeat}
    />
  </>
);

const SortableItem = SortableElement(
  ({ handleDelete, handleRepeat, isPlayOrderLinear, nth, video }) => (
    <QueueItem
      showPlacement
      placement={isPlayOrderLinear ? nth + 1 : null}
      video={video}
      showMove
      onDelete={handleDelete}
      onRepeat={handleRepeat}
      user={video.addedBy}
    />
  ),
);

const SortableList = SortableContainer(
  ({
    useTemp,
    tempQue,
    queue,
    isPlayOrderLinear,
    handleDelete,
    handleRepeat,
  }) => {
    const selectedQue = useTemp ? tempQue : queue;

    return (
      <SortableContainerUl>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {selectedQue.map((video, index) => (
            <SortableItem
              handleDelete={handleDelete}
              handleRepeat={handleRepeat}
              isPlayOrderLinear={isPlayOrderLinear}
              key={video.unique}
              index={index}
              nth={index}
              video={video}
            />
          ))}
        </motion.div>
      </SortableContainerUl>
    );
  },
);

const Queue = ({
  addVideo,
  lastReorder,
  skip,
  deleteVideo,
  reorder,
  playOrder,
  currentlyPlaying,
  queue,
}) => {
  const [tempQue, setTempQue] = useState([]);
  const [useTemp, setUseTemp] = useState(false);
  useEffect(() => {
    setUseTemp(false);
  }, [lastReorder]);

  const isPlayOrderLinear = playOrder === 'linear';

  const handleSkip = video => {
    if (!currentlyPlaying) return;

    skip(video.unique);
  };

  const handleDelete = video => deleteVideo(video);

  const handleRepeat = video => addVideo(video.repeat);

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    if (oldIndex === newIndex) return;
    const { unique } = queue[oldIndex];
    const newOrder = { oldIndex, unique, newIndex };
    reorder(newOrder);

    const tempQueue = [...queue];
    const video = tempQueue.splice(oldIndex, 1);

    tempQueue.splice(newIndex, 0, video[0]);
    setTempQue(tempQueue);
    setUseTemp(true);
  };

  return (
    <>
      {currentlyPlaying && (
        <NowPlaying
          currentlyPlaying={currentlyPlaying}
          onSkip={handleSkip}
          onRepeat={handleRepeat}
        />
      )}
      {queue.length ? (
        <QueueItems
          handleSortEnd={handleSortEnd}
          useTemp={useTemp}
          tempQue={tempQue}
          queue={queue}
          isPlayOrderLinear={isPlayOrderLinear}
          handleDelete={handleDelete}
          handleRepeat={handleRepeat}
        />
      ) : (
        <EmptyQueue />
      )}
    </>
  );
};

Queue.propTypes = {
  currentlyPlaying: PropTypes.object,
  queue: PropTypes.arrayOf(PropTypes.object),
  playOrder: PropTypes.string.isRequired,
  lastReorder: PropTypes.number,
  skip: PropTypes.func.isRequired,
  deleteVideo: PropTypes.func.isRequired,
  reorder: PropTypes.func.isRequired,
  addVideo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  queue: makeSelectPlaylist(),
  currentlyPlaying: makeSelectCurrentlyPlaying(),
  playOrder: makeSelectPlayOrder(),
  lastReorder: makeSelectLastReorder(),
});

const mapDispatchToProps = dispatch => ({
  skip: evt => dispatch(emitRoomSkip(evt)),
  deleteVideo: evt => dispatch(emitRoomDelVideo(evt)),
  reorder: evt => dispatch(emitRoomReorder(evt)),
  addVideo: evt => dispatch(emitRoomAddVideo(evt)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Queue);
