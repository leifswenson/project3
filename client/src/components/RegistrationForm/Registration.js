import React, { Component } from "react";
import "./Registration.css";
import API from "../../utils/API";

class Registration extends Component {
  state = {
    school: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  componentDidMount() {
    this.loadresources();
  }

  loadresources = () => {
    API.getresources()
      .then(res =>
        this.setState({ resources: res.data, school: "", email: "", password: "", confirmPassword: "" })
      )
      .catch(err => console.log(err));
  };

  deleteresource = id => {
    API.deleteresource(id)
      .then(res => this.loadresources())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // alert("You added a resource.")
    if (this.state.title && this.state.category) {
      API.saveresource({
        title: this.state.title,
        category: this.state.category,
        school: this.state.school,
        school_location: this.state.school_location,
        quantity: this.state.quantity,
        description: this.state.description
      })
        .then(res => this.loadresources())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className ="container">
        <div className="row">
          <div className="md-12">
            <form>
            	<div className="form-group">
	            	<label for="school">School</label>
	              <input
                  className="form-control" 
	                value={this.state.school}
	                onChange={this.handleInputChange}
	                name="school"
	              />
              </div>
              <div className="form-group">
	            	<label for="email">Email</label>
	              <input
                  className="form-control" 
	                value={this.state.email}
	                onChange={this.handleInputChange}
	                name="email"
	              />
              </div>
              <div className="form-group">
	            	<label for="password">Password</label>
	              <input
                  className="form-control" 
	                value={this.state.password}
	                onChange={this.handleInputChange}
	                name="password"
	              />
              </div>
              <div className="form-group">
	            	<label for="comfirm_password">Confirm Password</label>
	              <input
                  className="form-control" 
	                value={this.state.confirm_password}
	                onChange={this.handleInputChange}
	                name="confirm_password"
	              />
              </div>

              <button
                disabled={!(this.state.title && this.state.category)}
                onClick={this.handleFormSubmit}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
