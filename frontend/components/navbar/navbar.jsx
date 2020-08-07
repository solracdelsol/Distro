import React from 'react';
import { Link } from "react-router-dom";



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const loginbutton = () => {
      return (
        <header >
          <nav className="navbar">
            <div className="nav-left-cont">
              <div className='logo'></div> 
              <div className="distro-title">Distro</div>
            </div>
            <div className='nav-center-cont'>
              <div className='nav-download'>Download</div>
              <div className='nav-why'>Why Distro?</div>
              <div className='nav-github' onClick={() =>  window.location.href='https://github.com/solracdelsol'} ></div>
              <div className='nav-safety'>Safety</div>
              <div className='nav-support'>Support</div>
            </div>
            <div className="nav-right-cont">
              <Link className="login-btn" to="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>
      );
    };

    return loginbutton();
  }
}

export default NavBar;

 {/*
  NOTES:
&nbsp; ----insert text here ---&nbsp;  nonbreaking space tag -> Log In or Sign Up 
- This login button will be placed on top right of screen
- NavBarContainer will go to LandingContainer
- MAKE LOGIN AND DEMO LOGIN SAME BUTTON COLOR
*/}