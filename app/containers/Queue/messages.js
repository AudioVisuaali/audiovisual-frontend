/*
 * Queue Messages
 *
 * This contains all the text for the Queue container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Queue';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Queue',
  },
  currentlyPlayingLabel: {
    id: `${scope}.currentlyPlayingLabel`,
    defaultMessage: 'Currently Playing',
  },
  queueEmpty: {
    id: `${scope}.queueEmpty`,
    defaultMessage: 'Video queue is empty',
  },
});
