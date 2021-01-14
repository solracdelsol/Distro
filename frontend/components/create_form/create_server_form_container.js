import { connect } from "react-redux";
import React from "react";
import {createServer} from "../../actions/server"
import { openModal, closeModal } from "../../actions/modal";
import CreateForm from "./create_form";

const msp = (state) => ({ 
  formType: "Create Server",
});

const mdp = (dispatch) => ({
  processForm: (serverForm) => dispatch(createServer(serverForm)), // make sure to dispatch createServer here EDIT THIS
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(msp, mdp)(CreateForm);