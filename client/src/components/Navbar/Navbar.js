import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = props => (
  <nav className="navbar navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      School Scource
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
  </nav>
);

export default Navbar;