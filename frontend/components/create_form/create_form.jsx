import React from "react";
import { withRouter } from "react-router-dom";

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unitTitle: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  //IF NO ERRORS, SHOULD CLOSE MODAL, KEEP OPEN IF ERROR
  handleSubmit(e) {
    e.preventDefault();

    //   .then(this.props.closeModal())
    const form = Object.assign({}, this.state);
    this.props.processForm(form).then(() => {
      if (this.props.formType === "Create Server") {
        return this.props.openModal("Create Server");
      }
    });
  }

  render() {
    return (
      <div className="create-form-container">
        <div onClick={this.props.closeModal} className="close-x">
          X
        </div>
        <div className="create-form-subcaption">
          {this.props.formType}
        </div>

          <form onSubmit={this.handleSubmit} className="create-form-box">
            {/* <div>{this.renderErrors()}</div> */}
            <div className="create-form">
              {this.props.formType === "Create Server" ? (
                <input
                  type="text"
                  value={this.state.unitTitle}
                  onChange={this.update("unitTitle")}
                  className="create-input"
                  placeholder="Enter a Server Title"
                />
              ) : null}

              {this.props.formType === "Create Channel" ? (
                <input
                  type="text"
                  value={this.state.unitTitle}
                  onChange={this.update("unitTitle")}
                  className="create-input"
                  placeholder="Enter a Channel Title"
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
