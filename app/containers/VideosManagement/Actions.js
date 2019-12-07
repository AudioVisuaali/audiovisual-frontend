/**
 *
 * VideosManagement
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { emitRoomPlayOrder, emitRoomSkip } from 'containers/WebSocket/actions';
import {
  makeSelectPlayOrder,
  makeSelectCurrentlyPlaying,
} from 'containers/WebSocket/selectors';
import Tabs from 'components/Tabs';
import Tab from 'components/Tab';
import Tooltip from 'components/Tooltip';
import ListSVG from 'svgs/List';
import RandomSVG from 'svgs/Random';
import ForwardSVG from 'svgs/Forward';
import messages from './messages';

const PLAY_ORDER_LINEAR = 'linear';
const PLAY_ORDER_RANDOM = 'random';

const Actions = props => {
  const { intl, playing, playOrder, setPlayOrder, skip } = props;

  const handleSkip = () => {
    if (!playing) return;

    skip();
  };

  const handlePlayOrder = type => {
    if (type === 0) {
      return;
    }

    if (type === playOrder) return;

    setPlayOrder(type);
  };

  return (
    <Tabs value={playOrder} onChange={handlePlayOrder}>
      <Tooltip label={intl.formatMessage(messages.skip)}>
        <Tab onClick={handleSkip}>
          <ForwardSVG />
        </Tab>
      </Tooltip>
      <Tooltip label={intl.formatMessage(messages.ordered)}>
        <Tab value={PLAY_ORDER_LINEAR}>
          <ListSVG />
        </Tab>
      </Tooltip>
      <Tooltip label={intl.formatMessage(messages.random)}>
        <Tab value={PLAY_ORDER_RANDOM}>
          <RandomSVG />
        </Tab>
      </Tooltip>
    </Tabs>
  );
};

Actions.propTypes = {
  playOrder: PropTypes.string.isRequired,
  playing: PropTypes.object,
  setPlayOrder: PropTypes.func.isRequired,
  skip: PropTypes.func.isRequired,
  intl: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  playOrder: makeSelectPlayOrder(),
  playing: makeSelectCurrentlyPlaying(),
});

const mapDispatchToProps = dispatch => ({
  setPlayOrder: evt => dispatch(emitRoomPlayOrder(evt)),
  skip: () => dispatch(emitRoomSkip()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default injectIntl(compose(withConnect)(Actions));
