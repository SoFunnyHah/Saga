import {
  LOGIN, LOGOUT, SET_AUTH, SIGNUP,
} from '../types';

export default function userReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTH:
      return payload;
    case LOGOUT:
      return {};
    case LOGIN:
      return payload;
    case SIGNUP:
      return payload;
    default:
      return state;
  }
}
