import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import SettingsModal from 'containers/SettingsModal';
import Tab from 'components/Tab';
import Menu from 'components/Menu';
import Label from 'components/Label';
import { setItem, USERNAME } from 'utils/localStorage';
import CogSVG from 'svgs/Cog';
import TwitchSVG from 'svgs/Twitch';

import messages from './messages';
import Button from './styles/Button';

const Wrapper = styled.div`
  border-bottom: 1px solid
    ${p => (p.theme.isDark ? p.theme.dark[800] : p.theme.grey[700])};
  background-color: ${p =>
    p.theme.isDark ? 'transparent' : p.theme.light[400]};
  padding: 0 10px;
`;

const ChatActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// tabs
const defaultChat = 'default';
const twitch = 'twitch';

const ChatSelector = ({ currentUser, onUsername, twitchChannel, onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(defaultChat);

  useEffect(() => {
    if (!twitchChannel) setSelectedTab(defaultChat);
  }, [twitchChannel]);

  const handleTabClick = value => {
    setSelectedTab(value);
    onClick(value);
  };

  const handleNameSave = name => {
    setIsModalOpen(false);
    setItem(USERNAME, name);
    onUsername(name);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  if (!twitchChannel && selectedTab === twitch) {
    setSelectedTab(defaultChat);
    onClick(defaultChat);
  }

  return (
    <Wrapper>
      {isModalOpen && (
        <SettingsModal
          currentUser={currentUser}
          onName={handleNameSave}
          onClose={handleCloseModal}
        />
      )}
      <Label>
        <FormattedMessage {...messages.chatRooms} />
      </Label>
      <ChatActions>
        <Menu>
          <Tab
            active={selectedTab === defaultChat}
            onClick={() => handleTabClick(defaultChat)}
          >
            <FormattedMessage {...messages.room} />
          </Tab>
          {twitchChannel && (
            <Tab
              active={selectedTab === twitch}
              onClick={() => handleTabClick(twitch)}
            >
              <TwitchSVG style={{ marginRight: 6 }} />
              {twitchChannel}
            </Tab>
          )}
        </Menu>
        <Button active={isModalOpen} onClick={handleOpenModal}>
          <CogSVG />
        </Button>
      </ChatActions>
    </Wrapper>
  );
};

ChatSelector.propTypes = {
  twitchChannel: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  currentUser: PropTypes.object,
  onUsername: PropTypes.func.isRequired,
};

ChatSelector.defaultProps = {
  twitchChannel: null,
};

export default ChatSelector;
