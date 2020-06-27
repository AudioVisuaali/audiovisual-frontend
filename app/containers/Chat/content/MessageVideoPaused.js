import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Wrapper from '../styles/Wrapper';

const MessageVideoPaused = () => (
  <Wrapper>
    <FormattedMessage {...messages.pausedVideo} />
  </Wrapper>
);

export default MessageVideoPaused;
