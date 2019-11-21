/**
 *
 * WebSocket
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import createConnection from 'socket.io-client';
import { compose } from 'redux';

import { USERNAME, TOKEN, getItem, setItem } from 'utils/localStorage';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { generateName } from 'utils/name';

import {
  addVideo,
  setNextVideo,
  setRoom,
  setRoomIsPlaying,
  setSeek,
  setUserLeave,
  setUserJoin,
  setUserMessage,
  setPlayOrder,
  deleteVideo,
  skipVideo,
  setCurrentUser,
  setUsernameChange,
  setReorder,
  setEmit,
} from './actions';
import {
  WS_ACTION_USER,
  WS_ACTION_ROOM,
  WS_ACTION_SEEK,
  WS_ACTION_SKIP,
  WS_ACTION_REMOVE_VIDEO,
  WS_ACTION_PLAY_ORDER,
  WS_ACTION_IS_PLAYING,
  WS_ACTION_ADD_VIDEO,
  WS_ACTION_NEXT_VIDEO,
  WS_ACTION_USER_LEAVE,
  WS_ACTION_USER_JOIN,
  WS_ACTION_MESSAGE,
  WS_ACTION_USER_USERNAME_CHANGE,
  WS_ACTION_REORDER,
} from './constants';
import reducer from './reducer';
import saga from './saga';

export const key = 'webSocket';

export class WebSocket extends React.Component {
  componentDidMount() {
    const { roomcode } = this.props.match.params;
    const username = getItem(USERNAME) || generateName();
    const token = getItem(TOKEN);

    const auth = { query: { roomUnique: roomcode, username, token } };
    const url = `${window.location.protocol}//${window.location.hostname}`;
    this.socket = createConnection.connect(url, auth);

    this.socket.on('connect', () => {
      this.props.setEmit(this.emit);
      this.socket.on(WS_ACTION_ROOM, this.props.setRoom);
      this.socket.on(WS_ACTION_USER, this.setUser);
      this.socket.on(WS_ACTION_SEEK, this.props.setSeek);
      this.socket.on(WS_ACTION_SKIP, this.props.setSkip);
      this.socket.on(WS_ACTION_REMOVE_VIDEO, this.props.setRemoveVideo);
      this.socket.on(WS_ACTION_PLAY_ORDER, this.props.setPlayOrder);
      this.socket.on(WS_ACTION_IS_PLAYING, this.props.setRoomIsPlaying);
      this.socket.on(WS_ACTION_ADD_VIDEO, this.props.addVideo);
      this.socket.on(WS_ACTION_NEXT_VIDEO, this.props.setNextVideo);
      this.socket.on(WS_ACTION_USER_LEAVE, this.props.setUserLeave);
      this.socket.on(WS_ACTION_USER_JOIN, this.props.setUserJoin);
      this.socket.on(WS_ACTION_MESSAGE, this.props.setUserMessage);
      this.socket.on(
        WS_ACTION_USER_USERNAME_CHANGE,
        this.props.setUsernameChange,
      );
      this.socket.on(WS_ACTION_REORDER, this.props.setReorder);
    });
  }

  componentWillUnmount() {
    this.props.setEmit();
    this.socket.disconnect();
  }

  setUser = user => {
    setItem(USERNAME, user.username);
    setItem(TOKEN, user.token);
    this.props.setCurrentUser(user);
  };

  emit = (type, value) => this.socket.emit(type, value);

  render() {
    return null;
  }
}

WebSocket.propTypes = {
  addVideo: PropTypes.func.isRequired,
  setRoom: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      roomcode: PropTypes.string,
    }),
  }),
  setRoomIsPlaying: PropTypes.func.isRequired,
  setSeek: PropTypes.func.isRequired,
  setSkip: PropTypes.func.isRequired,
  setNextVideo: PropTypes.func.isRequired,
  setRemoveVideo: PropTypes.func.isRequired,
  setPlayOrder: PropTypes.func.isRequired,
  setUserLeave: PropTypes.func.isRequired,
  setUserJoin: PropTypes.func.isRequired,
  setUserMessage: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
  setUsernameChange: PropTypes.func.isRequired,
  setReorder: PropTypes.func.isRequired,
  setEmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: evt => dispatch(setCurrentUser(evt)),
  addVideo: evt => dispatch(addVideo(evt)),
  setRoomIsPlaying: evt => dispatch(setRoomIsPlaying(evt)),
  setRoom: evt => dispatch(setRoom(evt)),
  setSeek: evt => dispatch(setSeek(evt)),
  setNextVideo: evt => dispatch(setNextVideo(evt)),
  setUserLeave: evt => dispatch(setUserLeave(evt)),
  setUserJoin: evt => dispatch(setUserJoin(evt)),
  setUserMessage: evt => dispatch(setUserMessage(evt)),
  setSkip: evt => dispatch(skipVideo(evt)),
  setRemoveVideo: evt => dispatch(deleteVideo(evt)),
  setPlayOrder: evt => dispatch(setPlayOrder(evt)),
  setUsernameChange: evt => dispatch(setUsernameChange(evt)),
  setReorder: evt => dispatch(setReorder(evt)),
  setEmit: evt => dispatch(setEmit(evt)),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default injectReducer({ key, reducer })(
  injectSaga({ key, saga })(compose(withConnect)(withRouter(WebSocket))),
);
