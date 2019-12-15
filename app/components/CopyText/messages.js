/*
 * CurrentlyPlaying Messages
 *
 * This contains all the text for the CurrentlyPlaying component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.CopyText';

export default defineMessages({
  copy: {
    id: `${scope}.copy`,
    defaultMessage: 'Copy',
  },
  copied: {
    id: `${scope}.copied`,
    defaultMessage: 'Copied',
  },
});
