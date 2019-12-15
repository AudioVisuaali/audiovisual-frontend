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
  base64URL: {
    id: `${scope}.base64URL`,
    defaultMessage: 'Base64 URL',
  },
  supportedPlatforms: {
    id: `${scope}.supportedPlatforms`,
    defaultMessage: 'Supported platforms',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Add',
  },
  moreOptions: {
    id: `${scope}.moreOptions`,
    defaultMessage: 'More options',
  },
  videoTitle: {
    id: `${scope}.videoTitle`,
    defaultMessage: 'Video title',
  },
  filesOnly: {
    id: `${scope}.filesOnly`,
    defaultMessage: 'Files only',
  },
  videosOnly: {
    id: `${scope}.videosOnly`,
    defaultMessage: 'Videos only',
  },
});
