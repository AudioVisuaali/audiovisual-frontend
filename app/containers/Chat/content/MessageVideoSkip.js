import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import A from 'components/A';
import PlatformIcon from 'components/PlatformIcon';
import messages from '../messages';
import Wrapper from '../styles/Wrapper';
import Bolded from '../styles/Bolded';
import PlatformWrapper from '../styles/PlatformWrapper';

const MessageVideoSkip = ({ message }) =>
  message.content ? (
    <Wrapper>
      <FormattedMessage {...messages.skipped} />,{' '}
      <FormattedMessage {...messages.nowPlaying} />{' '}
      <A href={message.content.url}>
        <PlatformWrapper>
          <PlatformIcon type={message.content.type} />
        </PlatformWrapper>
        <Bolded>{message.content.title}</Bolded>
      </A>
    </Wrapper>
  ) : (
    <Wrapper>
      <FormattedMessage {...messages.skipped} />
    </Wrapper>
  );

MessageVideoSkip.propTypes = {
  message: PropTypes.shape({
    content: PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default MessageVideoSkip;
