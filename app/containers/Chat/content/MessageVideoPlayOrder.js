import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Wrapper from '../styles/Wrapper';
import Bolded from '../styles/Bolded';

const MessageVideoPlayOrder = ({ message }) => (
  <Wrapper>
    <FormattedMessage {...messages.roomPlayType} />{' '}
    <Bolded>
      <FormattedMessage {...messages[message.content]} />
    </Bolded>
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
