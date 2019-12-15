export function isFile(url) {
  return isVideo(url) || isAudio(url);
}

export function isVideo(url) {
  const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
  return url.match(VIDEO_EXTENSIONS);
}

export function isAudio(url) {
  const AUDIO_EXTENSIONS = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
  return url.match(AUDIO_EXTENSIONS);
}
