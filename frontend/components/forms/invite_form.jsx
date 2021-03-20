import React from "react"
import { connect } from "react-redux"
import {} from "react-router-dom"

class InviteForm extends React.Component{
  constructor(props){

  }


  render(){
    const inviteFormTemplate = () => (
      <form action=""></form>
    )

    return inviteFormTemplate()
  }

}


const msp = (state) => ({

})

const mdp = (dispatch) => ({

})

export default connect(msp,mdp)(InviteForm)