import React from 'react';
import PropTypes from 'prop-types';
import A from 'components/A';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Wrapper from '../styles/Wrapper';
import Bolded from '../styles/Bolded';

const MessageVideoAdd = ({ message }) => (
  <Wrapper>
    <FormattedMessage {...messages.addedText} />{' '}
    <A href={message.content.url}>
      <Bolded>{message.content.title}</Bolded>
    </A>
  </Wrapper>
);

MessageVideoAdd.propTypes = {
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

export default MessageVideoAdd;
