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
import Tooltip from '@material-ui/core/Tooltip';

import { emitRoomPlayOrder, emitRoomSkip } from 'containers/WebSocket/actions';
import {
  makeSelectPlayOrder,
  makeSelectCurrentlyPlaying,
} from 'containers/WebSocket/selectors';
import Tabs from 'components/Tabs';
import Tab from 'components/Tab';
import ListSVG from 'svgs/List';
import RandomSVG from 'svgs/Random';
import ForwardSVG from 'svgs/Forward';
import messages from './messages';

const PLAY_ORDER_LINEAR = 'linear';
const PLAY_ORDER_RANDOM = 'random';

const ForwardRef = React.forwardRef(function ForwardRef(
  // eslint-disable-next-line react/prop-types
  { title, SVG, ...rest },
  ref,
) {
  return (
    <Tooltip title={title} enterDelay={400} placement="bottom">
      <Tab ref={ref} {...rest}>
        <SVG />
      </Tab>
    </Tooltip>
  );
});

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

  // Can't use onChange event since Tabs are wrapped with ToolTip
  return (
    <Tabs onChange={handlePlayOrder} value={playOrder}>
      {playing ? (
        <Tooltip
          title={intl.formatMessage(messages.skip)}
          enterDelay={400}
          placement="bottom"
        >
          <Tab onClick={handleSkip}>
            <ForwardSVG />
          </Tab>
        </Tooltip>
      ) : (
        <Tab disabled onClick={handleSkip}>
          <ForwardSVG />
        </Tab>
      )}
      <ForwardRef
        title={intl.formatMessage(messages.ordered)}
        value={PLAY_ORDER_LINEAR}
        SVG={ListSVG}
      />
      <ForwardRef
        title={intl.formatMessage(messages.random)}
        value={PLAY_ORDER_RANDOM}
        SVG={RandomSVG}
      />
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

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default injectIntl(compose(withConnect)(Actions));
