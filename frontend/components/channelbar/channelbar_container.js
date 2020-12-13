import { connect } from "react-redux";
import { logout } from "../../actions/session";
import {createChannel, getChannel, getChannels, patchChannel, deleteChannel} from "../../actions/channel";
import ChannelBar from "./channelbar.jsx";

import {getServers} from "../../actions/server"

// will also need to import the utils for the server fetches

const msp = (state) => ({
  channels: state.channels,
  servers: state.servers
  //state for serverbar will be housing icons that lead to these servers, as well as your home server
});

const mdp = (dispatch) => ({
  getServers: () => dispatch(getServers()),

  createChannel: (channelForm) => dispatch(createChannel(channelForm)),
  getChannel: (channelObj) => dispatch(getChannel(channelObj)),
  getChannels: (serverObj) => dispatch(getChannels(serverObj)),
  patchChannel: (channelObj) => dispatch(patchChannel(channelObj)),
  deleteChannel: (channelObj) => dispatch(deleteChannel(channelObj)),
  logout: () => dispatch(logout()),
  // dispatches to generate channels for that server
});
export default connect(msp, mdp)(ChannelBar);

// this component will render in the home.jsx file
