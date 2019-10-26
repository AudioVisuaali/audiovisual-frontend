/*
 * Chat Messages
 *
 * This contains all the text for the Chat container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Chat';

export default defineMessages({
  welcomeText: {
    id: `${scope}.welcomeText`,
    defaultMessage: 'Welcome to the chat',
  },
});
