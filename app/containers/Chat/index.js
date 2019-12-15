/**
 *
 * Chat
 *
 */

import React, { useRef } from 'react';
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

function checkNode(ref) {
  if (!ref || !ref.current || !ref.current.container) {
    return null;
  }

  return ref.current.container.childNodes[0];
}

export function Chat({ isMobile, roomMessages }) {
  const refContainer = useRef(null);

  const handleRef = () => {
    const node = checkNode(refContainer);
    if (!node) {
      return;
    }

    const properties = { top: node.scrollHeight - node.clientHeight };
    properties.behavior = 'smooth';
    node.scrollTo(properties);
  };

  const selectedMessages = () => (
    <Messages ref={handleRef}>
      <Welcome>
        <FormattedMessage {...messages.welcomeText} />
      </Welcome>
      {roomMessages.slice(-40).map(msg => {
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
      renderTrackVertical={props => (
        <div
          {...props}
          className="track-vertical"
          style={{ display: 'none' }}
        />
      )}
      renderThumbVertical={props => (
        <div
          {...props}
          className="thumb-vertical"
          style={{ display: 'none' }}
        />
      )}
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
