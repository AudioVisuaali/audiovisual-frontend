/**
 *
 * ChatTextField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { injectIntl, FormattedMessage } from 'react-intl';
import messages, { placeholderId } from './messages';
import TextArea from './styles/TextArea';
import Wrapper from './styles/Wrapper';
import Actions from './styles/Actions';
import Send from './styles/Send';

function ChatTextField({ intl }) {
  const placeholder = intl.formatMessage({ id: placeholderId });
  return (
    <Wrapper>
      <TextArea placeholder={placeholder} />
      <Actions>
        <Send>
          <FormattedMessage {...messages.send} />
        </Send>
      </Actions>
    </Wrapper>
  );
}

ChatTextField.propTypes = {
  intl: PropTypes.any.isRequired,
};

export default injectIntl(ChatTextField);
