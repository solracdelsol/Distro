import {
  RECEIVE_SERVER_ERRORS,
  CLEAR_SERVER_ERRORS,
} from "../actions/server";

import {
   CLEAR_SESSION_ERRORS, 
   RECEIVE_CURRENT_USER,
  } from "../actions/session";

// const errorMessages = {
//   ["Email can't be blank"]: 'email',
//   ["Password is too short (minimum is 6 characters)"]: 'password'
// }

const serverErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {}
  switch (action.type) {
    case RECEIVE_SERVER_ERRORS:
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
      // console.log(action.errors)
      newState["create"] = "This server name is taken"
      return newState;
    case CLEAR_SERVER_ERRORS:
      return {}
    case CLEAR_SESSION_ERRORS:
      return {};
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default serverErrorsReducer;