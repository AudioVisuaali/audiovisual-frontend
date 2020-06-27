/*
 *
 * WebSocket actions
 *
 */

import {
  WS_SET_ROOM,
  WS_SET_ROOM_IS_PLAYING,
  WS_SET_ROOM_TIMELINE,
  WS_SET_ROOM_SKIP,
  WS_ADD_ROOM_VIDEO,
  WS_DEL_ROOM_VIDEO,
  WS_SET_ROOM_PLAY_ORDER,
  WS_SET_ROOM_NEXT_VIDEO,
  WS_SET_ROOM_VIEWERS_LEAVE,
  WS_ACTION_USER_JOIN,
  WS_SET_ROOM_MESSAGES_USER,
  WS_SET_CURRENT_USER,
  WS_SET_CURRENT_USER_USERNAME,
  WS_SET_REORDER,
  WS_SET_EMIT,
  EMIT_ROOM_IS_PLAYING,
  EMIT_ROOM_TIMELINE,
  EMIT_ROOM_SKIP,
  EMIT_ROOM_ADD_VIDEO,
  EMIT_ROOM_DEL_VIDEO,
  EMIT_ROOM_PLAY_ORDER,
  EMIT_ROOM_NEXT_VIDEO,
  EMIT_ROOM_MESSAGE,
  EMIT_ROOM_REORDER,
  EMIT_CURRENT_USER_CHANGE_USERNAME,
  SET_OFFSET,
  SET_CLIENT_SERVER_TIME_OFFSET,
  SET_PLAYER_DIMENSIONS,
} from './constants';

/**
 *
 *  Actions for websocket
 *    For receiving data from the websocket
 *
 */

/**
 * Set room, used for initial load
 * @param {Object} room
 */
export function setRoom(room) {
  return { type: WS_SET_ROOM, room };
}

/**
 * Plays or pauses the current video
 * @param {Object} param0
 */
export function setRoomIsPlaying({ isPlaying, timelineAction }) {
  return { type: WS_SET_ROOM_IS_PLAYING, isPlaying, timelineAction };
}

/**
 * Updates timeline status
 * @param {Object} param0
 */
export function setSeek({ seek, timelineAction }) {
  return { type: WS_SET_ROOM_TIMELINE, seek, timelineAction };
}

/**
 * Update all videos(queue, now playing and history)
 * @param {Object} param0
 */
export function skipVideo({ playing, timelineAction }) {
  return { type: WS_SET_ROOM_SKIP, playing, timelineAction };
}

/**
 * Update all videos(queue, now playing and history)
 * @param {Object} param0
 */
export function addVideo({ video, timelineAction }) {
  return { type: WS_ADD_ROOM_VIDEO, video, timelineAction };
}

/**
 * Moves video to history
 * @param {Object} param0
 */
export function deleteVideo({ toHistory, removeFromQue, requestedBy }) {
  return { type: WS_DEL_ROOM_VIDEO, toHistory, removeFromQue, requestedBy };
}

/**
 * Updated room play type
 * @param {String} order
 */
export function setPlayOrder(order) {
  return { type: WS_SET_ROOM_PLAY_ORDER, order };
}

/**
 * Plays next video
 * @param {Object} param0
 */
export function setNextVideo({ playing, timelineAction }) {
  return { type: WS_SET_ROOM_NEXT_VIDEO, playing, timelineAction };
}

/**
 * Updates user list when user disconnect
 * @param {String} unique
 */
export function setUserLeave(unique) {
  return { type: WS_SET_ROOM_VIEWERS_LEAVE, unique };
}

/**
 * Updates user list when user connects
 * @param {Object} viewer
 */
export function setUserJoin(viewer) {
  return { type: WS_ACTION_USER_JOIN, viewer };
}

/**
 * Updates user list when user connects
 * @param {Object} message
 */
export function setUserMessage(message) {
  return { type: WS_SET_ROOM_MESSAGES_USER, message };
}

/**
 * Sets currently connected user for the application
 * @param {Object} user
 */
export function setCurrentUser(user) {
  return { type: WS_SET_CURRENT_USER, user };
}

/**
 * Changes current users username
 * @param {String} user
 */
export function setUsernameChange(user) {
  return { type: WS_SET_CURRENT_USER_USERNAME, user };
}

/**
 * Changes queue order
 * @param {Object} user
 */
export function setReorder({ unique, newIndex }) {
  return { type: WS_SET_REORDER, unique, newIndex };
}

/**
 * Set binded emit function to socket.
 * This value can be called in sagas.
 * @param {Object} user
 */
export function setEmit(emit) {
  return { type: WS_SET_EMIT, emit };
}

/**
 *
 *  EMITS for websocket
 *    For sending data with the websocket
 *
 */

/**
 * Play or pause current video
 * @param {Boolean} isPlaying
 */
export function emitRoomIsPlaying(isPlaying, played) {
  return { type: EMIT_ROOM_IS_PLAYING, isPlaying, played };
}

/**
 * Seek on timeline in precision of seconds
 * @param {Number} isPlaying
 */
export function emitRoomSeek(seconds) {
  return { type: EMIT_ROOM_TIMELINE, seconds };
}

/**
 * Skips currently playing video
 */
export function emitRoomSkip() {
  return { type: EMIT_ROOM_SKIP };
}

/**
 * Vide object
 * @param {Object} isPlaying
 */
export function emitRoomAddVideo(video) {
  return { type: EMIT_ROOM_ADD_VIDEO, video };
}

/**
 * Delete selected video
 * @param {Object} video
 */
export function emitRoomDelVideo(video) {
  return { type: EMIT_ROOM_DEL_VIDEO, video };
}

/**
 * Change room play order
 * @param {String} isPlaying
 */
export function emitRoomPlayOrder(playType) {
  return { type: EMIT_ROOM_PLAY_ORDER, playType };
}

/**
 * Request to play the next video
 */
export function emitRoomNextVideo(currentVideoId) {
  return { type: EMIT_ROOM_NEXT_VIDEO, currentVideoId };
}

/**
 * Send message
 * @param {String} message
 */
export function emitRoomMessage(message) {
  return { type: EMIT_ROOM_MESSAGE, message };
}

/**
 * Set play type
 * @param {String} order, either `linear` or `random`
 */
export function emitRoomReorder(order) {
  return { type: EMIT_ROOM_REORDER, order };
}

/**
 * Change users displayname
 * @param {String} name
 */
export function emitUserChangeUsername(name) {
  return { type: EMIT_CURRENT_USER_CHANGE_USERNAME, name };
}

/**
 *
 *  Player actions
 *    Sharing metadata
 *
 */

/**
 * Change users displayname
 * @param {String} name
 */
export function setPlayerOffset(offset) {
  return { type: SET_OFFSET, offset };
}

export function setClientServerTimeOffset(offset) {
  return { type: SET_CLIENT_SERVER_TIME_OFFSET, offset };
}

export function setPlayerDimensions(dimension) {
  return { type: SET_PLAYER_DIMENSIONS, dimension };
}
