import {
  RECEIVE_CHANNEL_ERRORS,
  CLEAR_CHANNEL_ERRORS,
} from "../actions/channel";

import {
  CLEAR_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session"

// const errorMessages = {
//   ["Email can't be blank"]: 'email',
//   ["Password is too short (minimum is 6 characters)"]: 'password'
// }

const channelErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {}
  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      // if(action.errors.responseJSON.includes("Username has already been taken")){
      //   newState['username'] = "Username has already been taken";
      // }
      // if (action.errors.responseText = "['Invalid username/password combination']"){
      //   newState['email'] = 'Invalid email or password';
      //   newState['password'] = 'Invalid email or password';
      // } else{
      //   action.errors.responseJSON.forEach(error =>{
      //     let key = errorMessages[error];
      //     newState[key] = error;
      //   })
      // }
      newState["create"] = "channel name already exists for this server"
      return newState;
    case CLEAR_CHANNEL_ERRORS:
      return {}
    case CLEAR_SESSION_ERRORS:
      return {};
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default channelErrorsReducer;