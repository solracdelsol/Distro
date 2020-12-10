// import { getServer, getServers, postServer, editServer, deleteServer } from "../util/server"
import * as APIUtil from "../util/server"

export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const CLEAR_SERVER = "CLEAR_SERVER";
// export const EDIT_SERVER = "EDIT_SERVER";

// action creators

const receiveServer = (server) => ({
  type: RECIEVE_SERVER,
  server,
})

const receiveServers = (servers) => ({
  type: RECIEVE_SERVERS,
  servers
})

// const patchServer = (server) => ({
//   type: EDIT_SERVER,
//   server
// })

const clearServer = (serverObj) => ({
  type: CLEAR_SERVER,
  serverId: serverObj.id, // needs to know which server needs to be cleared from frontend
})

// const receiveServerErrors = (errors) => ({
//   type: RECEIVE_SESSION_ERRORS,
//   errors,
// });

// export const clearServerErrors = () =>({
//   type: CLEAR_SESSION_ERRORS
// })

//thunk action creators

export const createServer = (serverForm) => (dispatch) => {
  return APIUtil.postServer(serverForm).then( (server) => {
    return dispatch(recieveServer(server));
  });
  //, (errors) => dispatch(receiveServerErrors(errors))) // when adding for an errors slice of state
};

export const getServer = (serverObj) => {
  return APIUtil.getServer(serverObj).then((server) => {
     return dispatch(receiveServer(server))
    });
};

export const getServers = () => {
  return APIUtil.getServers().then((servers) => {
     return dispatch(receiveServers(servers))
    });
};

export const patchServer = (serverObj) => {
  return APIUtil.editServer(serverObj).then((editedServer) => {
    return dispatch(receiveServer(editedServer))
  });
};

export const deleteServer = (serverObj) => {
  return APIUtil.deleteServer(serverObj).then( () => {
    return dispatch(clearServer(serverObj))
  })
}
