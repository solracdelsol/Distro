import { connect } from "react-redux";

import NavBar from "./navbar.jsx";
import { logout } from "../../actions/session";

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
});
export default connect(msp, mdp)(NavBar);
