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

    this.handleClick = this.handleClick.bind(this);
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
  handleClick(e){
    e.preventDefault();
    this.setState({selectedServer: this.parseId(e)})
    // debugger
    console.log(`server switched to ${e.currentTarget.textContent}`)
    console.log(this.parseId(e));
  }


  render(){
    // Step 1 -> generates a DOM element for every server in your Redux state thanks to mapStateToProps, they all have buttons to handleClick
    const serverList = () =>{
      let servers = [];
      Object.values(this.props.servers).forEach((server, idx) => {
        return servers.push( <li key={idx} id={Object.entries(server)} onClick={(e) => this.handleClick(e)}>{server.serverTitle}</li> )
      })
      return servers
    }

    const channelList = () => {
      // if(this.state.selectedServer){
      return (<ChannelBar serverTitle={!this.state.selectedServer ? "" : this.state.selectedServer.serverTitle} serverId={!this.state.selectedServer ? "" : this.state.selectedServer.id} hostId={!this.state.selectedServer ? "" : this.state.selectedServer.hostId}/>)
      // }
    }


    const serverTemplate = () => (
      <div className="homepage">
      <div className="server-bar-container">
        <div className="server-bar">
          <div className="server-list">These are the servers
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