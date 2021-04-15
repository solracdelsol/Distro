
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { getChannels } from "../../util/channel";
import { getServers } from "../../util/server";
import ServerBar from "../serverbar/serverbar_container";
import MessageWindow from "../messages/messages_container";
import SubscriptionBar from "../subscriptionbar/subscriptionbar_container"



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
  //   if (this.props.serverId !== prevProps.serverId ) {
  //     let serverObj = {id: this.props.serverId} //
  //     this.props.getChannels(serverObj);  // THESE TWO LINES ARE IMPORTANT TO RERENDER AFTER SERVER CREATION

  //     // (this.setState({selectedChannel: null}))
  //     // this.props.clearMessages();
  //     while (document.getElementById("current-user-message")){
  //       document.getElementById("current-user-message").remove()
  //       // document.getElementById("timestamp").remove()
  //     }
  //     while (document.getElementById("other-user-message")){
  //       document.getElementById("other-user-message").remove()
  //       // document.getElementsById("timestamp").remove()
  //     }

  //     while(document.getElementById("chat-br")){
  //       document.getElementById("chat-br").remove();
  //     }
  //   }
  }

  componentDidMount(){  // TODO -> WHEN COMPONENT MOUNTS, SET IT TO RENDER VIA URL INFORMATION URL stuff || threaded props
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

    // let nextChannel = this.parseId(e);
    // if(!this.state.selectedChannel || this.state.selectedChannel !== nextChannel){ // When do i want it to trigger? when !selectedChannel or when the next channel will be different
    
    let chURL = window.location.href.split("/")[6] ? parseInt(window.location.href.split("/")[6]) : null
    if(chURL !== this.parseId(e).id){
    this.props.clearMessages(); //clear state but also clear your message window, figure it out
    }
    // while (document.getElementById("current-user-message")){
    //   document.getElementById("current-user-message").remove()
    //   // document.getElementById("timestamp").remove()
    // }

    // while (document.getElementById("other-user-message")){
    //   document.getElementById("other-user-message").remove()
    //   // document.getElementsById("timestamp").remove()
    // }

    // while(document.getElementById("chat-br")){
    //   document.getElementById("chat-br").remove();
    // }

    // debugger
    // this.setState({selectedChannel: this.parseId(e)})
    let messageObject = {channelId: this.parseId(e).id};
    this.props.getMessages(messageObject);
    
    // debugger
    // console.log(`channel switched to ${e.currentTarget.textContent}`)
    // console.log(this.parseId(e));

    // }
  }
  
  
  render(){
    
    const generateChannels = () => {
      if(this.props.serverTitle !== ""){
        let channels = []
        // channels.push(<button key="create-channel-btn" onClick={() => this.props.openModal("Create Channel")}>Create a Channel</button>)
        // channels.push(<button key="invite-btn" onClick={()=> this.props.openModal("Invite")} >Invite</button>)
        Object.values(this.props.channels).forEach((channel, idx)=>{
          if(channel.serverId === this.props.serverId){
          channels.push(<Link to={`/channels/${channel.serverId}/${channel.id}`} key={idx} className="channel-name" id={Object.entries(channel)} onClick={(e) => this.channelClick(e)}>{channel.channelTitle}</Link>)
          }
        })
        return channels;
      }
    };

    let sURL = window.location.href.split("/")[5] ? parseInt(window.location.href.split("/")[5]) : null
    let chURL = window.location.href.split("/")[6] ? parseInt(window.location.href.split("/")[6]) : null


    const chatWindow = () => {
      return (<MessageWindow channelTitle={this.props.channels[`${chURL}`] ? this.props.channels[`${chURL}`].channelTitle : ""} channelId={this.props.channels[`${chURL}`] ? chURL : "" } serverId={this.props.servers[`${sURL}`] ? sURL : "" }/>)
    }

    const channelButtons = () => {
      let buttons = []
      if(this.props.serverId){   
        buttons.push(<button key={"create-ch"} id="create-channel-btn" onClick={() => this.props.openModal("Create Channel")}>Create a Channel</button>,
                    <button key={"invite"} id="invite-btn" onClick={()=> this.props.openModal("Invite")} >Invite</button>)  
      }
      return buttons

  
    }

    
    const channelsTemplate = () => {
      return(
        <div className="homepage">
          <div className="channel-bar-container">
            <div className="channel-bar">
                <h1 id="server-title-caption">{this.props.serverTitle}</h1>
                {channelButtons()}
                {/* <button id="create-channel-btn" onClick={() => this.props.openModal("Create Channel")}>Create a Channel</button>
                <button id="invite-btn" onClick={()=> this.props.openModal("Invite")} >Invite</button> */}

              <div id="channel-list" className="channel-list">
                {generateChannels()}
              </div>
            </div>
            {/* <button id="test" className="btn-logout" onClick={this.props.logout}>Log Out</button> */}
            {/* <button>Invite</button>
            <button onClick={() => this.props.openModal("Create Channel")} key={"createChannel"}>Create a Channel</button> */}
           <i className="fa fa-gear fa-3x" title="Log Out" onClick={this.props.logout}></i>
          </div>
          {chatWindow()}
        </div>
      )
    }

    return channelsTemplate()
  }
}

export default ChannelBar //withRouter(ChannelBar);