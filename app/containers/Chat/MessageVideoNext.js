import React from 'react';
import PropTypes from 'prop-types';
import A from 'components/A';
import Wrapper from './styles/Wrapper';
import Bolded from './styles/Bolded';

const MessageVideoNext = ({ message }) => (
  <Wrapper>
    Now playing{' '}
    <A href={message.content.url}>
      <Bolded>{message.content.title}</Bolded>
    </A>
  </Wrapper>
);

MessageVideoNext.propTypes = {
  message: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    content: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default MessageVideoNext;
