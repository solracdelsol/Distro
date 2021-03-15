import React from "react";
import { Link } from "react-router-dom";
import { getServers } from "../../util/server";

import ChannelBar from "../channelbar/channelbar_container"

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
    this.props.getServers().then( (servers) => Object.values(servers.servers).forEach(server => { 
      // debugger
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

    this.setState({selectedServer: this.parseId(e)})
    this.props.clearAllSubscriptions();
    let subscribeObject = {serverId: this.parseId(e).id}
    this.props.getSubscriptions(subscribeObject)
    // debugger
    console.log(`server switched to ${e.currentTarget.textContent}`)
    console.log(this.parseId(e));
  }


  render(){
    // console.log(this.props.users.id)
    // debugger



    // Step 1 -> generates a DOM element for every server in your Redux state thanks to mapStateToProps, they all have buttons to serverClick
    const serverList = () =>{
      let servers = [];
      Object.values(this.props.servers).forEach((server, idx) => {
        return servers.push( <Link to={`/channels/${server.id}`} key={idx} id={Object.entries(server)} onClick={(e) => this.serverClick(e)}>{server.serverTitle}</Link> )
      })
      servers.push(<button onClick={() => this.props.openModal("Create Server")} key={"createServer"}>Create a Server</button>)
      return servers
    }

    const channelList = () => {
      return (<ChannelBar serverTitle={!this.state.selectedServer ? "" : this.state.selectedServer.serverTitle} serverId={!this.state.selectedServer ? "" : this.state.selectedServer.id} hostId={!this.state.selectedServer ? "" : this.state.selectedServer.hostId}/>)
    }

    const displayUser = () => {
      return (`Welcome ${Object.values(this.props.users.id)[0].username || Object.values(this.props.users)[0].username}`)
    }


    const serverTemplate = () => (
      <div className="homepage">
      <div className="server-bar-container">
        <div className="server-bar">
          <div className="server-list">{displayUser()}
            {serverList()}
          </div>
        </div>
      </div>
      {channelList()}
      </div>
    )
    return serverTemplate();
  }
}

export default ServerBar