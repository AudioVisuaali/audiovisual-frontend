/*
 * VideoAdder Messages
 *
 * This contains all the text for the VideoAdder container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Add';

export default defineMessages({
  videoInputFieldLabel: {
    id: `${scope}.videoInputFieldLabel`,
    defaultMessage: 'Video URL',
  },
  addVideoToQueueButton: {
    id: `${scope}.addVideoToQueueButton`,
    defaultMessage: 'Add to queue',
  },
  translationFieldURL: {
    id: `${scope}.translationFieldURL`,
    defaultMessage: 'Translation URL',
  },
  supportedPlatforms: {
    id: `${scope}.supportedPlatforms`,
    defaultMessage: 'Supported platforms',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Add',
  },
  addSubtitle: {
    id: `${scope}.addSubtitle`,
    defaultMessage: 'Add subtitle',
  },
});
