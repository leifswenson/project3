import React, { Component } from "react";
import "./ResourceForm.css";
import API from "../../utils/API";

class ResourceForm extends Component {
  state = {
    title: "",
    category: "",
    school: "",
    school_location: "",
    quantity: "",
    description: ""
  };

  componentDidMount() {
    this.loadresources();
  }

  loadresources = () => {
    API.getresources()
      .then(res =>
        this.setState({ resources: res.data, title: "", category: "", school: "", school_location: "", quantity: "", description: "" })
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
	            	<label for="title">Title</label>
	              <input
	                value={this.state.title}
	                onChange={this.handleInputChange}
	                name="title"
	              />
              </div>
              <div className="form-group">
	            	<label for="category">Category</label>
	              <input
	                value={this.state.category}
	                onChange={this.handleInputChange}
	                name="category"
	              />
              </div>
              <div className="form-group">
	            	<label for="school">School</label>
	              <input
	                value={this.state.school}
	                onChange={this.handleInputChange}
	                name="school"
	              />
              </div>
              <div className="form-group">
	            	<label for="school_location">School Location</label>
	              <input
	                value={this.state.school_location}
	                onChange={this.handleInputChange}
	                name="school_location"
	              />
              </div>
              <div className="form-group">
	            	<label for="quantity">Quantity</label>
	              <input
	                value={this.state.quantity}
	                onChange={this.handleInputChange}
	                name="quantity"
	              />
              </div>
              <div className="form-group">
	            	<label for="description">Description</label>
	              <input
	                value={this.state.description}
	                onChange={this.handleInputChange}
	                name="description"
	              />
              </div>
              <button
                disabled={!(this.state.title && this.state.category)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ResourceForm;
