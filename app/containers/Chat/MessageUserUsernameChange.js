import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';
import Bolded from './styles/Bolded';

const MessageUserUsernameChange = ({ message }) => (
  <Wrapper>
    was now known as <Bolded>{message.content.username}</Bolded>
  </Wrapper>
);

MessageUserUsernameChange.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default MessageUserUsernameChange;
