import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the webSocket state domain
 */

const selectWebSocketDomain = state => state.webSocket || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by WebSocket
 */

export const makeSelectRoom = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate,
  );

export const makeSelectSeek = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.seek,
  );

export const makeSelectPlaying = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.playing,
  );

export const makeSelectViewers = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.viewers,
  );

export const makeSelectPlaylist = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.videos.playlist,
  );

export const makeSelectPlaylistHistory = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.videos.history,
  );

export const makeSelectCurrentlyPlaying = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.videos.playing,
  );

export const makeSelectPlayOrder = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.videos.playOrder,
  );

export const makeSelectRoomOwner = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.owner,
  );

export const makeSelectRoomId = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.unique,
  );

export const makeSelectRoomMessages = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.messages,
  );

export const makeSelectCurrentUser = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.currentUser,
  );

export const makeSelectTimelineAction = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.timelineAction,
  );

export const makeSelectLastReorder = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.videos.lastReorder,
  );

export const makeSelectEmit = () =>
  createSelector(
    selectWebSocketDomain,
    substate => substate.emit,
  );
