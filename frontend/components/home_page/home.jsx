import React from "react";
import { Link } from "react-router-dom";
import ServerBar from "../serverbar/serverbar_container"
import ChannelBar from "../channelbar/channelbar_container"
import MessageWindow from "../messages/messages_container"

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const homePageTemplate = () => (
      <div className="homepage-container">
        <div className="homepage">
        <ServerBar/>
        {/* <ChannelBar/> */}
        {/* <MessageWindow/> */}
        </div>
      </div>
    );


    return homePageTemplate();
  }
}

export default HomePage;
