import * as APIUtil from "../util/subscription"

export const RECEIVE_SUB = "RECEIVE_SUB";
export const RECEIVE_SUBS = "RECEIVE_SUBS";
export const CLEAR_SUB = "CLEAR_SUB";
export const CLEAR_SUBS = "CLEAR_SUBS";

const receiveSubscription = (subscription) => ({
  type: RECEIVE_SUB,
  subscription
})

const receiveSubscriptions = (subscriptions) => ({
  type: RECEIVE_SUBS,
  subscriptions
})

const clearSubscription = (subscription) => ({
  type: CLEAR_SUB,
  subscription
})

const clearAllSubscriptions = () => ({
  type: CLEAR_SUBS
})

export const createSubscription = (subscribeObj) => (dispatch) => (
  APIUtil.createSubscription(subscribeObj)
  .then((subscription)=>(dispatch(receiveSubscription(subscription))))
)

// export const queryServers = (serverTitleQuery) => (dispatch) => (
//   APIUtil.queryServers(serverTitleQuery).then((queryResults)=>(dispatch())

//THINGS TO DO: BUILD OUT SEARCH AND SUBSCRIPTIONS AS SEPARATE FEATURES
