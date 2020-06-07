import Axios from 'axios';
import {
  VIDEO_SYNC_THRESHOLD,
  VOLUME,
  MUTED,
  SOUND_NEXT_VIDEO,
  getItem,
} from 'utils/localStorage';

import nextVideoSound from './audio';

export const getThresholdValue = () => {
  const value = getItem(VIDEO_SYNC_THRESHOLD);
  const parsed = parseFloat(value, 10);
  if (Number.isNaN(parsed)) {
    return 2;
  }

  return parsed;
};

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
  audio.volume = getSoundNextVideoLevel() / 100;
  audio.play();
}

export function getSoundNextVideoLevel() {
  const value = getItem(SOUND_NEXT_VIDEO);
  const parsed = parseFloat(value, 10);
  if (Number.isNaN(parsed)) {
    return 80;
  }

  return parsed;
}
export function getVolume() {
  const volume = parseFloat(getItem(VOLUME));
  const isVolume = typeof volume === 'number';
  if (Number.isNaN(volume)) {
    return 0.2;
  }
  return isVolume ? volume : 0.2;
}

export function getMuted() {
  const muted = getItem(MUTED);
  return muted === 'true';
}

export function getYoutubeVideoId(url) {
  const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/;

  return url && url.match(MATCH_URL_YOUTUBE)[1];
}
