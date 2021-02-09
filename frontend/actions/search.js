import * as APIUtil from "../util/search"

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

const receiveSearch = (search) => ({
  type: RECEIVE_SEARCH,
  search
})

const clearSearch = () => ({
  type: CLEAR_SEARCH,
})

export const search = (searchObj) => (dispatch) => (
  APIUtil.searchServers(searchObj)
  .then((search)=>(dispatch(receiveSearch(search))))
)

//THINGS TO DO: BUILD OUT SEARCH AND SUBSCRIPTIONS AS SEPARATE FEATURES. MAKE SURE TO GO BACK TO CREATE A SEARCH CONTROLLER