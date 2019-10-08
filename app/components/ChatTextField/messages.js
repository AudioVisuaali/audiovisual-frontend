/*
 * ChatTextField Messages
 *
 * This contains all the text for the ChatTextField component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ChatTextField';

export const placeholderId = `${scope}.textField.placeholder`;

export default defineMessages({
  send: {
    id: `${scope}.send`,
    defaultMessage: 'Send',
  },
  placeholder: {
    id: placeholderId,
    defaultMessage: 'Send a message',
  },
});
