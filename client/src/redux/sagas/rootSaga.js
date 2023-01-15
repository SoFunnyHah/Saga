import { all } from 'redux-saga/effects';
import postSagaWatcher from './postsSaga';
import userSagaWatcher from './usersSaga';

export function* rootSaga() {
  yield all([postSagaWatcher(), userSagaWatcher()]);
}
