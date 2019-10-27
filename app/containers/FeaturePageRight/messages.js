/*
 * History Messages
 *
 * This contains all the text for the History container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.History';

export default defineMessages({
  chatRooms: {
    id: `${scope}.chatRooms`,
    defaultMessage: 'Chat rooms',
  },
  room: {
    id: `${scope}.room`,
    defaultMessage: 'Room',
  },
  createRoomButton: {
    id: `${scope}.createRoomButton`,
    defaultMessage: 'Create Room',
  },
});
