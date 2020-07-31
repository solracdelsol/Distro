import { connect } from "react-redux";

import HomePage from "./home";
import {logout} from '../../actions/session';

const msp = (state, ownProps) => ({
  errors: state.errors.session
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(HomePage);
