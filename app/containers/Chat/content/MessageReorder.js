import React from 'react';
import PropTypes from 'prop-types';
import A from 'components/A';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import Wrapper from '../styles/Wrapper';
import Bolded from '../styles/Bolded';

const MessageReorder = ({ message }) => (
  <Wrapper>
    <Bolded>#{message.content.oldIndex + 1}</Bolded>{' '}
    <FormattedMessage {...messages.reorderTo} />{' '}
    <Bolded>#{message.content.newIndex + 1}</Bolded>,{' '}
    <Bolded>
      <A href={message.content.video.url}>{message.content.video.title}</A>
    </Bolded>
  </Wrapper>
);

MessageReorder.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }),
};

export default MessageReorder;
