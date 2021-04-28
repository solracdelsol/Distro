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
              <div className='nav-resume' onClick={() =>  window.location.href='https://docs.google.com/document/d/1gnlFvalpqWQ3958m3UjPVyCVOF-F9CADetFFYfjMy_s/edit?usp=sharing'}></div>
              <div className='nav-linkedin' onClick={() =>  window.location.href='https://www.linkedin.com/in/carloshpena/'}></div>
              <div className='nav-github' onClick={() =>  window.location.href='https://github.com/solracdelsol'} ></div>
              <div className='nav-angellist' onClick={() =>  window.location.href='https://angel.co/u/carlos-humberto-pena'} ></div>
              <div className='nav-personal-site' onClick={() =>  window.location.href='https://solracdelsol.github.io/'} ></div>
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