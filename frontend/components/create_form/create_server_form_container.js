import { connect } from "react-redux";
import React from "react";
import {createServer, clearServerErrors} from "../../actions/server"
import { openModal, closeModal } from "../../actions/modal";
import CreateForm from "./create_form";

const msp = (state) => ({ 
  formType: "Create Server",
  processId: state.session.id,
  errors: state.errors.server,
});

const mdp = (dispatch) => ({
  processForm: (serverForm) => dispatch(createServer(serverForm)), // make sure to dispatch createServer here EDIT THIS
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal)),
  clearFormErrors: () => dispatch(clearServerErrors()),
});

export default connect(msp, mdp)(CreateForm);