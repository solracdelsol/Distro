import {RECEIVE_SERVER, RECEIVE_SERVERS, CLEAR_SERVER} from '../actions/sub';
import {LOGOUT_CURRENT_USER} from "../actions/session"



const subscriptionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_SUBS: // a channel object looks like {"2":{"id":2,"channelTitle":"demoChan","serverId":7}
      return Object.assign({}, state, action.subscriptions); 
      // example: will look like
      // { 
      //  '2': { id: 2, channelTitle: 'demoChan', serverId: 7 },
      // '3': { id: 3, channelTitle: 'demoChan2', serverId: 7 } 
      //}
      // return {hello: "goodbye" };
      // return { id: action.user};
    case RECEIVE_SUB:
      return Object.assign({}, state, action.server);
    case CLEAR_SUB:
      delete nextState[`${action.serverId}`] /// FIX THIS
      return nextState;
    case CLEAR_SUBS:
      return {};
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default subscriptionsReducer;