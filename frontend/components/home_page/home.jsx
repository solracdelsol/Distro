import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const homePageTemplate = () => (
      <div>
        <h1>YOU ARE LOGGED IN!</h1>
        <h3>More content to come...</h3>
        <iframe
          width="966"
          height="543"
          src="https://www.youtube.com/embed/fQ1OA9Wyf2U?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div>
        <button onClick={this.props.logout}>Log Out</button>
        </div>
      </div>
    );


    return homePageTemplate();
  }
}

export default HomePage;
