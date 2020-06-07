/*
 * Chat Messages
 *
 * This contains all the text for the Chat container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.controls';

export default defineMessages({
  live: {
    id: `${scope}.live`,
    defaultMessage: 'Live',
  },
  viewers: {
    id: `${scope}.viewers`,
    defaultMessage: 'Viewers',
  },
});
