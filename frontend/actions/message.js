import * as APIUtil from "../util/message"

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";

// action creators

const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
})

const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages,
})

// const clearChannel = (messageObj) => ({
//   type: CLEAR_MESSAGES,
//   messageId: messageObj.id, // needs to know which message needs to be cleared from frontend
// })

//thunk action creators

export const createMessage = (messageForm) => (dispatch) => {
  return APIUtil.postMessage(messageForm).then( (message) => {
    return dispatch(receiveMessage(message));
  }) //remove ) if you wanna add the errors below
  // , (errors) => dispatch(receiveServerErrors(errors)))
};

export const getMessage = (messageObj) => (dispatch) => {
  return APIUtil.getMessage(messageObj).then((message) => {
     return dispatch(recieveMessage(message))
    });
};

export const getMessages = (messageObj) => (dispatch) => {
  return APIUtil.getMessages(messageObj).then((messages) => {
     return dispatch(receiveMessages(messages))
    });
};