/*
 * Chat Messages
 *
 * This contains all the text for the Chat container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.modal';

export default defineMessages({
  close: {
    id: `${scope}.close`,
    defaultMessage: 'Close',
  },
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Save',
  },
});
