import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';

import { postSession } from "./util/session";
import { postUser } from "./util/session";
import { deleteSession } from "./util/session";
import { createNewUser, login, logout } from "./actions/session";
import { postServer, getServers, getServer, editServer, deleteServer } from "./util/server"
import { postChannel, getChannels, getChannel, editChannel, deleteChannel } from "./util/channel"
import {createMessage, getMessage, getMessages} from "./util/message"



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  //test server jquery
  window.postServer = postServer
  window.getServers = getServers
  window.getServer = getServer
  window.editServer = editServer
  window.deleteServer = deleteServer

  //test channel jquery
  window.postChannel = postChannel
  window.getChannels = getChannels
  window.getChannel = getChannel
  window.editChannel = editChannel
  window.deleteChannel = deleteChannel

  //test message jquery
  window.createMessage = createMessage
  window.getMessage = getMessage
  window.getMessages = getMessages

  // window.postUser = postUser;
  // window.postSession = postSession;
  window.deleteSession = deleteSession;


  // window.createNewUser = createNewUser;
  window.login = login;
  window.logout = logout;

  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    // const { id } = currentUser;
    const preloadedState = { 
      entities: {
        users: {
          id: Object.values(window.currentUser)[0] // [id]: currentUser comes out undefined -- TALK TO COACH ABOUT IT, this format in general does not work
        }
        // REMEMBER TO ADD SERVERS AND CHANNELS TO THIS PRELOADED STATE, USING UTIL
      },
      session: {id: Object.values(window.currentUser)[0].id},
      };
    store = configureStore(preloadedState);

  window.getState = store.getState;
  // window.dispatch = store.dispatch; 
    // Clean up after ourselves so we don't accidentally use the
    // global currentUser instead of the one in the store
    // delete window.currentUser;

  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);
});
