/*
 * VideoAdder Messages
 *
 * This contains all the text for the VideoAdder container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.QueueItem';

export default defineMessages({
  remove: {
    id: `${scope}.remove`,
    defaultMessage: 'Remove',
  },
  skip: {
    id: `${scope}.skip`,
    defaultMessage: 'Skip',
  },
  repeat: {
    id: `${scope}.repeat`,
    defaultMessage: 'Repeat',
  },
});
