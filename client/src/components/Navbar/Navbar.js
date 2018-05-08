import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

   



class Navbar extends Component {
  
  state = {
    isSignedIn: false
  };

  changeSignIn = () => {
    isSignedIn: true
  };

  responseGoogle = (response) => {
    console.log(response);
    this.changeSignIn();
    console.log(isSignedIn)
  };

  logout = (response) => {
    console.log(response);
  };
  
  
  render () {
  return ( 
  <nav className="navbar navbar-expand-lg navbar-dark">
    <Link className="navbar-brand" to="/">
      School Source
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resources/new" className="nav-link">
            New
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/resources" className="nav-link">
            Search
          </Link>
        </li>
      </ul>
    </div>
    <div>

        {this.state.isSignedIn
        ?
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={logout}
        >
        </GoogleLogout>
        :
        <GoogleLogin
          clientId="1018035133373-vv8hfkuii5e1dqce9fg3qsa1t5indmct.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        }
    </div>
    {/* <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Log In</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <input type="email" className="form-control" id="loginInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="loginInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">Log In</button>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Register as a new user</button>
          </div>
        </div>
      </div>
    </div> */}
  </nav>
)}};

export default Navbar;