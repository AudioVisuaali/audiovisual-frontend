import { generatePath } from 'react-router-dom';

export const pathHome = '/';
export const pathRoom = '/room/:roomcode';
export const pathNotFound = '/not-found';
export const pathBase64 = '/base64';

export const generatePathRoom = roomcode =>
  generatePath(pathRoom, { roomcode });
