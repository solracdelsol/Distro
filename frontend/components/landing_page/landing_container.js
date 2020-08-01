import {connect} from 'react-redux';

import LandingPage from "./landing";
import { logout,login } from "../../actions/session";

const msp = (state) => ({
});

const mdp = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(LandingPage);