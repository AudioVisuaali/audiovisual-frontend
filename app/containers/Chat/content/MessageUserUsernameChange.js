import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Wrapper from '../styles/Wrapper';
import Bolded from '../styles/Bolded';

const MessageUserUsernameChange = ({ message }) => (
  <Wrapper>
    <FormattedMessage {...messages.wasKnownAs} />{' '}
    <Bolded>{message.content.username}</Bolded>
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
