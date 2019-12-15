/*
 * VideoAdder Messages
 *
 * This contains all the text for the VideoAdder container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Add';

export default defineMessages({
  sourceURLLabel: {
    id: `${scope}.sourceURLLabel`,
    defaultMessage: 'URL',
  },
  addToQueueButton: {
    id: `${scope}.addToQueueButton`,
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
  titleURL: {
    id: `${scope}.titleURL`,
    defaultMessage: 'Title',
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
