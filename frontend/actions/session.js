import { postUser, postSession, deleteSession } from "../util/session.js";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

//action creators

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

//thunk action creators

export const createNewUser = (formUser) => (dispatch) => {
  return postUser(formUser).then((user) => {
    return dispatch(receiveCurrentUser(user));
  },
  (errors) => dispatch(receiveErrors(errors))
  );
};

export const login = (formUser) => (dispatch) => {
  return postSession(formUser).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors))
  );
};

export const logout = () => (dispatch) =>
  deleteSession().then(() => dispatch(logoutCurrentUser()));


