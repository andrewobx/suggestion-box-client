import { LOGIN, LOGOUT } from './actions';

export const INITIAL_STATE = {
  logged: false,
  tokens: null,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        logged: true,
        tokens: action.payload.tokens,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
