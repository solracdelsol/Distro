
import React from "react";
import { Link } from "react-router-dom";
import { getChannels } from "../../util/channel";
import { getServers } from "../../util/server";
import ServerBar from "../serverbar/serverbar_container";
import MessageWindow from "../messages/messages_container";

// import { getChannels } from "../../util/channel";

class ChannelBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChannel: null,
    }
    this.generateChannels = this.generateChannels.bind(this)
    this.channelClick = this.channelClick.bind(this)
    this.parseId = this.parseId.bind(this)
  }

  // componentDidMount(){
  //   // let serverObject = {"7":{"id":7,"serverTitle":"demo","hostId":8}}
  //   this.props.getServers().then( (servers) => Object.values(servers.servers).forEach(server => { 
  //     // debugger
  //     return this.props.getChannels(server) }));
  // }

  parseId(e){
    let parsed = e.currentTarget.id.split(",");
    return ({
      [`${parsed[0]}`]: parseInt(parsed[1]), // id: 2
      [`${parsed[2]}`]: parsed[3],  //channelTitle: "demoChan"
      [`${parsed[4]}`]: parseInt(parsed[5]), //serverId: 7
    })
  }

  channelClick(e){
    e.preventDefault();
    this.props.clearMessages();
    this.setState({selectedChannel: this.parseId(e)})
    let messageObject = {channelId: this.parseId(e).id};
    this.props.getMessages(messageObject);
    // debugger
    console.log(`channel switched to ${e.currentTarget.textContent}`)
    console.log(this.parseId(e));
  }
  

  generateChannels(){
    if(this.props.serverTitle !== ""){
      let channels = []
      Object.values(this.props.channels).forEach((channel, idx)=>{
        if(channel.serverId === this.props.serverId){
        channels.push(<li key={idx} id={Object.entries(channel)} onClick={(e) => this.channelClick(e)}>{channel.channelTitle}</li>)
        }
      })
      return channels;
    }
  };

  render(){

    const chatWindow = () => {
      return (<MessageWindow channelTitle={!this.state.selectedChannel ? "" : this.state.selectedChannel.channelTitle} channelId={!this.state.selectedChannel ? "" : this.state.selectedChannel.id} serverId={!this.state.selectedChannel ? "" : this.state.selectedChannel.serverId}/>)
    }
    
    const channelsTemplate = () => {
      return(
        <div className="homepage">
          <div className="channel-bar-container">
            <div className="channel-bar">
                {this.props.serverTitle}

              <div className="channel-list">
                {this.generateChannels()}
              </div>
            </div>
            <button id="test" className="btn-logout" onClick={this.props.logout}>Log Out</button>
          </div>
          {chatWindow()}
        </div>
      )
    }
    return channelsTemplate()
  }
}

export default ChannelBar;