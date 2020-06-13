import { MESSAGE_VIDEO_IS_PLAYING } from './constants';

export const isMatchingTypes = (current, prev) => {
  if (current.user.unique !== prev.user.unique) {
    return false;
  }

  if (current.type === prev.type) {
    if (current.type === MESSAGE_VIDEO_IS_PLAYING) {
      return false;
    }

    return true;
  }

  return false;
};
