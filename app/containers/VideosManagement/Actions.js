/**
 *
 * VideosManagement
 *
 */

import React from 'react';
import styled from 'styled-components';
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
import ButtonRound from 'components/ButtonRound';
import ListSVG from 'svgs/List';
import RandomSVG from 'svgs/Random';
import ForwardSVG from 'svgs/Forward';
import messages from './messages';

const PLAY_ORDER_LINEAR = 'linear';
const PLAY_ORDER_RANDOM = 'random';

const CustomButton = styled(ButtonRound)({
  margin: '6px 8px',
});

const Actions = props => {
  const { intl, playing, playOrder, setPlayOrder, skip } = props;

  const handleSkip = () => {
    if (!playing) return;

    skip();
  };

  const handlePlayOrder = type => {
    if (type === playOrder) return;

    setPlayOrder(type);
  };

  // Can't use onChange event since Tabs are wrapped with ToolTip
  return (
    <>
      <Tooltip
        title={intl.formatMessage(messages.random)}
        enterDelay={400}
        placement="bottom"
      >
        <CustomButton
          size={45}
          onClick={() => handlePlayOrder(PLAY_ORDER_RANDOM)}
          active={playOrder === PLAY_ORDER_RANDOM}
        >
          <RandomSVG />
        </CustomButton>
      </Tooltip>
      <Tooltip
        title={intl.formatMessage(messages.ordered)}
        enterDelay={400}
        placement="bottom"
      >
        <CustomButton
          size={45}
          onClick={() => handlePlayOrder(PLAY_ORDER_LINEAR)}
          active={playOrder === PLAY_ORDER_LINEAR}
        >
          <ListSVG />
        </CustomButton>
      </Tooltip>
      {playing ? (
        <Tooltip
          title={intl.formatMessage(messages.skip)}
          enterDelay={400}
          placement="bottom"
        >
          <CustomButton size={45} onClick={handleSkip}>
            <ForwardSVG style={{ transform: 'translateX(1px)' }} />
          </CustomButton>
        </Tooltip>
      ) : (
        <CustomButton size={45} disabled onClick={handleSkip}>
          <ForwardSVG />
        </CustomButton>
      )}
    </>
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
