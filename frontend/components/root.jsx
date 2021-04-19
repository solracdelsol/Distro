import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import actionCable from "actioncable"

import App from "./app.jsx";

const CableApp = {}

CableApp.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3000/cable`)


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App cableApp={CableApp} />
    </HashRouter>
  </Provider>
);

export default Root;


//ProectedRoutes check if theres current user before sending you to logged in stuff
//Authroute only allow component to render if someone is not logged in