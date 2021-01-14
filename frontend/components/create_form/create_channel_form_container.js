import { connect } from "react-redux";
import React from "react";
import { createChannel } from "../../actions/channel"
import { openModal, closeModal } from "../../actions/modal";
import CreateForm from "./create_form";

const msp = (state) => ({ 
  formType: "Create Channel",
});

const mdp = (dispatch) => ({
  processForm: (channelForm) => dispatch(createChannel(channelForm)), // make sure to dispatch createChannel here EDIT THIS
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(msp, mdp)(CreateForm);