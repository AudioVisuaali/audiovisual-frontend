import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styles/Wrapper';
import Bolded from './styles/Bolded';

const MessageVideoPlayOrder = ({ message }) => (
  <Wrapper>
    Set room play type to <Bolded>{message.content}</Bolded>
  </Wrapper>
);

MessageVideoPlayOrder.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default MessageVideoPlayOrder;
