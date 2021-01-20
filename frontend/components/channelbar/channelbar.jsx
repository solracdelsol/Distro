
import React from "react";
import { Link, withRouter } from "react-router-dom";
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
      // currentChannel: null,
    }
    // this.generateChannels = this.generateChannels.bind(this)
    this.channelClick = this.channelClick.bind(this)
    this.parseId = this.parseId.bind(this)
  }

  componentDidUpdate(prevProps,prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props.serverId !== prevProps.serverId ) {
      let serverObj = {id: this.props.serverId} //
      this.props.getChannels(serverObj);  // THESE TWO LINES ARE IMPORTANT TO RERENDER AFTER SERVER CREATION
      (this.setState({selectedChannel: null}))
      this.props.clearMessages();
      while (document.getElementById("current-user-message")){
        document.getElementById("current-user-message").remove()
        // document.getElementById("timestamp").remove()
      }
      while (document.getElementById("other-user-message")){
        document.getElementById("other-user-message").remove()
        // document.getElementsById("timestamp").remove()
      }

      while(document.getElementById("chat-br")){
        document.getElementById("chat-br").remove();
      }
    }
  }

  componentDidMount(){
    debugger
    let serverObj = {id: this.props.serverId}
    this.props.getChannels(serverObj);
  }

  parseId(e){
    let parsed = e.currentTarget.id.split(",");
    return ({
      [`${parsed[0]}`]: parseInt(parsed[1]), // id: 2
      [`${parsed[2]}`]: parsed[3],  //channelTitle: "demoChan"
      [`${parsed[4]}`]: parseInt(parsed[5]), //serverId: 7
    })
  }


  channelClick(e){
    // e.preventDefault();
    let nextChannel = this.parseId(e);
    if(!this.state.selectedChannel || this.state.selectedChannel !== nextChannel){ // When do i want it to trigger? when !selectedChannel or when the next channel will be different
      this.props.clearMessages(); //clear state but also clear your message window, figure it out
      while (document.getElementById("current-user-message")){
        document.getElementById("current-user-message").remove()
        // document.getElementById("timestamp").remove()
      }

      while (document.getElementById("other-user-message")){
        document.getElementById("other-user-message").remove()
        // document.getElementsById("timestamp").remove()
      }

      while(document.getElementById("chat-br")){
        document.getElementById("chat-br").remove();
      }

      // debugger
      this.setState({selectedChannel: this.parseId(e)})
      let messageObject = {channelId: this.parseId(e).id};
      this.props.getMessages(messageObject);
      // debugger
      console.log(`channel switched to ${e.currentTarget.textContent}`)
      console.log(this.parseId(e));

    }
  }
  
  
  render(){
    
    const generateChannels = () => {
      if(this.props.serverTitle !== ""){
        let channels = []
        Object.values(this.props.channels).forEach((channel, idx)=>{
          if(channel.serverId === this.props.serverId){
          channels.push(<Link to={`/channels/${channel.serverId}/${channel.id}`} key={idx} id={Object.entries(channel)} onClick={(e) => this.channelClick(e)}>{channel.channelTitle}</Link>)
          }
        })
        channels.push(<button onClick={() => this.props.openModal("Create Channel")} key={"createChannel"}>Create a Channel</button>)
        return channels;
      }
    };


    const chatWindow = () => {
      return (<MessageWindow channelTitle={!this.state.selectedChannel ? "" : this.state.selectedChannel.channelTitle} channelId={!this.state.selectedChannel ? "" : this.state.selectedChannel.id} serverId={!this.state.selectedChannel ? "" : this.state.selectedChannel.serverId}/>)
    }
    
    const channelsTemplate = () => {
      return(
        <div className="homepage">
          <div className="channel-bar-container">
            <div className="channel-bar">
                {this.props.serverTitle}

              <div id="channel-list" className="channel-list">
                {generateChannels()}
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

export default ChannelBar //withRouter(ChannelBar);