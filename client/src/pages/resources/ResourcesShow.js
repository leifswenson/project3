import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import Section from '../../components/Section';
import API from "../../utils/API";

class ResourcesShow extends Component {

  state = {
    redirect: false,
    resource: {}
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/resources'/>
    }
  }

  componentDidMount() {
    API.getresource(this.props.match.params.id)
      .then(res => this.setState({ resource: res.data }))
      .catch(err => console.log(err));
  }

  loadresources = () => {
    API.getresource(this.props.match.params.id)
    .then(res => this.setState({ resource: res.data }))
    .catch(err => console.log(err));
  };

  deleteresource = id => {
    API.deleteresource(id)
      .then(res => this.setRedirect())
      .catch(err => console.log(err));
  };

  render() {
    return(
      <Section>
      {this.renderRedirect()}
        <div>
          <div className="row">
            <div className="col-md-12">
              <h2>
                {this.state.resource.title}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>Categoty: {this.state.resource.category}</p>
              <p>School: {this.state.resource.school}</p>
              <p>Location: {this.state.resource.school_location}</p>
              <p>quantity: {this.state.resource.quantity}</p>
              <p>Description: {this.state.resource.description}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Link to="/resources/"><button type="button" className="btn btn-secondary mr-2">Back</button></Link>
              <button onClick={() => this.deleteresource(this.state.resource._id)} type="button" className="btn btn-secondary mr-2">Delete</button>
              {/* <button onClick={() => this.deleteresource(this.state.resource._id)} type="button" className="btn btn-secondary mr-2">Edit</button> */}
            </div>
          </div>
        </div>

      </Section>
    );
  }
};

export default ResourcesShow;