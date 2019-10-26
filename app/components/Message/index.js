import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { dateToDoublePercision } from 'utils/time';

const Wrapper = styled.div`
  padding: 0 10px 0 5px;
  ${props =>
    props.boxed &&
    `
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
  `}
`;

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 8px 8px;

  ${props =>
    props.boxed &&
    `
    border-radius: 6px;
    background-color: rgba(0,0,0,0.3);
  `}
`;

const UserSVGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  width: 30px;
  height: 30px;
  margin-right: 10px;
  flex-shrink: 0;

  & svg {
    color: rgba(255, 255, 255, 0.4);
    width: 18px;
    height: 18px;
  }
`;

const MessageContainer = styled.div`
  flex-grow: 1;
  ${props =>
    props.centered &&
    `
    display: flex;
    align-items: center;
  `}
`;

const MessageContent = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  margin-top: 2px;
  font-size: 12px;

  @media screen and (max-width: 760px) {
    font-size: 10px;
  }
`;

const Username = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  font-size: 12px;

  @media screen and (max-width: 760px) {
    font-size: 10px;
  }
`;

const Time = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.2);
  font-weight: 300;
  @media screen and (max-width: 760px) {
    font-size: 8px;
  }
`;

const Message = ({ boxed, icon, message, children }) => (
  <Wrapper boxed={boxed}>
    <InnerWrapper boxed={boxed}>
      <UserSVGContainer>{icon()}</UserSVGContainer>
      <MessageContainer centered={!children}>
        <Username>
          {message.user && message.user.username}{' '}
          <Time>@{dateToDoublePercision(message.createdAt)}</Time>
        </Username>
        <MessageContent>{children}</MessageContent>
      </MessageContainer>
    </InnerWrapper>
  </Wrapper>
);

Message.propTypes = {
  boxed: PropTypes.bool,
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
