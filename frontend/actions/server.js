import * as APIUtil from "../util/server"
//OR YOU CAN SAY import { getServer, getServers, postServer, editServer, deleteServer } from "../util/server"
import {getChannels} from "./channel"

export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const CLEAR_SERVER = "CLEAR_SERVER";

export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS"
export const CLEAR_SERVER_ERRORS = "CLEAR_SERVER_ERRORS"
// export const EDIT_SERVER = "EDIT_SERVER";


// action creators

const receiveServer = (server) => ({
  type: RECEIVE_SERVER,
  server,
})

const receiveServers = (servers) => ({
  type: RECEIVE_SERVERS,
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

const receiveServerErrors = (errors) => ({
  type: RECEIVE_SERVER_ERRORS,
  errors,
});

export const clearServerErrors = () =>({
  type: CLEAR_SERVER_ERRORS
})

//thunk action creators

export const createServer = (serverForm) => (dispatch) => {
  return APIUtil.postServer(serverForm)
  .then( 
    (server) => {return dispatch(receiveServer(server))}, 
    (errors) => {return dispatch(receiveServerErrors(errors))} 
    )
  .then(
    (serverAction) => { return getChannels(serverAction.server)}
    );
};

export const getServer = (serverObj) => (dispatch) =>{
  return APIUtil.getServer(serverObj).then((server) => {
     return dispatch(receiveServer(server))
    });
};

export const getServers = () => (dispatch) =>{
  return APIUtil.getServers().then((servers) => {
     return dispatch(receiveServers(servers))
    });
};

export const patchServer = (serverObj) => (dispatch) =>{
  return APIUtil.editServer(serverObj).then((editedServer) => {
    return dispatch(receiveServer(editedServer))
  });
};

export const deleteServer = (serverObj) => (dispatch) =>{
  return APIUtil.deleteServer(serverObj).then( () => {
    return dispatch(clearServer(serverObj))
  })
}
