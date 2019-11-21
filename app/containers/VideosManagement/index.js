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

import { emitRoomPlayOrder, emitRoomSkip } from 'containers/WebSocket/actions';
import {
  makeSelectPlayOrder,
  makeSelectCurrentlyPlaying,
} from 'containers/WebSocket/selectors';
import Add from 'containers/Add';
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

export function VideosManagement({ playing, playOrder, setPlayOrder, skip }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleSkip = () => {
    if (!playing) return;

    skip();
  };

  const handlePlayOrder = type => {
    if (type === playOrder) return;

    setPlayOrder(type);
  };

  const getTab = key => {
    switch (key) {
      case 0:
        return <Queue />;
      case 1:
        return <Add />;

      default:
        return <History />;
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
      <Contents key={activeTab} /* forces remount for animation */>
        {getTab(activeTab)}
      </Contents>
    </Wrapper>
  );
}

VideosManagement.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  playOrder: PropTypes.string.isRequired,
  playing: PropTypes.object,
  setPlayOrder: PropTypes.func.isRequired,
  skip: PropTypes.func.isRequired,
  socket: PropTypes.func,
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

export default compose(withConnect)(VideosManagement);
