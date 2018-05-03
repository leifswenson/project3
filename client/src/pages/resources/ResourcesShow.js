import React, { Component } from "react";
import { Link } from "react-router-dom";
import Section from '../../components/Section';
import API from "../../utils/API";

class ResourcesShow extends Component {

  state = {
    resource: {}
  };

  componentDidMount() {
    API.getresource(this.props.match.params.id)
      .then(res => this.setState({ resource: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <Section>
        <p>{this.state.resource.title}</p>
        <p>{this.state.resource.category}</p>
        <p>{this.state.resource.school}</p>
        <p>{this.state.resource.school_location}</p>
        <p>{this.state.resource.quantity}</p>
        <p>{this.state.resource.description}</p>
        <Link to="/resources/"><button type="button" class="btn btn-secondary">Back</button></Link>
      </Section>
    );
  }
};

export default ResourcesShow;