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

import messages from './messages';
import Wrapper from './styles/Wrapper';
import Menu from './styles/Menu';
import Tab from './styles/Tab';
import Contents from './styles/Contents';
import VideoAdder from '../VideoAdder';
import MenusWrapper from './styles/MenusWrapper';
import ListSVG from './List';
import RandomSVG from './Random';

export function VideosManagement() {
  const [activeTab, setActiveTab] = useState(0);
  const [playOrder, setPlayOrder] = useState(0);
  return (
    <Wrapper>
      <MenusWrapper>
        <Menu>
          <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>
            <FormattedMessage {...messages.queue} />
          </Tab>
          <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
            <FormattedMessage {...messages.add} />
          </Tab>
        </Menu>
        <Menu>
          <Tab active={playOrder === 0} onClick={() => setPlayOrder(0)}>
            <ListSVG />
          </Tab>
          <Tab active={playOrder === 1} onClick={() => setPlayOrder(1)}>
            <RandomSVG />
          </Tab>
        </Menu>
      </MenusWrapper>
      <Contents>{activeTab && <VideoAdder />}</Contents>
    </Wrapper>
  );
}

VideosManagement.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(VideosManagement);
