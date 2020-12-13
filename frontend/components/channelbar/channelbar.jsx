
import React from "react";
import { Link } from "react-router-dom";
import { getChannels } from "../../util/channel";
import { getServers } from "../../util/server";
// import { getChannels } from "../../util/channel";

class ChannelBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
 // START WORKING HERE

  // generateServersAndChannels(){
  //   // debugger
  //   let servers = this.props.getServers();
  //   // debugger
  //   Object.values(servers).forEach( server => {
  //     debugger
  //     return getChannels(server)
  //   })
  //   // debugger

  // }

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