/**
 *
 * Chat
 *
 */

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Scrollbars } from 'react-custom-scrollbars';

import Message from 'components/Message';
import { makeSelectRoomMessages } from 'containers/WebSocket/selectors';

import { MESSAGE_VIDEO_SEEK } from './constants';
import getTypeVariables from './getTypeVariables';
import messages from './messages';
import Welcome from './styles/Welcome';
import Messages from './styles/Messages';

export function Chat({ isMobile, roomMessages }) {
  const [messagesAmount, setMessagesAmount] = useState(roomMessages.length);
  const refContainer = useRef(null);

  const scrollToBottom = smoothScroll => {
    const node = refContainer.current.container.childNodes[0];
    const properties = { top: node.scrollHeight - node.clientHeight };
    if (smoothScroll) {
      properties.behavior = 'smooth';
    }
    node.scrollTo(properties);
  };

  if (messagesAmount !== roomMessages.length) {
    setMessagesAmount(roomMessages.length);
    window.requestAnimationFrame(scrollToBottom);
  }

  const getMessages = () => {
    const newMessages = [];
    const duplicateTypes = [MESSAGE_VIDEO_SEEK];
    // eslint-disable-next-line no-plusplus
    for (let i = roomMessages.length - 1; i >= 0; i--) {
      if (newMessages.length >= 30) {
        break;
      }

      const current = roomMessages[i];
      if (i === roomMessages.length) {
        newMessages.push(current);
        // eslint-disable-next-line no-continue
        continue;
      }

      const next = roomMessages[i + 1];
      if (duplicateTypes.includes(current.type) && current.type === next.type) {
        // eslint-disable-next-line no-continue
        continue;
      }

      newMessages.push(current);
    }

    return newMessages.reverse();
  };

  const selectedMessages = () => (
    <Messages>
      <Welcome>
        <FormattedMessage {...messages.welcomeText} />
      </Welcome>
      {getMessages().map(msg => {
        const { icon, content, userContent } = getTypeVariables(msg);
        return (
          <Message
            boxed={userContent}
            key={msg.unique}
            message={msg}
            icon={icon}
          >
            {content && content({ message: msg })}
          </Message>
        );
      })}
    </Messages>
  );

  const renderedMessages = selectedMessages();
  return isMobile ? (
    renderedMessages
  ) : (
    <Scrollbars
      ref={refContainer}
      autoHide
      autoHideTimeout={200}
      autoHideDuration={200}
      universal
    >
      {renderedMessages}
    </Scrollbars>
  );
}

Chat.propTypes = {
  roomMessages: PropTypes.array.isRequired,
  isMobile: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  roomMessages: makeSelectRoomMessages(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Chat);
