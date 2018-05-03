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
                <td>{user.fullname}</td>
                <td>{user.school}</td>

              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr className="text-center">
              <td colSpan="6">
                <h3>
                  No Users!
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
