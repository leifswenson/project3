import React, { Component } from "react";
import API from "../../utils/API";
import "./ResourceTable.css";

class ResourceTable extends Component { 

  state = {
    resources: []
  };

  componentDidMount() {
    this.getresources();
  }

  getresources = () => {
    API.getresources()
      .then(res =>
        this.setState({
          resources: res.data
        })
      )
      .catch(err => console.log(err));
  };

  
  render() {
    return (
      <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col">School</th>
          <th scope="col">Location</th>
          <th scope="col">Quantity</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
        {this.state.resources.length ? (
          <tbody>
            {this.state.resources.map(resource => (
              <tr key={resource._id}>
                <td>{resource.title}</td>
                <td>{resource.category}</td>
                <td>{resource.school}</td>
                <td>{resource.school_location}</td>
                <td>{resource.quantity}</td>
                <td>{resource.description}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr className="text-center">
              <td colspan="6">
                <h3>
                  No School Resources to Claim!
                </h3>
              </td>
            </tr>
          </tbody>
        )}
    </table>
    );
  }
}

export default ResourceTable;
