/* View in fullscreen */
export function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
export function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}

export function listenFullScreenChange(func) {
  document.addEventListener('fullscreenchange', func, true);
  document.addEventListener('webkitfullscreenchange', func, true);
  document.addEventListener('mozfullscreenchange', func, true);
  document.addEventListener('MSFullscreenChange', func, true);
}

export function removeListenFullScreenChange(func) {
  document.removeEventListener('fullscreenchange', func, true);
  document.removeEventListener('webkitfullscreenchange', func, true);
  document.removeEventListener('mozfullscreenchange', func, true);
  document.removeEventListener('MSFullscreenChange', func, true);
}

export function isFullScreen() {
  return (
    !document.fullscreenElement &&
    !document.webkitIsFullScreen &&
    !document.mozFullScreen &&
    !document.msFullscreenElement
  );
}
