import {RECEIVE_CHANNEL, RECEIVE_CHANNELS, CLEAR_CHANNEL} from '../actions/channel';



const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_CHANNELS: // a channel object looks like {"2":{"id":2,"channelTitle":"demoChan","serverId":7}
      return Object.assign({}, state, action.channels); 
      // example: will look like
      // { 
      //  '2': { id: 2, channelTitle: 'demoChan', serverId: 7 },
      // '3': { id: 3, channelTitle: 'demoChan2', serverId: 7 } 
      //}
      // return {hello: "goodbye" };
      // return { id: action.user};
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, action.channel);
    case CLEAR_CHANNEL:
      delete nextState[`${action.channelId}`]
      return nextState;
    default:
      return state;
  }
}

export default channelsReducer;