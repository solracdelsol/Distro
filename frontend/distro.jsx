import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';

import { postSession } from "./util/session";
import { postUser } from "./util/session";
import { deleteSession } from "./util/session";
import { createNewUser, login, logout } from "./actions/session";



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  

  // window.postUser = postUser;
  // window.postSession = postSession;
  // window.deleteSession = deleteSession;

  // window.getState = store.getState;
  // window.dispatch = store.dispatch; 
  // window.createNewUser = createNewUser;
  // window.login = login;
  // window.logout = logout;

  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = { 
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: { id }
      };
    store = configureStore(preloadedState);

    // Clean up after ourselves so we don't accidentally use the
    // global currentUser instead of the one in the store
    delete window.currentUser;

  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);
});

