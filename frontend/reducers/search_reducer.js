import {RECEIVE_SEARCH,CLEAR_SEARCH} from '../actions/search';
import {RECEIVE_SUB, RECEIVE_SUBS, CLEAR_SUB, CLEAR_SUBS} from '../actions/subscription'
import {LOGOUT_CURRENT_USER} from "../actions/session"



const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_SEARCH:
      return Object.assign({}, state, action.search); 
    // case RECEIVE_SUB:
    //   return Object.assign({}, state, action.server);
    case CLEAR_SEARCH:
      return {};
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default searchReducer;