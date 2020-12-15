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

  //upon clicking
  parseId(e){
    let parsed = e.currentTarget.id.split(",");
    return ({
      [`${parsed[0]}`]: parseInt(parsed[1]), // id: 7
      [`${parsed[2]}`]: parsed[3],  //serverTitle: "demo"
      [`${parsed[4]}`]: parseInt(parsed[5]), //hostId: 8
    })
  }

  handleClick(e){
    e.preventDefault();
    this.setState({selectedServer: this.parseId(e)})
    debugger
    console.log(`server switched to ${e.currentTarget.textContent}`)
    console.log(this.parseId(e));
  }


  render(){
    // // debugger
    const serverList = () =>{
      let servers = [];
      Object.values(this.props.servers).forEach((server, idx) => {
        return servers.push( <li key={idx} id={Object.entries(server)} onClick={(e) => this.handleClick(e)}>{server.serverTitle}</li> )
      })
      return servers
    }

    const channelList = () => {
      if(this.state.selectedServer){
      return (<ChannelBar serverTitle={this.state.selectedServer.serverTitle} id={this.state.selectedServer.id} hostId={this.state.selectedServer.hostId}/>)
      }
    }


    const serverTemplate = () => (
      <div className="server-bar-container">
        <div className="server-bar">
          <div className="server-list">These are the servers
            {serverList()}
            {channelList()}
          </div>
        </div>
      </div>
    )
    return serverTemplate();
  }
}

export default ServerBar