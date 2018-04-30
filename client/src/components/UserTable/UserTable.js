import React, { Component } from "react";
import API from "../../utils/API";
import "./UserTable.css";

class UserTable extends Component { 

  state = {
    users: []
  };

  componentDidMount() {
    this.getusers();
  }

  getusers = () => {
    API.getusers()
      .then(res =>
        this.setState({
          users: res.data
        })
      )
      .catch(err => console.log(err));
  };

  
  render() {
    return (
      <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">School</th>
        </tr>
      </thead>
        {this.state.users.length ? (
          <tbody>
            {this.state.users.map(user => (
              <tr key={user._id}>
                <td>{user.title}</td>
                <td>{user.school}</td>

              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr className="text-center">
              <td colspan="6">
                <h3>
                  No School users to Claim!
                </h3>
              </td>
            </tr>
          </tbody>
        )}
    </table>
    );
  }
}

export default UserTable;
