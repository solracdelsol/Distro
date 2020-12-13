
import React from "react";
import { Link } from "react-router-dom";
import { getChannels } from "../../util/channel";
import { getServers } from "../../util/server";
// import { getChannels } from "../../util/channel";

class ChannelBar extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   // let serverObject = {"7":{"id":7,"serverTitle":"demo","hostId":8}}
  //   this.props.getServers().then( (servers) => Object.values(servers.servers).forEach(server => { 
  //     // debugger
  //     return this.props.getChannels(server) }));
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