/*
 *
 * WebSocket reducer
 *
 */
import produce from 'immer';
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
} from './constants';

export const key = 'webSocket';

export const initialState = {
  emit: null,
  currentUser: null,
  owner: null,
  unique: null,
  seek: {
    updatedAt: new Date().getTime(),
    seekTo: null,
  },
  playing: false,
  videos: {
    lastReorder: new Date().getTime(),
    playOrder: 'linear', // random
    playing: null,
    playlist: [],
    history: [],
  },
  viewers: [],
  messages: [],
};

/* eslint-disable default-case, no-param-reassign */
const webSocketReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case WS_SET_EMIT:
        draft.emit = action.emit;
        break;

      case WS_SET_ROOM:
        draft.owner = action.room.owner;
        draft.unique = action.room.unique;
        draft.playing = action.room.playing;
        draft.videos = action.room.videos;
        draft.viewers = action.room.viewers;
        draft.messages = action.room.messages;
        draft.timelineAction = action.room.timelineAction;
        break;

      case WS_SET_ROOM_IS_PLAYING:
        draft.playing = action.isPlaying;
        break;

      case WS_SET_ROOM_TIMELINE:
        draft.seek.seekTo = action.timeline;
        draft.seek.updatedAt = new Date().getTime();
        break;

      case WS_SET_ROOM_SKIP:
        draft.videos = action.videos;
        break;

      case WS_ADD_ROOM_VIDEO:
        draft.videos = action.videos;
        break;

      case WS_SET_ROOM_NEXT_VIDEO:
        draft.videos = action.videos;
        break;

      case WS_DEL_ROOM_VIDEO:
        draft.videos.playlist = state.videos.playlist.filter(
          v => v.unique !== action.removeFromQue,
        );
        draft.videos.history = [...state.videos.history, action.toHistory];
        break;

      case WS_SET_ROOM_PLAY_ORDER:
        draft.videos.playOrder = action.order;
        break;

      case WS_SET_ROOM_VIEWERS_LEAVE:
        draft.viewers = state.viewers.filter(v => v.unique !== action.unique);
        break;

      case WS_ACTION_USER_JOIN:
        draft.viewers = [...state.viewers, action.viewer];
        break;

      case WS_SET_ROOM_MESSAGES_USER:
        draft.messages = [...state.messages, action.message];
        break;

      case WS_SET_CURRENT_USER:
        draft.currentUser = action.user;
        break;

      case WS_SET_CURRENT_USER_USERNAME:
        if (state.currentUser.unique === action.user.unique) {
          draft.currentUser.username = action.user.username;
        }
        draft.viewers = state.viewers.map(v =>
          v.unique === action.user.unique ? action.user : v,
        );
        break;

      case WS_SET_REORDER: {
        let video;
        draft.videos.playlist = state.videos.playlist;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < draft.videos.playlist.length; i++) {
          if (draft.videos.playlist[i].unique === action.unique) {
            video = draft.videos.playlist.splice(i, 1);
            break;
          }
        }

        if (!video) return;
        draft.videos.lastReorder = new Date().getTime();
        draft.videos.playlist.splice(action.newIndex, 0, video[0]);
        break;
      }
    }
  });

export default webSocketReducer;
