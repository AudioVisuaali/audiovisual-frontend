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
} from './constants';

export function setRoom(room) {
  return { type: WS_SET_ROOM, room };
}

export function setRoomIsPlaying(isPlaying) {
  return { type: WS_SET_ROOM_IS_PLAYING, isPlaying };
}

export function setSeek(timeline) {
  return { type: WS_SET_ROOM_TIMELINE, timeline };
}

export function skipVideo(videos) {
  return { type: WS_SET_ROOM_SKIP, videos };
}

export function addVideo(videos) {
  return { type: WS_ADD_ROOM_VIDEO, videos };
}

export function deleteVideo({ toHistory, removeFromQue, requestedBy }) {
  return { type: WS_DEL_ROOM_VIDEO, toHistory, removeFromQue, requestedBy };
}

export function setPlayOrder(order) {
  return { type: WS_SET_ROOM_PLAY_ORDER, order };
}

export function setNextVideo(videos) {
  return { type: WS_SET_ROOM_NEXT_VIDEO, videos };
}

export function setUserLeave(unique) {
  return { type: WS_SET_ROOM_VIEWERS_LEAVE, unique };
}

export function setUserJoin(viewer) {
  return { type: WS_ACTION_USER_JOIN, viewer };
}

export function setUserMessage(message) {
  return { type: WS_SET_ROOM_MESSAGES_USER, message };
}

export function setCurrentUser(user) {
  return { type: WS_SET_CURRENT_USER, user };
}

export function setUsernameChange(user) {
  return { type: WS_SET_CURRENT_USER_USERNAME, user };
}

export function setReorder({ unique, newIndex }) {
  return { type: WS_SET_REORDER, unique, newIndex };
}
