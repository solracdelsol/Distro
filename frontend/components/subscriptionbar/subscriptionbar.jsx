import React from "react";
import { Link } from "react-router-dom";

class SubscriptionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedServer: null
    }
  }

  
  render(){

    const generateSubs = () => {
      if(this.props.serverId !== ""){
        let subs = []
        Object.entries(this.props.subscriptions).forEach((sub)=>{
          // debugger
          if(sub[0] === this.props.serverId.toString()){
            // debugger
            sub[1].members.forEach((user, idx)=>{
              debugger
          return subs.push( <li key={idx}>{user.info.userName}</li>)
        })
          }})
          // debugger
          return subs
      }
    };


    const subscriptionTemplate = () => (
    <div id="subscription-container">
      <h1 id="members-caption">Members</h1>
      {generateSubs()}
    </div>
    )


    return subscriptionTemplate()

  }

}

export default SubscriptionBar