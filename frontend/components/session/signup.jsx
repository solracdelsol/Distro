import React from 'react';


class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = { username:'', email:'', password:''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(type){
    return () => this.setState({[type]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    return this.props.createNewUser(this.state).then(this.props.history.push('/chirps')) {/*whereever you want to redirect after signup */}
  }

  render(){
    return(
      <div className='session-form'>
        <h2>Sign Up</h2>
        <form>
          <label>Username
            <input type="text" value={this.state.username} onChange={this.handleInput('username')}/>
          </label>
          <label>Email
            <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
          </label>
          <label>Password
            <input type="text" value={this.state.password} onChange={this.handleInput('password')}/>
          </label>
          <button Onclick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;