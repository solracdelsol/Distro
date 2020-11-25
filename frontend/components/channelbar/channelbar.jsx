
import React from "react";
import { Link } from "react-router-dom";

class ChannelBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="channel-bar-container">
        <div className="channel-bar">
          <div className="channel-list">
            These are the channels
            <li id="test">boom</li>
            <li id="test">boom2</li>
            <li id="test">boom3</li>
          </div>
        <button id="test" onClick={this.props.logout}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default ChannelBar;