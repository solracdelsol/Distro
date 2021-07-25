import React from 'react';
import { Link } from "react-router-dom";


class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = { username:'', email:'', password:''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    return this.props.createNewUser(this.state) /*whereever you want to redirect after signup */
  }

  render(){
    return (
        <div className="signup-background">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="back-to-landing"></div>
          </Link>
          <div className="signup-form-container">
            <div className="signup-form">
              <div className="signup-input">
                <h4 className="create-account-caption">Create an Account</h4>
                <form className="form" onSubmit={this.handleSubmit}>
                  <label className={this.props.errors['username'] ? 'error-label' : 'signup-username'}>
                    <h5 className={this.props.errors['username'] ? 'error-label' : 'signup-username'} style={{color: this.props.errors['username'] ? "red" : "white"}} >
                      {this.props.errors['username'] ? "USERNAME- name is already taken" : "Username"}
                    </h5>
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.update("username")}
                      className="signup-input"
                      autoComplete="off"
                    />
                  </label >
                  <label className={this.props.errors['username'] ? 'error-label' : "signup-email"}>
                    <h5 style={{color: this.props.errors['username'] ? "red" : "white"}}>
                      {this.props.errors['email'] ? 'EMAIL - Invalid email/password' : 'Email'}
                    </h5>
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      className="signup-input"
                      autoComplete="off"
                    />
                  </label>
                  <label className={this.props.errors['password'] ? 'error-label' : "signup-password"}>
                    <h5 style={{color: this.props.errors['password'] ? "red" : "white"}}>
                      {this.props.errors['password'] ? 'PASSWORD - Invalid email/password' : 'Password'}
                    </h5>
                    <input
                      type="text"
                      value={this.state.password}
                      onChange={this.update("password")}
                      className="signup-input"
                      autoComplete="off"
                    />
                  </label>
                  <div>
                  <button className="signup-submit-button">
                    <div>Continue</div>
                  </button>
                  </div>
                  <div className="login-link">
                    <Link className="redirect-login"  onClick={this.props.clearErrors} to="/login">Already have an account?</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Signup;