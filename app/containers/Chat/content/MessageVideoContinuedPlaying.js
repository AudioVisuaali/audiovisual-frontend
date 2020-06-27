import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Wrapper from '../styles/Wrapper';

const MessageVideoContinuedPlaying = () => (
  <Wrapper>
    <FormattedMessage {...messages.continuedVideo} />
  </Wrapper>
);

export default MessageVideoContinuedPlaying;
