// import { getChannel, getChannels, postChannel, editChannel, deleteChannel } from "../util/server"
import * as APIUtil from "../util/channel" // other way to do it

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const CLEAR_CHANNEL = "CLEAR_CHANNEL";
export const EDIT_CHANNEL = "EDIT_CHANNEL";

// action creators

const receiveChannel = (channel) => ({
  type: RECIEVE_CHANNEL,
  channel,
})

const receiveChannels = (channels) => ({
  type: RECIEVE_CHANNELS,
  channels,
})

const patchChannel = (channel) => ({
  type: EDIT_CHANNEL,
  channel,
})

const clearChannel = (channelId) => ({
  type: CLEAR_CHANNEL,
  channelId // needs to know which channel needs to be cleared from frontend
})

const receiveChannelErrors = (errors) => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors,
});

export const clearChannelErrors = () =>({
  type: CLEAR_CHANNEL_ERRORS
})

//thunk action creators

export const createChannel = (channelForm) => (dispatch) => {
  return APIUtil.postChannel(channelForm).then( (channel) => {
    return dispatch(receiveChannel(channel));
  }) //remove ) if you wanna add the errors below
  // , (errors) => dispatch(receiveServerErrors(errors)))
};

export const receiveChannel = (channelId) => {
  return APIUtil.getChannel(channelId).then((channel) => {
     return dispatch(recieveChannel(channel))
    });
};

export const receiveChannels = () => {
  return APIUtil.getChannels().then((channels) => {
     return dispatch(recieveChannels(channels))
    });
};

export const patchChannel = (channelId) => {
  return APIUtil.editChannel(channelId).then((editedChannel) => {
    return dispatch(patchChannel(editedChannel))
  });
};

export const deleteChannel = (channelId) => {
  return APIUtil.deleteChannel(channelId).then( () => {
    return dispatch(clearChannel(channelId))
  })
}
