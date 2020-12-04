import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session'

const _nullSession = Object.freeze({
  id: null,
});

const sessionReducer = ( state = _nullSession, action) => {
  Object.freeze(state);
  let nextState = state;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, nextState, { id: Object.values(action.user)[0].id}); 
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};

export default sessionReducer;
