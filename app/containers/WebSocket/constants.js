/*
 *
 * WebSocket constants
 *
 */

/**
 * WebSocket Keys
 */
export const WS_ACTION_USER = 'user';
export const WS_ACTION_ROOM = 'room';
export const WS_ACTION_SEEK = 'seek';
export const WS_ACTION_SKIP = 'skip';
export const WS_ACTION_REMOVE_VIDEO = 'remove-video';
export const WS_ACTION_PLAY_ORDER = 'play-order';
export const WS_ACTION_IS_PLAYING = 'is-playing';
export const WS_ACTION_ADD_VIDEO = 'add-video';
export const WS_ACTION_NEXT_VIDEO = 'next-video';
export const WS_ACTION_USER_LEAVE = 'user-leave';
export const WS_ACTION_USER_JOIN = 'user-join';
export const WS_ACTION_MESSAGE = 'message';
export const WS_ACTION_USER_MESSAGE = 'user-message';
export const WS_ACTION_USER_USERNAME_CHANGE = 'user-username-change';
export const WS_ACTION_REORDER = 'reorder';

/**
 * Reducer Constants
 */
export const WS_SET_EMIT = 'app/Websocket/WE_SET_EMIT';
export const WS_SET_ROOM = 'app/WebSocket/WS_SET_ROOM';
export const WS_SET_ROOM_IS_PLAYING = 'app/WebSocket/WS_SET_ROOM_IS_PLAYING';
export const WS_SET_ROOM_TIMELINE = 'app/WebSocket/WS_SET_ROOM_TIMELINE';
export const WS_SET_ROOM_SKIP = 'app/WebSocket/WS_SET_ROOM_SKIP';
export const WS_ADD_ROOM_VIDEO = 'app/WebSocket/WS_ADD_ROOM_VIDEO';
export const WS_DEL_ROOM_VIDEO = 'app/WebSocket/WS_DEL_ROOM_VIDEO';
export const WS_SET_ROOM_PLAY_ORDER = 'app/WebSocket/WS_SET_ROOM_PLAY_ORDER';
export const WS_SET_ROOM_NEXT_VIDEO = 'app/WebSocket/WS_SET_ROOM_NEXT_VIDEO';
export const WS_SET_ROOM_VIEWERS_LEAVE =
  'app/WebSocket/WS_SET_ROOM_VIEWERS_LEAVE';
export const WS_SET_ROOM_MESSAGES_USER =
  'app/WebSocket/WS_SET_ROOM_MESSAGES_USER';
export const WS_SET_CURRENT_USER = 'app/WebSocket/WS_SET_CURRENT_USER';
export const WS_SET_CURRENT_USER_USERNAME =
  'app/WebSocket/WS_SET_CURRENT_USER_USERNAME';
export const WS_SET_REORDER = 'app/WebSocket/WS_SET_REORDER';

export const EMIT_ROOM_IS_PLAYING = 'app/Websocket/EMIT_ROOM_IS_PLAYING';
export const EMIT_ROOM_TIMELINE = 'app/Websocket/EMIT_ROOM_TIMELINE';
export const EMIT_ROOM_SKIP = 'app/Websocket/EMIT_ROOM_SKIP';
export const EMIT_ROOM_ADD_VIDEO = 'app/Websocket/EMIT_ROOM_ADD_VIDEO';
export const EMIT_ROOM_DEL_VIDEO = 'app/Websocket/EMIT_ROOM_DEL_VIDEO';
export const EMIT_ROOM_PLAY_ORDER = 'app/Websocket/EMIT_ROOM_PLAY_ORDER';
export const EMIT_ROOM_NEXT_VIDEO = 'app/Websocket/EMIT_ROOM_NEXT_VIDEO';
export const EMIT_ROOM_MESSAGE = 'app/Websocket/EMIT_ROOM_MESSAGE';
export const EMIT_ROOM_REORDER = 'app/Websocket/EMIT_ROOM_REORDER';
export const EMIT_CURRENT_USER_CHANGE_USERNAME =
  'app/Websocket/EMIT_CURRENT_USER_CHANGE_USERNAME';

/**
 * Player Constants
 */
export const SET_OFFSET = 'app/Websocket/SET_OFFSET';
export const SET_CLIENT_SERVER_TIME_OFFSET =
  'app/Websocket/SET_CLIENT_SERVER_TIME_OFFSET';
export const SET_PLAYER_DIMENSIONS = 'app/Websocket/SET_PLAYER_DIMENSIONS';
