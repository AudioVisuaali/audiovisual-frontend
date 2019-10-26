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

  const selectedMessages = () => (
    <Messages>
      <Welcome>
        <FormattedMessage {...messages.welcomeText} />
      </Welcome>
      {roomMessages.slice(-30).map(msg => {
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
