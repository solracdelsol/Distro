import React from "react";
import { Link } from "react-router-dom";

class SubscriptionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedServer: null
    }
  }

  componentDidUpdate(prevProps){
    if(this.props.serverId !== prevProps.serverId){
      debugger
      return this.setState({selectedServer: this.props.serverId})
    }
  }

  
  render(){
    const listSubscriptions = () => (
      Object.values(this.props.subscriptions.members).map((sub)=>{
        return <li>{sub.userName}</li>
      })
    )

    const subscriptionTemplate = () => (
      this.props.subscriptions ? 

      <div>
        <h1>Members</h1>
        {listSubscriptions()}
      </div>

      :

      <h1>Members not Found</h1>
    )


    return subscriptionTemplate()

  }

}

export default SubscriptionBar