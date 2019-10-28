/*
 * History Messages
 *
 * This contains all the text for the History container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.History';

export default defineMessages({
  showMoreLabel: {
    id: `${scope}.showMoreLabel`,
    defaultMessage: 'Show more',
  },
  noVideosText: {
    id: `${scope}.noVideosText`,
    defaultMessage: 'Video history is empty',
  },
  history: {
    id: `${scope}.history`,
    defaultMessage: 'History',
  },
});
