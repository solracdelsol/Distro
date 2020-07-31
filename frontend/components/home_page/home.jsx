import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const homePageTemplate = () =>(
      <div>
        <h1>YOU ARE LOGGED IN!</h1>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );


    return homePageTemplate();
  }
}

export default HomePage;
