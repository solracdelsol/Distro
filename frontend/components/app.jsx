import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import LandingPageContainer from './landing_page/landing';
import SignUpFormContainer from './signup/signup_container';
import LoginFormContainer from './login/login_form_container';
import HomePageContainer from './home_page/home_container'
import { AuthRoute, ProtectedRoute } from "../util/route_util";


{/* APP.JSX IS NORMALLY WHERE YOU WANT TO DUMP ALL YOUR COMPONENTS, THIS IS THE MAIN CONTAINER AREA */}
{/* define your routes here */}


const App = () => (
  <div>
    <header>
      <h1>Distro</h1>
    </header>
    <Switch>
      <AuthRoute exact path="/" component={LandingPageContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/register" component={SignUpFormContainer} />
      <ProtectedRoute path='/channels/home' component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;

//Auth -> login/signup
//Protected -> anything involving being logged in
//make these custom routes