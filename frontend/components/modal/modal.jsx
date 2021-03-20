import React from 'react';
import { closeModal } from "../../actions/modal"
import { connect } from 'react-redux';
import CreateServerFormContainer from '../create_form/create_server_form_container'
import CreateChannelFormContainer from '../create_form/create_channel_form_container'
import InviteFormContainer from "../forms/invite_form"
// import './modal.css'; DONT DO THIS, PLACE THEM IN RAILS STYLESHEETS OR ELSE IT WONT GET PARSED



// Modal presentational and container component on same page
function Modal({modal, closeModal}){
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
    default:
      return null;
  }

  return (
    
    <div className="modal-background" onClick={closeModal}>
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
});

export default connect(msp, mdp)(Modal);