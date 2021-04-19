import React from "react";
import { ReactReduxContext } from "react-redux";
import { Link } from "react-router-dom";


class MessageWindow extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.pollMessages = this.pollMessages.bind(this);
  }


  parseTime(time){


    let d = new Date(time).toLocaleDateString()
    let t = new Date(time).toLocaleTimeString()
    let today = new Date();
    let date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();  //2019-10-21

    return date === d ? t : d

  }

  handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    // this.setState({messageInput: e.currentTarget.value});
    // console.log(e.currentTarget.value)
  }



  handleSubmit(e){
    // e.stopPropagation();
    e.preventDefault();

    // // let sURL = window.location.href.split("/")[5] ? parseInt(window.location.href.split("/")[5]) : null
    let chURL = window.location.href.split("/")[6]

    if(document.getElementById("message-input").value !== ""){ // wont rerender the viewing screen if there isn't an input written

        let message = document.getElementById("message-input").value
        let messageForm = { message:{ body: message , user_id: this.props.currentUser.id , channel_id: chURL } }

        App.cable.subscriptions.subscriptions[0].speak(messageForm)


      return document.getElementById("message-input").value = ""
    }
     
  };
  
  
  
  // pollMessages(){
  //   return setInterval(() => (this.props.getMessages({channelId: this.props.channelId})), 3000)
  // }

  componentDidMount(prevProps, prevState){
    // return this.pollMessages()
    // let sURL = window.location.href.split("/")[5] ? parseInt(window.location.href.split("/")[5]) : null
    let chURL = window.location.href.split("/")[6] ? parseInt(window.location.href.split("/")[6]) : null
    this.props.getMessages({channelId: chURL})

    let webSocket = App.cable.subscriptions.create(
      {  channel: "MessagesChannel", room: `${chURL}` }  ,
      { connected: ()=>console.log("Connection established!", webSocket),
        disconnected: () => console.log("You are now Disconnected!"),
        received: (data) =>  this.props.getMessages({channelId: data}) ,
        speak: (messageObj) =>  webSocket.perform("speak", messageObj),
      } 

    
    )
  
    
  }

  componentWillUnmount(){
  }

  componentDidUpdate(prevProps){
    if ((prevProps.match.params.channel_id !== this.props.match.params.channel_id) && (prevProps.messages !== this.props.messages) ) {
      let chURL = window.location.href.split("/")[6] ? parseInt(window.location.href.split("/")[6]) : null
          this.props.getMessages({channelId:chURL});
      let webSocket = App.cable.subscriptions.create(
      {  channel: "MessagesChannel", room: `${chURL}` }  ,
      { connected: console.log("Connection established!", App.cable.subscriptions),
        disconnected: () => console.log("You are now Disconnected!"),
        received: (data) =>  this.props.getMessages({channelId: data}),
        speak: (messageObj)  => webSocket.perform("speak", messageObj),
      })
          App.cable.subscriptions.subscriptions[0].unsubscribe();
      } else if (App.cable.subscriptions.subscriptions.length === 2) {
          App.cable.subscriptions.subscriptions[0].unsubscribe();
        }
  }


    
  

  render(){

    const formatMessages = () => { 
      let chURL = window.location.href.split("/")[6] ? parseInt(window.location.href.split("/")[6]) : null
      if(this.props.messages && chURL){
      return Object.values(this.props.messages).reverse().map((message, idx) => {
        
          return (
          <React.Fragment key={`message-package-${idx}`} >
            <div key={`message-body-${idx}`} className={"message-body"} id={message.userId === Object.values(this.props.currentUser)[0].id ? "current-user-message" : "other-user-message"}>{message.body}</div>
            <div id={message.userId === Object.values(this.props.currentUser)[0].id ? "current-user-message" : "other-user-message"} style={{display:  "flex", flexDirection: "row"}}>
              <div key={`message-username-${idx}`} className={"message-username"}  id={message.userId === Object.values(this.props.currentUser)[0].id ? "current-user-message" : "other-user-message"}>{`${message.userName}`}</div>
              <div key={`message-time-${idx}`} className={"message-time"} id={message.userId === Object.values(this.props.currentUser)[0].id ? "current-user-message" : "other-user-message"}>{`${this.parseTime(message.timestamp)}`}</div>
            </div>
            <br key={`message-br-${idx}`} id="chat-br"></br >
          </React.Fragment>
          )
   
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
            
        
            {this.props.channelTitle ? 
            <form id="messageForm" >
            <input type="text" id="message-input" onChange={this.handleChange} autoComplete="off" placeholder={`Message #${this.props.channelTitle}`}/>
            <button id="message-send" onClick={this.handleSubmit}>Send</button>
            </form> 
            : null}
        </div>
      </div>
    );
  }
}

export default MessageWindow;
