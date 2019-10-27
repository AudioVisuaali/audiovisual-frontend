/*
 * Queue Messages
 *
 * This contains all the text for the Queue container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Queue';

export default defineMessages({
  currentlyPlayingLabel: {
    id: `${scope}.currentlyPlayingLabel`,
    defaultMessage: 'Currently Playing',
  },
  queueLabel: {
    id: `${scope}.queueLabel`,
    defaultMessage: 'Queue',
  },
  queueEmpty: {
    id: `${scope}.queueEmpty`,
    defaultMessage: 'Video queue is empty',
  },
});
