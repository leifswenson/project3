import React from "react";
import "./ResourceCard.css";

const ResourceCard = props => (
  <div className="card">
    <div className="img-container">
      <p>Replace this p tag with an img tag</p>
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Title:</strong> 
        </li>
        <li>
          <strong>School:</strong> 
        </li>
        <li>
          <strong>Location:</strong> 
        </li>
      </ul>
    </div>
  </div>
);

export default ResourceCard;
