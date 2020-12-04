import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session';



const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = state;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      // return Object.assign({}, state, { [action.user.id]: action.user}); //{[action.user.id]:action.user} // how they taught us to normalize state is stupid and doesnt work, [id] undefined
      // return {hello: "goodbye" };
      return Object.assign({}, nextState, { id: Object.values(action.user)[0]});
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default usersReducer;