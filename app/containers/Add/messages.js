/*
 * VideoAdder Messages
 *
 * This contains all the text for the VideoAdder container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.VideoAdder';

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
  addURL: {
    id: `${scope}.addURL`,
    defaultMessage: 'Add subtitles',
  },
});
