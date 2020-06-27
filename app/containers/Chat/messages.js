/*
 * Chat Messages
 *
 * This contains all the text for the Chat container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Chat';

export default defineMessages({
  welcomeText: {
    id: `${scope}.welcomeText`,
    defaultMessage: 'Welcome to the chat',
  },
  reorderTo: {
    id: `${scope}.reorderTo`,
    defaultMessage: 'reordered to',
  },
  joinedText: {
    id: `${scope}.joinedText`,
    defaultMessage: 'Joined',
  },
  leftText: {
    id: `${scope}.left`,
    defaultMessage: 'Left',
  },
  wasKnownAs: {
    id: `${scope}.wasKnownAs`,
    defaultMessage: 'was known as',
  },
  addedText: {
    id: `${scope}.addedText`,
    defaultMessage: 'added',
  },
  deletedText: {
    id: `${scope}.deletedText`,
    defaultMessage: 'deleted',
  },
  roomPlayType: {
    id: `${scope}.roomPlayType`,
    defaultMessage: 'Set room play type to',
  },
  linear: {
    id: `${scope}.linear`,
    defaultMessage: 'linear',
  },
  random: {
    id: `${scope}.random`,
    defaultMessage: 'random',
  },
  seekedTo: {
    id: `${scope}.seekedTo`,
    defaultMessage: 'seeked to',
  },
  skipped: {
    id: `${scope}.skipped`,
    defaultMessage: 'skipped',
  },
  nowPlaying: {
    id: `${scope}.nowPlaying`,
    defaultMessage: 'now playing',
  },
  continuedVideo: {
    id: `${scope}.continuedVideo`,
    defaultMessage: 'continued video',
  },
  pausedVideo: {
    id: `${scope}.pausedVideo`,
    defaultMessage: 'paused',
  },
});
