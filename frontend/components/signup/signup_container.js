import {connect} from 'react-redux';
import {createNewUser, clearErrors} from '../../actions/session.js';
import Signup from './signup.jsx';

const msp = (state, ownProps) => ({
  errors: state.errors.session
});

const mdp = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(Signup);