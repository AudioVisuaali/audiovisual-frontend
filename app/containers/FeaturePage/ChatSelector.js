import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Menu from '../../components/Menu';
import Tab from '../../components/Tab';
import Label from '../../components/Label';

const Wrapper = styled.div`
  border-bottom: 1px solid #080808;
  padding: 0 10px;
`;

// tabs
const defaultChat = 'default';
const twitch = 'twitch';

const ChatSelector = ({ twitchUsername, onClick }) => {
  const [selectedTab, setSelectedTab] = useState(defaultChat);

  const handleOnClick = value => {
    setSelectedTab(value);
    onClick(value);
  };

  if (!twitchUsername && selectedTab === twitch) {
    setSelectedTab(defaultChat);
  }

  return (
    <Wrapper>
      <Label>Chat room</Label>
      <Menu>
        <Tab
          active={selectedTab === defaultChat}
          onClick={() => handleOnClick(defaultChat)}
        >
          Chat
        </Tab>
        {twitchUsername && (
          <Tab
            active={selectedTab === twitch}
            onClick={() => handleOnClick(twitch)}
          >
            {twitchUsername}
          </Tab>
        )}
      </Menu>
    </Wrapper>
  );
};

ChatSelector.propTypes = {
  twitchUsername: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

ChatSelector.defaultProps = {
  twitchUsername: null,
};

export default ChatSelector;
