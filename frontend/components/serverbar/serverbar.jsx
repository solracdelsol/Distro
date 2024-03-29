import React from "react";
import { Link } from "react-router-dom";

import ChannelBar from "../channelbar/channelbar_container"
import SubscriptionBar from "../subscriptionbar/subscriptionbar_container";

class ServerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedServer: null,
    }

    this.serverClick = this.serverClick.bind(this);
    this.parseId = this.parseId.bind(this);
  }

  //Upon mounting, call API to set up state
  componentDidMount(){ 
    // let serverObject = {"7":{"id":7,"serverTitle":"demo","hostId":8}}
    // debugger
    this.props.getServers().then( (servers) => Object.values(servers.servers).forEach(server => { 
      // debugger
      this.props.getSubscriptions({serverId: server.id})
      return this.props.getChannels(server) }));
  }

  //step 3 -> upon clicking, parses the id={} of the server list element to recreate the server Object and set it as the "selected" key of the component's constructor state
  parseId(e){
    let parsed = e.currentTarget.id.split(",");
    return ({
      [`${parsed[0]}`]: parseInt(parsed[1]), // id: 7
      [`${parsed[2]}`]: parsed[3],  //serverTitle: "demo"
      [`${parsed[4]}`]: parseInt(parsed[5]), //hostId: 8
    })
  }

  //Step 2 -> setState is important to trigger a re-render of components
  serverClick(e){
    // e.preventDefault();

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

    // this.setState({selectedServer: this.parseId(e)})
    this.props.clearAllSubscriptions();
    // let sURL = window.location.href.split("/")[5] ? parseInt(window.location.href.split("/")[5]) : null
    let subscribeObject = {serverId: this.parseId(e).id}
    this.props.getSubscriptions(subscribeObject)
    // debugger
    // console.log(`server switched to ${e.currentTarget.textContent}`)
    // console.log(this.parseId(e));
  }


  render(){
    // console.log(this.props.users.id)
    // debugger

    //exact path for reference purposes='http://${window.location.hostname}/channels/:server_id/:channel_id'
    const last = window.location.href.substr(window.location.href.lastIndexOf('/') + 1) //this is channel_id
    const secondLast = window.location.href.substr(window.location.href.lastIndexOf('/', window.location.href.lastIndexOf('/', window.location.href.lastIndexOf('/') - 1)) + 1).split('/')[0]
    // const sURL = parseInt(secondLast) //sURL
    // const chURL = parseInt(last) //chURL
    // console.log(window.location.href.split("/"))

    let sURL = window.location.href.split("/")[5] ? parseInt(window.location.href.split("/")[5]) : null
    let chURL = window.location.href.split("/")[6] ? parseInt(window.location.href.split("/")[6]) : null
    // console.log(sURL,chURL)
    // debugger
    const final = Number.isInteger(chURL) && Number.isInteger(sURL) ? last : Number.isInteger(chURL) || Number.isInteger(sURL) ? "" : ""



    // Step 1 -> generates a DOM element for every server in your Redux state thanks to mapStateToProps, they all have buttons to serverClick
    const serverList = () =>{
      let servers = [];
      Object.values(this.props.servers).forEach((server, idx) => {
        return servers.push( <Link to={`/channels/${server.id}`} className="server-name" key={idx} id={Object.entries(server)} onClick={(e) => this.serverClick(e)}>{server.serverTitle}</Link> )
      })
      servers.push(<div id="create-server-button" title="Create a new Server" onClick={() => this.props.openModal("Create Server")} key={"createServer"}></div>)
      return servers
    }

    const channelList = () => {

      return (<ChannelBar 
              serverTitle={this.props.servers[`${sURL}`] ? this.props.servers[`${sURL}`].serverTitle : ""} 
              serverId={this.props.servers[`${sURL}`] ? sURL : ""} 
              hostId={this.props.servers[`${sURL}`] ? this.props.servers[`${sURL}`].hostId : "" }
              />)

    }

    // debugger
    const subscriptionList = () => {
    
      return (<SubscriptionBar 
              serverId={sURL} 
              hostId={this.props.servers[`${sURL}`] ? this.props.servers[`${sURL}`].hostId : "" } 
              />)
    }

    const displayUser = () => {
      return ( <h1 id="welcome-user-caption">{Object.values(this.props.users.id)[0].username || Object.values(this.props.users)[0].username}</h1>)
    }

    const serverTemplate = () => (
      <div className="homepage-layout">
      <div className="server-bar-container">
        <div className="server-bar">
          <div className="server-list">{displayUser()}
            {serverList()}
          </div>
        </div>
      </div>
      {channelList()}
      {subscriptionList()}
      </div>
    )
    return serverTemplate();
  }
}

export default ServerBar