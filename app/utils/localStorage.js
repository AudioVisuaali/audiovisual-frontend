export const USERNAME = 'USERNAME';
export const TOKEN = 'TOKEN';
export const VOLUME = 'VOLUME';
export const MUTED = 'MUTED';
export const LOCALE = 'LOCALE';
export const THEME = 'THEME';
export const ACTIVE_VIDEO_MANAGEMENT_TAB = 'ACTIVE_VIDEO_MANAGEMENT_TAB';
export const TUTORIAL_SHOW_TABS_SCOLL_DOWN = 'TUTORIAL_SHOW_TABS_SCOLL_DOWN';

export function setItem(name, value) {
  window.localStorage.setItem(name, value);
}

export function removeItem(name) {
  window.localStorage.removeItem(name);
}

export function getItem(name) {
  return window.localStorage.getItem(name);
}
