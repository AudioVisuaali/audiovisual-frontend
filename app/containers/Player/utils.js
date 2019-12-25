import Axios from 'axios';
import { VOLUME, MUTED, getItem } from 'utils/localStorage';

import nextVideoSound from './audio';

export function createTrackNode(trackRaw) {
  const node = document.createElement('track');
  node.label = 'English';
  node.kind = 'subtitles';
  node.srclang = 'en';
  node.default = true;

  // Cross url doesn't work (browser end, NOT CORS)
  const base64 = btoa(unescape(encodeURIComponent(trackRaw)));
  node.src = `data:TextTrack;base64, ${base64}`;
  return node;
}

export function addSubtitle(video, player) {
  if (!(video && video.subtitle)) return;

  while (player.firstChild) {
    player.removeChild(player.firstChild);
  }

  Axios.get(video.subtitle).then(res => {
    const track = createTrackNode(res.data);

    player.appendChild(track);
  });
}

export function playNextSound() {
  const audio = new Audio(nextVideoSound);

  audio.play();
}

export function getVolume() {
  const volume = parseFloat(getItem(VOLUME));
  const isVolume = typeof volume === 'number';
  return isVolume ? volume : 0.2;
}

export function getMuted() {
  const muted = getItem(MUTED);
  return muted === 'true';
}
