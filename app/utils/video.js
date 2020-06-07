import ReactPlayer from 'react-player';

const MATCH_TWITCH_CLIP_URL = /(?:clips\.)?twitch\.tv\/([a-zA-Z0-9_.]+)($|\?)/;
const MATCH_TIKTOK_URL = /(?:www\.)?tiktok\.com\/[a-zA-Z0-9_@.-]+\/video\/([a-zA-Z0-9_@-]+)($|\?)/;
const MATCH_TIKTOK_M = /m\.tiktok\.com\/v\/([a-zA-Z0-9_@-]+)($|\.?)/;
const MATCH_TIKTOK_URL_VM = /vm.tiktok\.com\/([a-zA-Z0-9_@-]+)($|\?)/;

export function canPlayVideo(url) {
  return (
    ReactPlayer.canPlay(url) ||
    MATCH_TWITCH_CLIP_URL.test(url) ||
    MATCH_TIKTOK_URL.test(url) ||
    MATCH_TIKTOK_M.test(url) ||
    MATCH_TIKTOK_URL_VM.test(url)
  );
}

export function base64URLDecode(URL) {
  try {
    const decoded = atob(URL);
    const json = JSON.parse(decoded);

    if (!json.url) {
      return null;
    }

    return json;
  } catch (e) {
    return null;
  }
}
