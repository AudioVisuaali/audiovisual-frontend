import React from 'react';
import PropTypes from 'prop-types';
import { dateToDoublePercision } from 'utils/time';

import Wrapper from './styles/Wrapper';
import InnerWrapper from './styles/InnerWrapper';
import UserSVGContainer from './styles/UserSVGContainer';
import MessageContainer from './styles/MessageContainer';
import Username from './styles/Username';
import Time from './styles/Time';
import MessageContent from './styles/MessageContent';

const Message = ({ showMessageOnly, boxed, icon, message, children }) => (
  <Wrapper boxed={boxed}>
    <InnerWrapper disablePadding={showMessageOnly} boxed={boxed}>
      <UserSVGContainer hideIcon={showMessageOnly}>
        {showMessageOnly ? dateToDoublePercision(message.createdAt) : icon()}
      </UserSVGContainer>
      <MessageContainer centered={!children}>
        {!showMessageOnly && (
          <Username>
            {message.user && message.user.username}{' '}
            <Time>@{dateToDoublePercision(message.createdAt)}</Time>
          </Username>
        )}
        <MessageContent>{children}</MessageContent>
      </MessageContainer>
    </InnerWrapper>
  </Wrapper>
);

Message.propTypes = {
  boxed: PropTypes.bool,
  showMessageOnly: PropTypes.bool,
  children: PropTypes.node,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  message: PropTypes.shape({
    type: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  }),
};

export default Message;
