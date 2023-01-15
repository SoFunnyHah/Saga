import axios from 'axios';
import {
  call, put, takeEvery,
} from 'redux-saga/effects';
import {
  addPost, deletePost, setPosts,
} from '../actions/postsActions';
import {
  ADD_POST_ASYNC, DELETE_POST_ASYNC, GET_POSTS_ASYNC, UPDATE_POST_ASYNC,
} from '../types';

const getPostWithAxios = (input) => axios.post('/api/posts/', { input });
const deletePostWithAxios = (id) => axios.delete(`/api/posts/${id}`);
const getAllPostsWithAxios = () => axios('/api/posts/');
const updatePostWithAxios = (obj) => {
  const { id, input } = obj;
  return axios.put(`/api/posts/${id}`, { input });
};

// adding 1 post
function* postAddSagaWorker(action) {
  try {
    const res = yield call(getPostWithAxios, action.payload);
    yield put(addPost(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// delete post
function* postDeleteSagaWorker(action) {
  try {
    yield call(deletePostWithAxios, action.payload);
    yield put(deletePost(action.payload));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// get arr of posts
function* getPostsSagaWorker() {
  try {
    const res = yield call(getAllPostsWithAxios);
    yield put(setPosts(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// update one post
function* postUpdateSagaWorker(action) {
  try {
    const res = yield call(updatePostWithAxios, action.payload);
    console.log('RES IS:', res);
    yield put(setPosts(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* postSagaWatcher() {
  yield takeEvery(ADD_POST_ASYNC, postAddSagaWorker);
  yield takeEvery(DELETE_POST_ASYNC, postDeleteSagaWorker);
  yield takeEvery(GET_POSTS_ASYNC, getPostsSagaWorker);
  yield takeEvery(UPDATE_POST_ASYNC, postUpdateSagaWorker);
}

export default postSagaWatcher;
