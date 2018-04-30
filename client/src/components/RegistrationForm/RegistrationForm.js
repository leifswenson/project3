import React, { Component } from "react";
import "./RegistrationForm.css";
import API from "../../utils/API";

class RegistrationForm extends Component {
  state = {
    username: "",
    password: "",
    fullname: "",
    school: "",
  };

  componentDidMount() {
    this.loadusers();
  }

  loadusers = () => {
    API.getusers()
      .then(res =>
        this.setState({ users: res.data, username: "", password: "", fullname: "", school: "" })
      )
      .catch(err => console.log(err));
  };

  deleteuser = id => {
    API.deleteuser(id)
      .then(res => this.loadusers())
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
    // alert("You added a user.")
    if (this.state.username && this.state.password) {
      API.saveuser({
        username: this.state.username,
        password: this.state.password,
        fullname: this.state.fullname,
        school: this.state.school
      })
        .then(res => this.loadusers())
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
	            	<label for="username">username</label>
	              <input
                  className="form-control" 
	                value={this.state.username}
	                onChange={this.handleInputChange}
	                name="username"
	              />
              </div>
              <div className="form-group">
	            	<label for="password">password</label>
	              <input
                  className="form-control" 
	                value={this.state.password}
	                onChange={this.handleInputChange}
	                name="password"
	              />
              </div>
              <div className="form-group">
	            	<label for="name">name</label>
	              <input
                  className="form-control" 
	                value={this.state.fullname}
	                onChange={this.handleInputChange}
	                name="fullname"
	              />
              </div>
              <div className="form-group">
	            	<label for="school">school</label>
	              <input
                  className="form-control" 
	                value={this.state.school}
	                onChange={this.handleInputChange}
	                name="school"
	              />
              </div>

              <button
                disabled={!(this.state.username && this.state.password)}
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

export default RegistrationForm;
