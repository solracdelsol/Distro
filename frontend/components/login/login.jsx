import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.login(this.state);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const signupFormTemplate = () => (
      <div className="login-form-container">
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <label>Welcome back!</label>
            <h5>We're so excited to see you again!</h5>
            
            <label><h5>EMAIL</h5>
              <input
                type="text"
                onChange={this.update('email')}
                value={this.state.email}
                className="login-input"
              />
            </label>

            <label><h5>PASSWORD</h5>
            <input
              type="text"
              onChange={this.update('password')}
              value={this.state.password}
              className="login-input"
            />
            </label>
            
            <button className="login-submit-button">Continue</button>
          </form>
        </div>
        <div>
          &nbsp;Need an account?&nbsp;
          <Link to="/register">Register</Link>
        </div>
      </div>
    );
    return signupFormTemplate();
  }
}

export default LoginForm;
