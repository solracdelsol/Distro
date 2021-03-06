import { connect } from "react-redux";
import {createMessage, getMessage, getMessages, clearMessages} from "../../actions/message"
import MessageWindow from "./messages.jsx";

// will also need to import the utils for the server fetches

const msp = (state) => ({
  //state for chat will be housing icons that lead to user profiles
  messages: state.entities.messages,
  currentUser: state.entities.users.id
});

const mdp = (dispatch) => ({
  createMessage: (messageForm) => dispatch(createMessage(messageForm)),
  getMessage: (messageObj) => dispatch(getMessage(messageObj)),
  getMessages: (messageObj) => dispatch(getMessages(messageObj)),
  clearMessages: () => dispatch(clearMessages()),
});
export default connect(msp, mdp)(MessageWindow);

// this component will render in the home.jsx file
