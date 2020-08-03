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
          <div className="signup-form-container">
            <div className="signup-form">
              <div className="signup-input">
                <h4 className="create-account-caption">Create an Account</h4>
                <form className="form" onSubmit={this.handleSubmit}>
                  <label className="signup-username">
                    <h5>
                      Username
                    </h5>
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.update("username")}
                      className="signup-input"
                    />
                  </label>
                  <label className="signup-email">
                    <h5>
                      Email
                    </h5>
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      className="signup-input"
                    />
                  </label>
                  <label className="signup-password">
                    <h5>
                      Password
                    </h5>
                    <input
                      type="text"
                      value={this.state.password}
                      onChange={this.update("password")}
                      className="signup-input"
                    />
                  </label>
                  <div>
                  <button className="signup-submit-button">
                    <div>Continue</div>
                  </button>
                  </div>
                  <div className="login-link">
                    <Link className="redirect-login" to="/login">Already have an account?</Link>
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