import { LIST_SUGGESTIONS } from './actions';

export const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_SUGGESTIONS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
