import { getServer, getServers, postServer, editServer, deleteServer } from "../util/server"

export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const CLEAR_SERVERS = "CLEAR_SERVERS";
export const EDIT_SERVER = "EDIT_SERVER";

// action creators

const receiveServer = (server) => ({
  type: RECIEVE_SERVER,
  server,
})

const receiveServers = (servers) => ({
  type: RECIEVE_SERVERS,
  servers
})

const patchServer = (server) => ({
  type: EDIT_SERVER,
  server
})

const clearServer = (serverId) => ({
  type: CLEAR_SERVERS,
  serverId // needs to know which server needs to be cleared from frontend
})

const receiveServerErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const clearServerErrors = () =>({
  type: CLEAR_SESSION_ERRORS
})

//thunk action creators

export const createServer = (serverForm) => (dispatch) => {
  return postServer(serverForm).then( (server) => {
    return dispatch(recieveServer(server));
  },
  (errors) => dispatch(receiveServerErrors(errors)))
};

export const receiveServer = (serverId) => {
  return getServer(serverId).then((server) => {
     return dispatch(recieveServer(server))
    });
};

export const receiveServers = () => {
  return getServers().then((servers) => {
     return dispatch(recieveServers(servers))
    });
};

export const patchServer = (serverId) => {
  return editServer(serverId).then((editedServer) => {
    return dispatch(patchServer(editedServer))
  });
};

export const deleteServer = (serverId) => {
  return deleteServer(serverId).then( () => {
    return dispatch(clearServer(serverId))
  })
}
