/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NotFoundPage';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage:
      'OOPSIE WOOPSIE!! Uwu We made a fucky wucky!! A wittle fucko boingo! The code monkeys at our headquarters are working VEWY HAWD to fix this!',
  },
  message: {
    id: `${scope}.message`,
    defaultMessage: 'Page Not Found',
  },
  toHome: {
    id: `${scope}.toHome`,
    defaultMessage: 'Back to home',
  },
});
