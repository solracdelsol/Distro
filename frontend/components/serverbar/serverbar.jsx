import React from "react";
import { Link } from "react-router-dom";

class ServerBar extends React.Component {
  constructor(props) {
    super(props);
    this.props.getServers();
  }

  render(){
    return(
    <div className="server-bar-container">
      <div className="server-bar">
      <div className="server-list">These are the servers
        <li id="test">boom</li>
        <li id="test">boom2</li>
        <li id="test">boom3</li>
      </div>
      </div>
    </div>
    )}
}

export default ServerBar