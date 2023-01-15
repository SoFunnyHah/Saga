import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './reducers/counterReducer';
import postsReducer from './reducers/postsReducer';
import userReducer from './reducers/userReducer';
// import postSagaWatcher from './sagas/postsSaga';
import { rootSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    posts: postsReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
