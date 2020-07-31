import React from 'react';
import { Link } from "react-router-dom";



class NavBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const loginbutton = () => {
        return(
      <div className='login'>
        <Link className= 'login-button' to='/login'>Log In</Link>
        <img src={window.cat}/>
      </div>
        )};

    return loginbutton();
  };
}

export default NavBar;

 {/*
  NOTES:
&nbsp; ----insert text here ---&nbsp;  nonbreaking space tag -> Log In or Sign Up 
- This login button will be placed on top right of screen
- NavBarContainer will go to LandingContainer
- MAKE LOGIN AND DEMO LOGIN SAME BUTTON COLOR
*/}