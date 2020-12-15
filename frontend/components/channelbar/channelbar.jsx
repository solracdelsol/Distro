
import React from "react";
import { Link } from "react-router-dom";
import { getChannels } from "../../util/channel";
import { getServers } from "../../util/server";
import ServerBar from "../serverbar/serverbar_container";

// import { getChannels } from "../../util/channel";

class ChannelBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "nothing selected",
    }
    // this.generateChannels = this.generateChannels.bind(this)
  }

  // componentDidMount(){
  //   // let serverObject = {"7":{"id":7,"serverTitle":"demo","hostId":8}}
  //   this.props.getServers().then( (servers) => Object.values(servers.servers).forEach(server => { 
  //     // debugger
  //     return this.props.getChannels(server) }));
  // }

  // generateChannels(){
  //   this.setState({selected: this.props.selectedServer})
  //   console.log(this.state.selected)
  // }

  render() {
    return (
      <div className="channel-bar-container">
        <div className="channel-bar">
          <div className="channel-list">
            These are the channels
            <li id="test">boom</li>
            <li id="test">boom2</li>
            <li id="test">{this.props.serverTitle}</li>
            {/* {console.log(this.state.selected)} */}
            {/* {generateChannels()} */}
          </div>
        <button id="test" onClick={this.props.logout}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default ChannelBar;