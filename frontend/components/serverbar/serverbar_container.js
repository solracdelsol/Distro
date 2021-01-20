import { connect } from "react-redux";

import ServerBar from "./serverbar.jsx";
import {createServer, getServer, getServers, patchServer, deleteServer} from "../../actions/server"

import {createChannel, getChannel, getChannels, patchChannel, deleteChannel} from "../../actions/channel";

import {openModal, closeModal} from "../../actions/modal"

import { withRouter } from "react-router";

// will also need to import the utils for the server fetches

//state for serverbar will be housing icons that lead to these servers, as well as your home server
const msp = (state) => ({
  servers: state.entities.servers,
  channels: state.entities.channels,
  users: state.entities.users,
});

const mdp = (dispatch) => ({
  createServer: (postForm) => dispatch(createServer(postForm)),
  getServer: (serverObj) => dispatch(getServer(serverObj)),
  getServers: () => dispatch(getServers()),
  patchServer: (editForm) => dispatch(patchServer(editForm)),
  deleteServer: (serverObj) => dispatch(deleteServer(serverObj)),

  createChannel: (channelForm) => dispatch(createChannel(channelForm)),
  getChannel: (channelObj) => dispatch(getChannel(channelObj)),
  getChannels: (serverObj) => dispatch(getChannels(serverObj)),
  patchChannel: (channelObj) => dispatch(patchChannel(channelObj)),
  deleteChannel: (channelObj) => dispatch(deleteChannel(channelObj)),

  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),


// dispatches to generate channels for that server
});
export default withRouter(connect(msp, mdp)(ServerBar))

// this component will render in the home.jsx file
