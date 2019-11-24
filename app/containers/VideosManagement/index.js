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
import Tabs from 'components/Tabs';
import Tab from 'components/Tab';
import Tooltip from 'components/Tooltip';
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

// eslint-disable-next-line react/prop-types
const TooltipWrapper = ({ label, children, ...rest }) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, rest),
  );
  return <Tooltip label={label}>{childrenWithProps}</Tooltip>;
};

export function VideosManagement({ playing, playOrder, setPlayOrder, skip }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleSkip = () => {
    if (!playing) return;

    skip();
  };

  const handleActiveTab = type => setActiveTab(type);
  const handlePlayOrder = type => {
    if (type === 0) {
      return;
    }

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
          <Tabs value={activeTab} onChange={handleActiveTab}>
            <Tab>
              <FormattedMessage {...messages.queue} />
            </Tab>
            <Tab>
              <FormattedMessage {...messages.add} />
            </Tab>
            <Tab>
              <FormattedMessage {...messages.history} />
            </Tab>
          </Tabs>
        </MenuWrapper>
        <MenuWrapper>
          <Tabs value={playOrder} onChange={handlePlayOrder}>
            <TooltipWrapper label="SKIP">
              <Tab onClick={handleSkip}>
                <ForwardSVG />
              </Tab>
            </TooltipWrapper>
            <TooltipWrapper label="ORDERED">
              <Tab value={PLAY_ORDER_LINEAR}>
                <ListSVG />
              </Tab>
            </TooltipWrapper>
            <TooltipWrapper label="RANDOM">
              <Tab value={PLAY_ORDER_RANDOM}>
                <RandomSVG />
              </Tab>
            </TooltipWrapper>
          </Tabs>
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
