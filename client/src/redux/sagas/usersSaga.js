import axios from 'axios';
import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import {
  loginUser, logoutUser, setAuthUser, signupUser,
} from '../actions/userActions';
import {
  LOGIN_ASYNC,
  LOGOUT_ASYNC,
  SET_AUTH_ASYNC,
  SIGNUP_ASYNC,
} from '../types';

const checkUserWithAxios = () => axios.post('/api/user/check');
const logoutUserWithAxios = () => axios('/api/user/logout');
const loginUserWithAxios = (input) => axios.post('/api/user/login', { input });
const signupUserWithAxios = (input) => axios.post('/api/user/signup', { input });

// check user
function* checkUserSagaWorker(action) {
  try {
    const res = yield call(checkUserWithAxios, action.payload);
    yield put(setAuthUser(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// logout user
function* logoutSagaWorker(action) {
  try {
    yield call(logoutUserWithAxios, action.payload);
    yield put(logoutUser(action.payload));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// logIn user
function* loginUserSagaWorker(action) {
  try {
    const res = yield call(loginUserWithAxios, action.payload);
    yield put(loginUser(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// signUp user
function* signupUserSagaWorker(action) {
  try {
    const res = yield call(signupUserWithAxios, action.payload);
    yield put(signupUser(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* userSagaWatcher() {
  yield takeEvery(SET_AUTH_ASYNC, checkUserSagaWorker);
  yield takeEvery(LOGOUT_ASYNC, logoutSagaWorker);
  yield takeEvery(LOGIN_ASYNC, loginUserSagaWorker);
  yield takeEvery(SIGNUP_ASYNC, signupUserSagaWorker);
}

export default userSagaWatcher;
