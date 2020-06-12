/*
 * History Messages
 *
 * This contains all the text for the History container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.homePage';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage: 'Watch videos together. Anywhere. Whenever.',
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
