// import axios from 'axios';
import {
  LOGIN,
  LOGIN_ASYNC,
  LOGOUT, LOGOUT_ASYNC, SET_AUTH, SET_AUTH_ASYNC, SIGNUP, SIGNUP_ASYNC,
} from '../types';

export const setAuthUser = (payload) => ({ type: SET_AUTH, payload });
export const logoutUser = () => ({ type: LOGOUT });
export const loginUser = (payload) => ({ type: LOGIN, payload });
export const signupUser = (payload) => ({ type: SIGNUP, payload });

export const checkAuthAsync = (payload) => ({ type: SET_AUTH_ASYNC, payload });
export const logoutUserAsync = (payload) => ({ type: LOGOUT_ASYNC, payload });
export const loginUserAsync = (payload) => ({ type: LOGIN_ASYNC, payload });
export const signupUserAsync = (payload) => ({ type: SIGNUP_ASYNC, payload });

// export const checkAuth = () => (dispatch) => {
//   axios.post('/api/user/check')
//     .then((res) => dispatch(setAuthUser(res.data)))
//     .catch(console.log);
// };

// export const loginUser = (e, inputs) => (dispatch) => {
//   e.preventDefault();
//   axios.post('/api/user/login', inputs)
//     .then((res) => {
//       dispatch(setAuthUser(res.data));
//     })
//     .catch(console.log);
// };

// export const signupUser = (e, inputs) => (dispatch) => {
//   e.preventDefault();
//   axios.post('/api/user/signup', inputs)
//     .then((res) => dispatch(setAuthUser(res.data)))
//     .catch(console.log);
// };

// export const logoutUserAsync = () => (dispatch) => {
//   axios('/api/user/logout')
//     .then(() => dispatch(logoutUser()))
//     .catch(console.log);
// };
