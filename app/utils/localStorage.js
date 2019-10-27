export const USERNAME = 'USERNAME';
export const TOKEN = 'TOKEN';
export const VOLUME = 'VOLUME';
export const LOCALE = 'LOCALE';

export function setItem(name, value) {
  window.localStorage.setItem(name, value);
}

export function removeItem(name) {
  window.localStorage.removeItem(name);
}

export function getItem(name) {
  return window.localStorage.getItem(name);
}
