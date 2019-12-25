/**
 *
 * VideosManagement
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Add from 'containers/Add';
import History from 'containers/History';
import Queue from 'containers/Queue';
import Tabs from 'components/Tabs';
import Tab from 'components/Tab';
import {
  ACTIVE_VIDEO_MANAGEMENT_TAB,
  setItem,
  getItem,
} from 'utils/localStorage';

import Wrapper from './styles/Wrapper';
import Contents from './styles/Contents';
import MenusWrapper from './styles/MenusWrapper';
import MenuWrapper from './styles/MenuWrapper';
import messages from './messages';
import Actions from './Actions';
import FirstTimeTutorial from './FirstTimeTutorial';

function getLastTab() {
  const active = getItem(ACTIVE_VIDEO_MANAGEMENT_TAB);
  const parsed = parseInt(active, 10);

  if (Number.isNaN(parsed)) {
    setItem(ACTIVE_VIDEO_MANAGEMENT_TAB, 0);
    return 0;
  }

  return parsed;
}

const VideosManagement = ({ onRequestScroll }) => {
  const [activeTab, setActiveTab] = useState(getLastTab());
  const [activeTabShowing, setActiveTabShowing] = useState(getLastTab());
  const [showing, setShowing] = useState(true);

  const handleChange = value => {
    if (value === activeTab) {
      return;
    }

    setActiveTab(value);
    setShowing(false);

    setTimeout(() => {
      setShowing(true);
      setActiveTabShowing(value);
    }, 80);
    setItem(ACTIVE_VIDEO_MANAGEMENT_TAB, value);
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
          <Tabs value={activeTab} onChange={handleChange}>
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
          <Actions />
        </MenuWrapper>
      </MenusWrapper>
      <FirstTimeTutorial onClick={onRequestScroll} />
      <Contents showing={showing} key={activeTabShowing}>
        {getTab(activeTabShowing)}
      </Contents>
    </Wrapper>
  );
};

VideosManagement.propTypes = {
  onRequestScroll: PropTypes.func,
};

export default VideosManagement;
