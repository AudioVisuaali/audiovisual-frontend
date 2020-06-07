/**
 *
 * Chat
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Scrollbars } from 'react-custom-scrollbars';

import Message from 'components/Message';
import ArrowDown from 'components/ArrowToDown';
import { makeSelectRoomMessages } from 'containers/WebSocket/selectors';

import getTypeVariables from './getTypeVariables';
import messages from './messages';
import Welcome from './styles/Welcome';
import Messages from './styles/Messages';
import Gradient from './styles/Gradient';
import Container from './styles/Container';

function checkNode(ref) {
  if (!ref || !ref.current || !ref.current.container) {
    return null;
  }

  return ref.current.container.firstChild;
}
const observerConfig = {
  attributes: false,
  childList: true,
  characterData: false,
  subtree: false,
};

export function Chat({ roomMessages }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const timeoutRef = useRef();
  const refContainer = useRef(null);
  const refMessages = useRef(null);

  // Initial so scrollbox doesn't animate on mount
  useEffect(() => {
    if (isMounted) return () => {};

    const observer = new MutationObserver(scrollToBottom);
    observer.observe(refMessages.current, observerConfig);

    return () => {
      observer.disconnect();
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return () => {};
    if (!isAutoScroll) return () => {};

    const observer = new MutationObserver(scrollToBottomSmooth);
    observer.observe(refMessages.current, observerConfig);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutRef.current);
    };
  }, [isMounted, isAutoScroll]);

  const scrollToBottom = () => {
    refContainer.current.scrollToBottom();
    setIsMounted(true);
  };

  const scrollToBottomSmooth = () => {
    const node = checkNode(refContainer);

    timeoutRef.current = setTimeout(() => {
      node.scrollTo({
        top: node.scrollHeight - node.clientHeight,
        behavior: 'smooth',
      });
    }, 50);
  };

  const handleScroll = e => {
    const { clientHeight, scrollHeight, scrollTop } = e.srcElement;
    const isBottom = clientHeight + scrollTop + 150 > scrollHeight;

    if (isAutoScroll === isBottom) {
      return;
    }

    setIsAutoScroll(isBottom);
  };

  const resumeAutoScroll = () => {
    scrollToBottomSmooth();
  };

  return (
    <Container>
      <ArrowDown onClick={resumeAutoScroll} active={isAutoScroll} />
      <Scrollbars
        ref={refContainer}
        autoHide
        onScroll={handleScroll}
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
        <Messages>
          {roomMessages.length < 40 ? (
            <Welcome>
              <FormattedMessage {...messages.welcomeText} />
            </Welcome>
          ) : (
            <Gradient />
          )}
          <div ref={refMessages}>
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
          </div>
        </Messages>
      </Scrollbars>
    </Container>
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
