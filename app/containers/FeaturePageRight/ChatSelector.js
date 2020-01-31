import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import SettingsModal from 'containers/SettingsModal';
import Tab from 'components/Tab';
import Tabs from 'components/Tabs';
import Label from 'components/Label';
import { setItem, USERNAME } from 'utils/localStorage';
import CogSVG from 'svgs/Cog';
import TwitchSVG from 'svgs/Twitch';

import messages from './messages';
import Button from './styles/Button';

const Wrapper = styled.div`
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
        <Tabs value={selectedTab} onChange={handleTabClick}>
          <Tab value={defaultChat}>
            <FormattedMessage {...messages.room} />
          </Tab>
          {twitchChannel && (
            <Tab value={twitch}>
              <TwitchSVG style={{ marginRight: 6 }} />
              {twitchChannel}
            </Tab>
          )}
        </Tabs>
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
