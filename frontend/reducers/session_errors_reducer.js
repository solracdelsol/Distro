import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
} from "../actions/session";

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default sessionErrorsReducer;
