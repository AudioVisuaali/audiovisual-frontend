/*
 * ChatMessage Messages
 *
 * This contains all the text for the ChatMessage component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ChatMessage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ChatMessage component!',
  },
});
