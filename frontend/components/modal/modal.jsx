import React from 'react';
import { closeModal } from "../../actions/modal"
import {clearChannelErrors} from "../../actions/channel";
import {clearServerErrors} from "../../actions/server"
import { connect } from 'react-redux';
import CreateServerFormContainer from '../create_form/create_server_form_container'
import CreateChannelFormContainer from '../create_form/create_channel_form_container'
import InviteFormContainer from "../forms/invite_form.jsx"


// import './modal.css'; DONT DO THIS, PLACE THEM IN RAILS STYLESHEETS OR ELSE IT WONT GET PARSED



// Modal presentational and container component on same page
function Modal({modal, closeModal, clearChannelErrors, clearServerErrors}){
  if(!modal){
    return null;
  }

  let component;
  switch(modal) {
    case 'Create Server':
      component = <CreateServerFormContainer/>;
      break;
    case 'Create Channel':
      component = <CreateChannelFormContainer/>;
      break;
    case 'Invite':
      component = <InviteFormContainer/>;
      break;
    default:
      return null;
  }

  const handleBlur = () => {
    let clearErrors;
    switch(modal) {
      case "Create Server":
        clearErrors = clearServerErrors
        break;
      case "Create Channel":
        clearErrors = clearChannelErrors
        break;
      default:
        return null;
    }

    clearErrors();
    return closeModal()
  }

  return (
    
    <div className="modal-background" onClick={handleBlur}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}


// mapping container to props to use above
const msp = state => ({
  modal: state.ui.modal
})

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  clearServerErrors: () => dispatch(clearServerErrors()),
  clearChannelErrors: () => dispatch(clearChannelErrors()),
});

export default connect(msp, mdp)(Modal);