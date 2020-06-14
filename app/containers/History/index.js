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
import { motion } from 'framer-motion';

import {
  makeSelectPlaylistHistory,
  makeSelectViewers,
} from 'containers/WebSocket/selectors';
import { emitRoomAddVideo } from 'containers/WebSocket/actions';
import QueueItem from 'components/QueueItem';
import OnVisible from 'components/OnVisible';
import DollyEmpty from 'svgs/DollyEmpty';

import messages from './messages';
import Empty from './styles/Empty';
import OddPosition from './styles/OddPosition';

const SHOW_MORE_MAX_VALUE = 10;

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

    return (
      <>
        <motion.div variants={variants} initial="hidden" animate="show">
          {showingVideos.map(video => (
            <QueueItem
              key={video.unique}
              onRepeat={handleRepeat}
              video={video}
              user={video.addedBy}
            />
          ))}
        </motion.div>
        <OddPosition>
          <OnVisible onVisible={handleAddShowMax} />
        </OddPosition>
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

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(History);
