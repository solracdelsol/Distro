import React from "react";
import { withRouter } from "react-router-dom";

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitTitle: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this)
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // componentDidMount() {
  //   this.props.clearErrors();
  // }

  handleSubmit(e) {
    e.preventDefault();

    let processIdObject;

    if(this.props.formType === "Create Server"){
      processIdObject = { server: {server_title:this.state.unitTitle , host_id: this.props.processId} }
    }
    if(this.props.formType === "Create Channel"){
      let parseIdArray = document.getElementById("channel-list").firstChild.id.split(",") // example "id,22,channelTitle,General,serverId,27"split(",")
      processIdObject = { channel: {ch_title: this.state.unitTitle , server_id: parseIdArray[parseIdArray.length - 1]} }
    }

    let form = Object.assign({}, processIdObject);
    this.props.processForm(form).then(() => {
      return this.props.closeModal();
    });
  }

  handleBlur(){
    this.props.clearFormErrors()
    return this.props.closeModal()
  }

  render() {
    return (
      <div className="create-form-container">
        <div onClick={this.handleBlur} className="close-x">
          X
        </div>
        <div className="create-form-subcaption">
          {this.props.formType}
        </div>

        
          <form onSubmit={this.handleSubmit} className="create-form-box">
            
            <div className="create-form">

              {this.props.errors ? Object.values(this.props.errors).map((error, idx) => <li key={idx} id="error-message" >{error}</li>) : null}
       

              {this.props.formType === "Create Server" ? (
                <input
                  type="text"
                  value={this.state.unitTitle}
                  onChange={this.update("unitTitle")}
                  className="create-input"
                  placeholder={`Enter a Server Title`}
                  autoComplete="off"
                />
              ) : null}

              {this.props.formType === "Create Channel" ? (
                <input
                  type="text"
                  value={this.state.unitTitle}
                  onChange={this.update("unitTitle")}
                  className="create-input"
                  placeholder="Enter a Channel Title"
                  autoComplete="off"
                />
              ) : null}


              <input
                className="create-final"
                type="submit"
                value={this.props.formType}
              />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateForm);
