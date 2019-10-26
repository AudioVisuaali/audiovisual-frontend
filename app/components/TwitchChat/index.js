/**
 *
 * TwitchChat
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import IFrame from './IFrame';

const TwitchChat = ({ username }) => (
  <IFrame
    title={`twitch-chat-${username}`}
    frameBorder="0"
    scrolling="no"
    id="chat_embed"
    src={`https://www.twitch.tv/embed/${username}/chat?darkpopout`}
  ></IFrame>
);

TwitchChat.propTypes = {
  username: PropTypes.string,
};

export default TwitchChat;
