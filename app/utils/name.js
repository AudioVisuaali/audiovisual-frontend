import uuid from 'uuid/v4';
import { USERNAME, setItem } from './localStorage';

export function generateName() {
  const name = uuid().substring(0, 5);
  setItem(USERNAME, name);
  return name;
}
