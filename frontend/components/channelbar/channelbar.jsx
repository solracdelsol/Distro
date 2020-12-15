
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
    this.generateChannels = this.generateChannels.bind(this)
  }

  // componentDidMount(){
  //   // let serverObject = {"7":{"id":7,"serverTitle":"demo","hostId":8}}
  //   this.props.getServers().then( (servers) => Object.values(servers.servers).forEach(server => { 
  //     // debugger
  //     return this.props.getChannels(server) }));
  // }



  generateChannels(){
    if(this.props.serverTitle !== ""){
      let channels = []
      Object.values(this.props.channels).forEach((channel, idx)=>{
        if(channel.serverId === this.props.serverId){
          channels.push(<li key={idx} id="test">{channel.channelTitle}</li>)
        }
      })
      return channels
    }
  }

  render() {
    
    const channelsTemplate = () => {
      return(<div className="channel-bar-container">
        <div className="channel-bar">
          <div className="channel-list">
            {this.props.serverTitle}
            {this.generateChannels()}
          </div>
        <button id="test" onClick={this.props.logout}>Log Out</button>
        </div>
      </div>
      )
    }
    return channelsTemplate()
  }
}

export default ChannelBar;