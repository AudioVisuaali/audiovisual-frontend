/*
 * History Messages
 *
 * This contains all the text for the History container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.History';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Watch videos together. Anywhere. Whenever.',
  },
  displayNameLabel: {
    id: `${scope}.displayNameLabel`,
    defaultMessage: 'Display name',
  },
  displayRoomLabel: {
    id: `${scope}.displayRoomLabel`,
    defaultMessage: 'Room name',
  },
  createRoomButton: {
    id: `${scope}.createRoomButton`,
    defaultMessage: 'Create Room',
  },
});
