/*
 * History Messages
 *
 * This contains all the text for the History container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.PasteContainer';

export default defineMessages({
  invalidUrl: {
    id: `${scope}.invalidUrl`,
    defaultMessage: 'Invalid URL',
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel',
  },
  add: {
    id: `${scope}.add`,
    defaultMessage: 'Add',
  },
  addFollowingVideo: {
    id: `${scope}.addFollowingVideo`,
    defaultMessage: 'Add following video?',
  },
});
