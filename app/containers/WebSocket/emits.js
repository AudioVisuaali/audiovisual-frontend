export function isPlaying(socket, isPlaying_) {
  socket.emit('is-playing', isPlaying_);
}

export function seek(socket, timestamp) {
  socket.emit('seek', timestamp);
}

export function skip(socket, videoId) {
  socket.emit('skip', videoId);
}

export function next(socket, videoId) {
  socket.emit('next-video', videoId);
}

export function addVideo(socket, videoURL) {
  socket.emit('add-video', videoURL);
}

export function removeVideo(socket, videoId) {
  socket.emit('remove-video', videoId);
}

export function setPlayOrder(socket, type) {
  socket.emit('play-order', type);
}
