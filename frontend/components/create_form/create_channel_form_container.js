import { connect } from "react-redux";
import { createChannel , clearChannelErrors} from "../../actions/channel"
import { openModal, closeModal } from "../../actions/modal";
import CreateForm from "./create_form";

const msp = (state) => ({ 
  formType: "Create Channel",
  errors: state.errors.channel,
});

const mdp = (dispatch) => ({
  processForm: (channelForm) => dispatch(createChannel(channelForm)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal)),
  clearFormErrors: () => dispatch(clearChannelErrors(),)
});

export default connect(msp, mdp)(CreateForm);