import { connect } from "react-redux";
import { logout } from "../../actions/session";
import {createChannel, getChannel, getChannels, patchChannel, deleteChannel} from "../../actions/channel";
import ChannelBar from "./channelbar.jsx";

import {createServer, getServer, getServers, patchServer, deleteServer} from "../../actions/server"
import {createMessage, getMessages, getMessage, clearMessages} from "../../actions/message"

// will also need to import the utils for the server fetches

const msp = (state) => ({
  channels: state.entities.channels,
  servers: state.entities.servers,
  //state for serverbar will be housing icons that lead to these servers, as well as your home server
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
  logout: () => dispatch(logout()),
  // dispatches to generate channels for that server

  createMessage: (messageForm) => dispatch(createMessage(messageForm)),
  getMessage: (messageObj) => dispatch(getMessage(messageObj)),
  getMessages: (messageObj) => dispatch(getMessages(messageObj)),
  clearMessages: () => dispatch(clearMessages()),
});
export default connect(msp, mdp)(ChannelBar);

// this component will render in the home.jsx file
