import {RECEIVE_MESSAGE, RECEIVE_MESSAGES, CLEAR_MESSAGES} from '../actions/message';
import {LOGOUT_CURRENT_USER} from "../actions/session"



const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  // let nextState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_MESSAGES: // a channel object looks like {"2":{"id":2,"channelTitle":"demoChan","serverId":7}
      return Object.assign({}, state, action.messages); 
      // example: will look like
      // { 
      //  '2': { id: 2, channelTitle: 'demoChan', serverId: 7 },
      // '3': { id: 3, channelTitle: 'demoChan2', serverId: 7 } 
      //}
      // return {hello: "goodbye" };
      // return { id: action.user};
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, action.message);
    case CLEAR_MESSAGES:
      return {};
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
}

export default messagesReducer;