import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Wrapper from '../styles/Wrapper';

const MessageUserJoin = () => (
  <Wrapper>
    <FormattedMessage {...messages.joinedText} />
  </Wrapper>
);

MessageUserJoin.propTypes = {
  message: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default MessageUserJoin;
