import { connect } from "react-redux";
import Messages from "./messages.jsx";

// will also need to import the utils for the server fetches

const msp = (state) => ({
  //state for chat will be housing icons that lead to user profiles
});

const mdp = (dispatch) => ({
  // dispatches to send/retrieve text for chat messaging???
});
export default connect(msp, mdp)(Messages);

// this component will render in the home.jsx file
