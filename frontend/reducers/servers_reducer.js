import {RECEIVE_SERVER, RECEIVE_SERVERS, CLEAR_SERVER} from '../actions/server';



const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_SERVERS: // a channel object looks like {"2":{"id":2,"channelTitle":"demoChan","serverId":7}
      return Object.assign({}, state, action.servers); 
      // example: will look like
      // { 
      //  '2': { id: 2, channelTitle: 'demoChan', serverId: 7 },
      // '3': { id: 3, channelTitle: 'demoChan2', serverId: 7 } 
      //}
      // return {hello: "goodbye" };
      // return { id: action.user};
    case RECEIVE_SERVER:
      return Object.assign({}, state, action.server);
    case CLEAR_SERVER:
      delete nextState[`${action.serverId}`]
      return nextState;
    default:
      return state;
  }
}

export default serversReducer;