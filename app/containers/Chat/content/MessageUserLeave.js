import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Wrapper from '../styles/Wrapper';

const MessageUserLeave = () => (
  <Wrapper>
    <FormattedMessage {...messages.leftText} />
  </Wrapper>
);

export default MessageUserLeave;
