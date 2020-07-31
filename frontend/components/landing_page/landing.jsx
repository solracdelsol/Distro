import React from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container"


class LandingPage extends React.Component{
  constructor(props){
    super(props);
  }

  demoLogin(){
    const demo_user = {email:'carlos', password:'carlos'}

  }

  render(){
    
    return(
        <div>
        <NavBarContainer/>
        <Link to='/register'>Sign Up</Link>
        <button onClick={demoLogin()}>Demo Login</button>
        </div>
      
    );

  };

}


export default LandingPage;