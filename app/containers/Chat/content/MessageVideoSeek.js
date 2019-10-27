import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { formatToReadable, secondsToClockFormat } from 'utils/time';
import messages from '../messages';
import Wrapper from '../styles/Wrapper';
import Bolded from '../styles/Bolded';

const MessageVideoSeek = ({ message }) => {
  const format = formatToReadable(secondsToClockFormat(message.content));
  return (
    <Wrapper>
      <FormattedMessage {...messages.seekedTo} /> <Bolded>{format}</Bolded>
    </Wrapper>
  );
};

MessageVideoSeek.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.number.isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default MessageVideoSeek;
