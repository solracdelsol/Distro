import { connect } from "react-redux";

import { createNewUser } from "../../actions/session";
import SignupForm from "./signup";

const msp = (state, ownProps) => ({
  errors: state.errors.session, //the slice holding our sessionErrorsReducer
});

const mdp = (dispatch) => ({
  signup: (userForm) => dispatch(createNewUser(userForm)),
});

export default connect(msp, mdp)(SignupForm);
