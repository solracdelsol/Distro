import {connect} from 'react-redux';
import {createNewUser} from '../../actions/session.js';
import Signup from './signup.jsx';

//msp not needed right now

const mdp = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mdp)(Signup);