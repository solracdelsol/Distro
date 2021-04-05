import React from "react";
import { Link } from "react-router-dom";

class SubscriptionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedServer: null,
      members: [],
    }
  }



  
  render(){

    const generateSubs = () => {


      if(this.props.serverId !== ""){
        let subs = []
        Object.entries(this.props.subscriptions).forEach((sub)=>{

          if(sub[0] === this.props.serverId.toString()){

            sub[1].members.forEach((user, idx)=>{
       
          return subs.push( <li id="member" key={idx}>{user.info.userName}</li>)
        })
          }})
  
          return subs
      }
    };


    const subscriptionTemplate = () => (
    <div id="subscription-container">
      <h1 id="members-caption">Members</h1>
      <div id="member-list">
        {generateSubs()}
      </div>
    </div>
    )


    return subscriptionTemplate()

  }

}

export default SubscriptionBar