import React from "react";
import { Link } from "react-router-dom";

class MessageWindow extends React.Component {
  constructor(props) {
    super(props);

  }

  parseTime(time){
    //2020-12-19T01:44:17.835Z format of the time string
    let timeFormat = "";
    time.split("T").forEach((timeUnit, idx) => {
    let d = new Date
      if(idx === 0){ //if im parsing the date


        let dateParse = timeUnit.split("-"); //2020-12-19
        let day = dateParse[2];
        let month = dateParse[1];
        let year = dateParse[0];

        return( d.toISOString().split("T")[0] === [year,month,day].join("-") ? "Today at" : timeFormat += ([month,day,year].join("/") + " "));
      }
      else{ // im parsing the day-clock
        let clockParse = timeUnit.split("."); //01:44:17.835Z
        let clockUnit = clockParse[0].split(":");
        let hour = clockUnit[0];
        let min = clockUnit[1];
        // let sec = clockUnit[2]; // would be cumbersome to include seconds
        return ( d.toISOString().split("T")[0] === time.split("T")[0] ? timeFormat += ([(String(parseInt(hour)%12)),min].join(":")) + (parseInt(hour) >= 12 ? "PM" : "AM") : "" );
      }
    })
    return timeFormat;
  }

  render() {

    const formatMessages = () => { 
      Object.values(this.props.messages).forEach((message, idx) => {
        let parent = document.getElementById("message-window-interface")

        let messageNode = document.createElement("div")
        let timeNode = document.createElement("div")
        let time = document.createTextNode(this.parseTime(message.timestamp))
        let text = document.createTextNode(message.body)
        

        timeNode.appendChild(time)
        timeNode.setAttribute("id", "timestamp")
        messageNode.appendChild(text)
        messageNode.setAttribute("id", message.userId === this.props.currentUser.id ? "current-user-message" : "other-user-message")

        parent.appendChild(timeNode)
        parent.appendChild(messageNode)
        
        let br = document.createElement("br")
        return parent.appendChild(br)
         
      })
    }

    return (
      <div className="messages-container">
        <div id="messages">
          <div id="message-window-title">{this.props.channelTitle}</div>
           <div id="message-window-interface">
            {formatMessages()}
           </div>
          
          <button onClick={formatMessages}>Press me</button> {/*This will be the button to input chat*/}
          
          
          
        </div>
      </div>
    );
  }
}

export default MessageWindow;
