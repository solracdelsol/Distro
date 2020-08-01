import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container"


class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(){
    const demo_user = {email:'carlos', password:'carlos'}
    return this.props.login(demo_user);
  }

  render(){

    return (
      <div className="body">
        {/* <img src={window.splash} /> */}
        
        <NavBarContainer />
        <div className="center-display">
          <div className="center-text">
            <div>Your place to talk</div>
            <div>
              Whether you’re part of a school club, gaming group, worldwide art
              community, or just a handful of friends that want to spend time
              together, Discord makes it easy to talk every day and hang out
              more often.
            </div>
          </div>
          <div className="center-btns">
            <Link to="/register" className="signup">
              Sign Up
            </Link>
            <button className="demo-login" onClick={this.demoLogin}>
              Demo Login
            </button>
          </div>
        </div>
      </div>
    );

  };

}


export default LandingPage;