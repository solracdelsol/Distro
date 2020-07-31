import React from 'react';
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email:'', username:'', password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    return this.props.signup(this.state);
    // redirect after signup on this line???
  };

  update(field){
    return (e) => this.setState({[field]:e.currentTarget.value});
  };

  render() {

    const signupFormTemplate = () => (
      <div className='signup-form-container'>
        <div className='signup-form'>
          <form onSubmit={this.handleSubmit}>
            <label>Create an account</label>
            <label><h5>EMAIL</h5>
            <input type="text" onChange={this.update('email')} value={this.state.email} className='signup-input'/>
            </label>
            <label><h5>USERNAME</h5>
            <input type="text" onChange={this.update('username')} value={this.state.username} className='signup-input'/>
            </label>
            <label><h5>PASSWORD</h5>
            <input type="text" onChange={this.update('password')} value={this.state.password} className='signup-input'/>
            </label>
            <button className='signup-submit-button'>Continue</button>
          </form>
        </div>
        <Link to='/login'>Already have an account?</Link>
      </div>
    );
    return signupFormTemplate();
  }
}

export default SignupForm;