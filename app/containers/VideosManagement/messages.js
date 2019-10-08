/*
 * VideosManagement Messages
 *
 * This contains all the text for the VideosManagement container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.VideosManagement';

export default defineMessages({
  queue: {
    id: `${scope}.videoMenu.queue`,
    defaultMessage: 'Queue',
  },
  add: {
    id: `${scope}.videoMenu.add`,
    defaultMessage: 'Add',
  },
});
