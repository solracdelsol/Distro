import { connect } from "react-redux";
import {getSubscriptions, createSubscription} from "../../actions/subscription";
import SubscriptionBar from "./subscriptionbar.jsx";


const msp = (state) => ({
subscriptions: state.entities.subscriptions,

});

const mdp = (dispatch) => ({
getSubscriptions: (subscriptionObj) => dispatch(getSubscriptions(subscriptionObj)),
createSubscription: (subscriptionObject) => dispatch(createSubscription(subscriptionObject)),


});

export default connect(msp, mdp)(SubscriptionBar)
