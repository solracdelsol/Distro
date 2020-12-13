import React from "react";
import { Link } from "react-router-dom";
import { getServers } from "../../util/server";

class ServerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    
  }

  //Upon mounting, call API to set up state
  componentDidMount(){ 
    // let serverObject = {"7":{"id":7,"serverTitle":"demo","hostId":8}}
    this.props.getServers().then( (servers) => Object.values(servers.servers).forEach(server => { 
      // debugger
      return this.props.getChannels(server) }));
  }

  render(){
    // // debugger
    const serverList = () =>{
      let servers = [];
      Object.values(this.props.servers).forEach(server => {
        return servers.push( <li>{server.serverTitle}</li> )
      })
      return servers
    }


    const serverTemplate = () => (
      <div className="server-bar-container">
        <div className="server-bar">
          <div className="server-list">These are the servers
            {serverList()}
          </div>
        </div>
      </div>
    )
    return serverTemplate();
  }
}

export default ServerBar