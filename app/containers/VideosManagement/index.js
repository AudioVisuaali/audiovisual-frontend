/**
 *
 * VideosManagement
 *
 */

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

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
import { makeSelectThemeMode } from 'containers/ThemeProvider/selectors';

import Wrapper from './styles/Wrapper';
import Contents from './styles/Contents';
import MenusWrapper from './styles/MenusWrapper';
import MenuWrapper from './styles/MenuWrapper';
import MenuSpacer from './styles/MenuSpacer';
import Shadow from './styles/Shadow';
import messages from './messages';
import Actions from './Actions';
import FirstTimeTutorial from './FirstTimeTutorial';

const CustomTab = styled(Tab)({
  margin: '0 18px',
  padding: '16px 0',
  fontSize: 20,
});

function getLastTab() {
  const active = getItem(ACTIVE_VIDEO_MANAGEMENT_TAB);
  const parsed = parseInt(active, 10);

  if (Number.isNaN(parsed)) {
    setItem(ACTIVE_VIDEO_MANAGEMENT_TAB, 0);
    return 0;
  }

  return parsed;
}

const VideosManagement = ({
  isRelativeMenu,
  onTabChange,
  onRequestScroll,
  theme,
}) => {
  const stickyRef = useRef(null);
  const [activeTab, setActiveTab] = useState(getLastTab());
  const [activeTabShowing, setActiveTabShowing] = useState(getLastTab());
  const [showing, setShowing] = useState(true);

  const handleRequestScroll = () => {
    onRequestScroll();
    handleChange(1);
  };

  const handleChange = value => {
    if (value === activeTab) {
      return;
    }

    setActiveTab(value);
    setShowing(false);

    setTimeout(() => {
      setShowing(true);
      setActiveTabShowing(value);
      onTabChange();
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
      <MenusWrapper
        key={theme.toString()}
        isSticky={isRelativeMenu}
        ref={stickyRef}
      >
        <MenuSpacer showBorder={isRelativeMenu}>
          {isRelativeMenu && <Shadow />}
          <MenuWrapper>
            <Tabs value={activeTab} onChange={handleChange}>
              <CustomTab>
                <FormattedMessage {...messages.queue} />
              </CustomTab>
              <CustomTab>
                <FormattedMessage {...messages.add} />
              </CustomTab>
              <CustomTab>
                <FormattedMessage {...messages.history} />
              </CustomTab>
            </Tabs>
          </MenuWrapper>
          <MenuWrapper>
            <Actions />
          </MenuWrapper>
          <FirstTimeTutorial onClick={handleRequestScroll} />
        </MenuSpacer>
      </MenusWrapper>
      <Contents showing={showing} key={activeTabShowing}>
        {getTab(activeTabShowing)}
      </Contents>
    </Wrapper>
  );
};

VideosManagement.propTypes = {
  onTabChange: PropTypes.func,
  onRequestScroll: PropTypes.func,
  isRelativeMenu: PropTypes.bool,
  theme: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  theme: makeSelectThemeMode(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(VideosManagement);
