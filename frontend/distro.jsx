import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';

import { postSession } from "./util/session";
import { postUser } from "./util/session";
import { deleteSession } from "./util/session";
import { createNewUser, login, logout } from "./actions/session";
import { getServers } from "./util/server"
import { getChannels } from "./util/channel"



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  window.getServers = getServers
  window.getChannels = getChannels
  // window.postUser = postUser;
  // window.postSession = postSession;
  window.deleteSession = deleteSession;


  // window.createNewUser = createNewUser;
  window.login = login;
  window.logout = logout;

  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = { 
      entities: {
        users: {
          id: currentUser // [id]: currentUser comes out undefined -- TALK TO COACH ABOUT IT, this format in general does not work
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
