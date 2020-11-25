import React from "react";
import { Link } from "react-router-dom";

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="messages-container">
        <div className="messages">
          THESE ARE THE MESSAGES
        </div>
      </div>
    );
  }
}

export default Messages;
