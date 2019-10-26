/**
 *
 * VideosManagement
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  WS_ACTION_PLAY_ORDER,
  WS_ACTION_SKIP,
} from 'containers/WebSocket/constants';
import {
  makeSelectPlayOrder,
  makeSelectCurrentlyPlaying,
} from 'containers/WebSocket/selectors';
import VideoAdder from 'containers/VideoAdder';
import History from 'containers/History';
import Queue from 'containers/Queue';
import Menu from 'components/Menu';
import Tab from 'components/Tab';
import ListSVG from 'svgs/List';
import RandomSVG from 'svgs/Random';
import ForwardSVG from 'svgs/Forward';

import Wrapper from './styles/Wrapper';
import Contents from './styles/Contents';
import MenusWrapper from './styles/MenusWrapper';
import MenuWrapper from './styles/MenuWrapper';
import messages from './messages';

const PLAY_ORDER_LINEAR = 'linear';
const PLAY_ORDER_RANDOM = 'random';

export function VideosManagement({ playing, playOrder, socket }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleSkip = () => {
    if (!playing) return;

    socket(WS_ACTION_SKIP, playing.unique);
  };

  const handlePlayOrder = type => {
    if (type === playOrder) return;

    socket(WS_ACTION_PLAY_ORDER, type);
  };

  const getTab = key => {
    switch (key) {
      case 0:
        return <Queue socket={socket} />;
      case 1:
        return <VideoAdder socket={socket} />;

      default:
        return <History socket={socket} />;
    }
  };

  return (
    <Wrapper>
      <MenusWrapper>
        <MenuWrapper>
          <Menu>
            <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
              <FormattedMessage {...messages.queue} />
            </Tab>
            <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
              <FormattedMessage {...messages.add} />
            </Tab>
            <Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
              <FormattedMessage {...messages.history} />
            </Tab>
          </Menu>
        </MenuWrapper>
        <MenuWrapper>
          <Menu>
            <Tab onClick={handleSkip}>
              <ForwardSVG />
            </Tab>
            <Tab
              active={playOrder === PLAY_ORDER_LINEAR}
              onClick={() => handlePlayOrder(PLAY_ORDER_LINEAR)}
            >
              <ListSVG />
            </Tab>
            <Tab
              active={playOrder === PLAY_ORDER_RANDOM}
              onClick={() => handlePlayOrder(PLAY_ORDER_RANDOM)}
            >
              <RandomSVG />
            </Tab>
          </Menu>
        </MenuWrapper>
      </MenusWrapper>
      <Contents>{getTab(activeTab)}</Contents>
    </Wrapper>
  );
}

VideosManagement.propTypes = {
  socket: PropTypes.func,
  playOrder: PropTypes.string.isRequired,
  playing: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  playOrder: makeSelectPlayOrder(),
  playing: makeSelectCurrentlyPlaying(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(VideosManagement);
