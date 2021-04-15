import React from "react";
import { ReactReduxContext } from "react-redux";
import { Link } from "react-router-dom";


class MessageWindow extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: {
        body: "",
        user_id: "",
        channel_id: "",
      }

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.pollMessages = this.pollMessages.bind(this);
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
        let hour = parseInt(clockUnit[0]) - (d.getTimezoneOffset() / 60)
        let min = clockUnit[1];
        // let sec = clockUnit[2]; // would be cumbersome to include seconds
        return ( d.toISOString().split("T")[0] === time.split("T")[0] ? timeFormat += ([(String(parseInt(hour)%12 === 0 ?
           "12" : String(parseInt(hour)%12))),min].join(":")) + (parseInt(hour) >= 12 ? "PM" : "AM") : "" );
      }
    })
    return timeFormat;
  }

  handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    // this.setState({messageInput: e.currentTarget.value});
    // console.log(e.currentTarget.value)
  }



  handleSubmit(e){
    e.stopPropagation();
    e.preventDefault();

    // let sURL = window.location.href.split("/")[5] ? parseInt(window.location.href.split("/")[5]) : null
    let chURL = window.location.href.split("/")[6] ? parseInt(window.location.href.split("/")[6]) : null

    if(document.getElementById("message-input").value !== ""){ // wont rerender the viewing screen if there isn't an input written

      // while (document.getElementById("current-user-message")){
      //   document.getElementById("current-user-message").remove()
      //   // document.getElementById("timestamp").remove()
      // }

      // while (document.getElementById("other-user-message")){
      //   document.getElementById("other-user-message").remove()
      //   // document.getElementById("timestamp").remove()
      // }

      // while(document.getElementById("chat-br")){
      //   document.getElementById("chat-br").remove();
      // }


      let message = document.getElementById("message-input").value
      let messageForm = { message:{ body: message , user_id: this.props.currentUser.id , channel_id: chURL } }
      // debugger
      // let getmessageObject = {channelId = this.props.channelId}
      this.props.createMessage(messageForm)

      // console.log(`message sent: ${message}`)


      return document.getElementById("message-input").value = ""
  }

  }
  
  
  pollMessages(){
    return setInterval(() => (this.props.getMessages({channelId: this.props.channelId})), 3000)
  }

  componentDidMount(){
    // return this.pollMessages()
    // let sURL = window.location.href.split("/")[5] ? parseInt(window.location.href.split("/")[5]) : null
    let chURL = window.location.href.split("/")[6] ? parseInt(window.location.href.split("/")[6]) : null
    this.props.getMessages({channelId: chURL})

    return App.test = App.cable.subscriptions.create(
      {  channel: "MessagesChannel", channel_id: chURL   },
      {conneected: console.log("Connection established!") },
      {  received: message => this.props.createMessage(message)  },
      { appear: ()=> this.perform("appear") },
      {  speak: function(message){return this.perform("speak", message)}  },
      )
  
    
  }

  componentWillUnmount(){
    // return clearInterval(this.pollMessages)
  }

  componentDidUpdate(prevProps){
    // if(this.props.messages !== prevProps.messages){

      // while (document.getElementById("current-user-message")){
      //   document.getElementById("current-user-message").remove()
      //   // document.getElementById("timestamp").remove()
      // }

      // while (document.getElementById("other-user-message")){
      //   document.getElementById("other-user-message").remove()
      //   // document.getElementById("timestamp").remove()
      // }

      // while(document.getElementById("chat-br")){
      //   document.getElementById("chat-br").remove();
      // }

      // Object.values(this.props.messages).reverse().forEach((message, idx) => {
      // let parent = document.getElementById("message-window-interface")

      // let messageNode = document.createElement("div")
      // let timeNode = document.createElement("div")
      // let time = document.createTextNode(`${message.userName} ${this.parseTime(message.timestamp)}`)
      // let text = document.createTextNode(message.body)
      

      // timeNode.appendChild(time)
      // timeNode.setAttribute("id", message.userId === this.props.currentUser.id ? "current-user-message" : "other-user-message")
      // messageNode.appendChild(text)
      // messageNode.setAttribute("id", message.userId === this.props.currentUser.id ? "current-user-message" : "other-user-message")

      // parent.appendChild(messageNode)
      // parent.appendChild(timeNode)
      
      // let br = document.createElement("br")
      // br.setAttribute("id", "chat-br")
      // return parent.appendChild(br)
         
      // })



    // }
  }

  render() {

    const formatMessages = () => { 
      let chURL = window.location.href.split("/")[6] ? parseInt(window.location.href.split("/")[6]) : null
      if(this.props.messages && chURL){
      return Object.values(this.props.messages).reverse().map((message, idx) => {
        // let parent = document.getElementById("message-window-interface")

        // let messageNode = document.createElement("div")
        // let timeNode = document.createElement("div")
        // let time = document.createTextNode(`${message.userName} ${this.parseTime(message.timestamp)}`)
        // let text = document.createTextNode(message.body)
        

        // timeNode.appendChild(time)
        // timeNode.setAttribute("id", message.userId === this.props.currentUser.id ? "current-user-message" : "other-user-message")
        // messageNode.appendChild(text)
        // messageNode.setAttribute("id", message.userId === this.props.currentUser.id ? "current-user-message" : "other-user-message")

        // parent.appendChild(messageNode)
        // parent.appendChild(timeNode)
        
        // let br = document.createElement("br")
        // br.setAttribute("id", "chat-br")
        // return parent.appendChild(br)
        // debugger

        
          return (
          <React.Fragment key={`message-package-${idx}`} >
            <div key={`message-header-${idx}`} id={message.userId === Object.values(currentUser)[0].id ? "current-user-message" : "other-user-message"}>{message.body}</div>
            <div key={`message-body-${idx}`} id={message.userId === Object.values(currentUser)[0].id ? "current-user-message" : "other-user-message"}>{`${message.userName}: ${this.parseTime(message.timestamp)}`}</div>
            <br key={`message-br-${idx}`} id="chat-br"></br >
          </React.Fragment>
          )
        
          // messageView.push(<pre key={`message-body-${idx}`} id={message.userId === Object.values(currentUser)[0].id ? "current-user-message" : "other-user-message"}>
          //   {`${message.userName}: ${this.parseTime(message.timestamp)}
          //   ${message.body}`}
          //   </pre>
      
        
      
        
    
                
      })
    }
    }

    return (
      
      <div className="messages-container">
          <div id="message-window-title">{this.props.channelTitle} </div>
          <div id="messages-and-form-container">
            <div id="messages">
              <div id="message-window-interface">
                {formatMessages()} 
              </div>
            </div>
            
        
            {this.props.channelTitle ? <form id="messageForm" >
            <input type="text" id="message-input" onChange={this.handleChange} autoComplete="off" placeholder={`Message #${this.props.channelTitle}`}/>
            <button id="message-send" onClick={this.handleSubmit}>Send</button>
            </form> : null}
        </div>
      </div>
    );
  }
}

export default MessageWindow;
