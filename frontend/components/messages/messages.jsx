import React from "react";
import { Link } from "react-router-dom";

class MessageWindow extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const formatMessages = () => { // THIS IS A GOOD START, BUT LETS JUST USE REACT COMPONENTS INSTEAD
      Object.values(this.props.messages).forEach((message, idx) => {
        let parent = document.getElementById("message-window-title")
        console.log(parent);
        let node = document.createElement("p")
        let textnode = document.createTextNode(message.body)
        node.appendChild(textnode)

      return(parent.appendChild(node))
      })
    }

    return (
      <div className="messages-container">
        <div id="messages">
          <div id="message-window-title">{this.props.channelTitle}</div>
          <button onClick={formatMessages}>Press me</button>
          
          
          
        </div>
      </div>
    );
  }
}

export default MessageWindow;
