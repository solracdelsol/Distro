import {connect} from 'react-redux';

import LoginForm from './login';
import {login} from '../../actions/session'

const msp = (state, ownProps) => ({
  errors: state.errors.session
});

const mdp = dispatch => ({
  login: (userForm) => dispatch(login(userForm))
})


export default connect(msp, mdp)(LoginForm);