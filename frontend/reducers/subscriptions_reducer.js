import {RECEIVE_SUB, RECEIVE_SUBS, CLEAR_SUBS} from '../actions/subscription';
import {LOGOUT_CURRENT_USER} from "../actions/session"



const subscriptionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_SUB:
      return Object.assign({}, state, action.subscription);
    case RECEIVE_SUBS:
      return Object.assign({}, state, action.subscriptions); 
    // case CLEAR_SUB:   // save for leaveServer(unsubscribe) feature
    //   delete nextState[`${action.serverId}`]
    //   return nextState;
    case CLEAR_SUBS:
      return {};
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default subscriptionsReducer;