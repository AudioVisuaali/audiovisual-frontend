import React from 'react';
import PropTypes from 'prop-types';
import A from 'components/A';
import Wrapper from './styles/Wrapper';
import Bolded from './styles/Bolded';

const MessageVideoSkip = ({ message }) =>
  message.content ? (
    <Wrapper>
      skipped, now playing{' '}
      <A href={message.content.url}>
        <Bolded>{message.content.title}</Bolded>
      </A>
    </Wrapper>
  ) : (
    <Wrapper>skipped</Wrapper>
  );

MessageVideoSkip.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default MessageVideoSkip;
