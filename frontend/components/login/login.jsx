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
      <div className="login-background">
        <div className="login-form-container">
          <div className="login-form">
            <div className="login-input">
              <form onSubmit={this.handleSubmit}>
                <h4 className="welcome-back">Welcome back!</h4>
                <h5 className="welcome-subcaption">We're so excited to see you again!</h5>
                
                <label className="login-email"><h5>EMAIL</h5>
                  <input
                    type="text"
                    onChange={this.update('email')}
                    value={this.state.email}
                    className="login-input"
                  />
                </label>
  
                <label className="login-password"><h5>PASSWORD</h5>
                <input
                  type="text"
                  onChange={this.update('password')}
                  value={this.state.password}
                  className="login-input"
                />
                </label>
                <button className="login-submit-button">
                  <div>Login</div>
                </button>
              </form>

              <div className="register-link">
                &nbsp;Need an account?&nbsp;
                <Link className="redirect-register" to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return signupFormTemplate();
  }
}

export default LoginForm;
