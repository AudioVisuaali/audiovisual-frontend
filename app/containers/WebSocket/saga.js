import { select, takeLatest } from 'redux-saga/effects';
import { USERNAME, TOKEN, setItem } from 'utils/localStorage';
import { makeSelectEmit, makeSelectCurrentlyPlaying } from './selectors';

import {
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
  WS_SET_CURRENT_USER,
  WS_ACTION_SEEK,
  WS_ACTION_SKIP,
  WS_ACTION_REMOVE_VIDEO,
  WS_ACTION_PLAY_ORDER,
  WS_ACTION_IS_PLAYING,
  WS_ACTION_ADD_VIDEO,
  WS_ACTION_NEXT_VIDEO,
  WS_ACTION_USER_MESSAGE,
  WS_ACTION_USER_USERNAME_CHANGE,
  WS_ACTION_REORDER,
} from './constants';

export function* setUserMetadata({ user }) {
  setItem(USERNAME, user.username);
  setItem(TOKEN, user.token);
}

export function* isPlaying({ isPlaying: isP_, played }) {
  const emit = yield select(makeSelectEmit());

  emit(WS_ACTION_IS_PLAYING, { isPlaying: isP_, played });
}

export function* seek({ seconds }) {
  const emit = yield select(makeSelectEmit());

  emit(WS_ACTION_SEEK, { seekToSeconds: seconds });
}

export function* skip() {
  const emit = yield select(makeSelectEmit());
  const playing = yield select(makeSelectCurrentlyPlaying());

  emit(WS_ACTION_SKIP, { currentlyPlayingVideoUnique: playing.unique });
}

export function* addVideo({ video }) {
  const emit = yield select(makeSelectEmit());

  emit(WS_ACTION_ADD_VIDEO, video);
}

export function* delVideo({ video }) {
  const emit = yield select(makeSelectEmit());

  emit(WS_ACTION_REMOVE_VIDEO, { videoUnique: video.unique });
}

export function* playOrder({ playType }) {
  const emit = yield select(makeSelectEmit());

  emit(WS_ACTION_PLAY_ORDER, { order: playType });
}

export function* next({ currentVideoId }) {
  const emit = yield select(makeSelectEmit());

  emit(WS_ACTION_NEXT_VIDEO, { currentlyPlayingVideoUnique: currentVideoId });
}

export function* sendMessage({ message }) {
  const emit = yield select(makeSelectEmit());

  emit(WS_ACTION_USER_MESSAGE, { message });
}

export function* reorder({ order }) {
  const emit = yield select(makeSelectEmit());

  emit(WS_ACTION_REORDER, { reorder: order });
}

export function* changeUsername({ name }) {
  const emit = yield select(makeSelectEmit());

  emit(WS_ACTION_USER_USERNAME_CHANGE, { newName: name });
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* websocketSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(WS_SET_CURRENT_USER, setUserMetadata);
  yield takeLatest(EMIT_ROOM_IS_PLAYING, isPlaying);
  yield takeLatest(EMIT_ROOM_TIMELINE, seek);
  yield takeLatest(EMIT_ROOM_SKIP, skip);
  yield takeLatest(EMIT_ROOM_ADD_VIDEO, addVideo);
  yield takeLatest(EMIT_ROOM_DEL_VIDEO, delVideo);
  yield takeLatest(EMIT_ROOM_PLAY_ORDER, playOrder);
  yield takeLatest(EMIT_ROOM_NEXT_VIDEO, next);
  yield takeLatest(EMIT_ROOM_MESSAGE, sendMessage);
  yield takeLatest(EMIT_ROOM_REORDER, reorder);
  yield takeLatest(EMIT_CURRENT_USER_CHANGE_USERNAME, changeUsername);
}
