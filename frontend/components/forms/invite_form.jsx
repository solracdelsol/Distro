import React from "react"
import { connect } from "react-redux"
import {searchUsers, searchServers, clearSearch} from "../../actions/search"
import {openModal, closeModal} from "../../actions/modal"
import {createSubscription} from "../../actions/subscription"
// import { withRouter } from "react-router-dom";

//component piece
class InviteForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchInput: "",
      results: [],
    };

    this.userSearch = this.userSearch.bind(this)
    this.generateSearchList = this.generateSearchList.bind(this)
    this.invite = this.invite.bind(this)
  }

  userSearch(e){
    e.preventDefault()
    let userQuery = document.getElementById("search-input")
    return this.props.searchUsers(userQuery.value)
  }
  
  // componentDidUpdate(prevProps){
  //   if(this.props.search !== prevProps.search){
  //     return this.setState({results: Object.values(this.props.search).map((user)=> {return results.push(<li>{user.username}</li>)})})
  //   }

  // }

  // componentDidMount(){
  //   return this.setState({results: Object.values(this.props.search).map((user)=> {return(<li>{user.username}</li>)})})

  // }


  renderSearchList(){
    // debugger
    if(this.state.results && this.state.searchInput.length > 0){ // searchInput conditiional necessary to avoid bad search results when left blank after storing frontend searches
      return this.state.results.map((username)=>{return <li onClick={()=> document.getElementById("search-input").value = username}>{username}</li>})
    }
  }

  generateSearchList(){
    // this.props.clearSearch()

    let currentSearch = document.getElementById("search-input")

    const refreshSearchVariable = () => {
      currentSearch = document.getElementById("search-input")
      return(this.props.searchUsers(currentSearch.value)).then((searchResults) => { 
        return this.setState({results: Object.values(searchResults.search).map(  (user)=> {return user.username} ) } ) })
    }
    
    // console.log(currentSearch.value) // THING TO DO -> MAKE SURE THIS.STATE.RESULT ARRAY ELEMENTS MATCH THE SEARCHINPUT BEFORE RENDERING AN HTML TAG
    return refreshSearchVariable()
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  invite(e){
    e.preventDefault()
    let currentSearch = document.getElementById("search-input").value
    return this.props.searchUsers(currentSearch).then((searchResult)=> {
    let subscribeObject = {subscription: { user_id: Object.values(searchResult.search).filter(search => search.username === currentSearch)[0].id.toString() , server_id: window.location.href.split("/")[location.href.split("/").length -  1]}  }

    this.props.createSubscription(subscribeObject)
  }).then(() => { this.props.closeModal() })
    
  }
  
  render(){


    const inviteFormTemplate = (
      <div className="create-form-container">
        <div onClick={this.props.closeModal} className="close=x"> X </div>
        <div className="create-form-subcaption">{this.props.formType}</div>
        <form onSubmit={this.invite}>
          <input placeholder="Search a username" autoComplete="off" onChange={this.update("searchInput")} onKeyUp={this.generateSearchList} id="search-input" type="text" />
          <div>
            <h5>Search Results</h5>
            {this.renderSearchList()}
          </div>
          <input className="create-final" type="submit" onClick={this.invite} value={this.props.formType}/>
        </form>
      </div>
    )


    return inviteFormTemplate

  }

}



//container piece
const msp = (state) => ({
  formType: "Invite",
  search: state.entities.search
})

const mdp = (dispatch) => ({
  searchUsers: (userQuery) => dispatch(searchUsers(userQuery)),
  clearSearch: () => dispatch(clearSearch()),

  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal)),

  createSubscription: (subscribeObject) => dispatch(createSubscription(subscribeObject))
})

export default (connect(msp,mdp)(InviteForm))