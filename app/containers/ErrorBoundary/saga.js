import Axios from 'axios';
import { takeLatest } from 'redux-saga/effects';
import { ERROR_BOUNDARY_ERROR } from './constants';

export function* handleError({ error, info }) {
  Axios.post('/error', { error, info });
}

// Individual exports for testing
export default function* errorBoundarySaga() {
  yield takeLatest(ERROR_BOUNDARY_ERROR, handleError);
}
