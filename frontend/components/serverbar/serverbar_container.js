import { connect } from "react-redux";

import ServerBar from "./serverbar.jsx";

// will also need to import the utils for the server fetches

const msp = (state) => ({
//state for serverbar will be housing icons that lead to these servers, as well as your home server
});

const mdp = (dispatch) => ({
// dispatches to generate channels for that server
});
export default connect(msp, mdp)(ServerBar);

// this component will render in the home.jsx file
