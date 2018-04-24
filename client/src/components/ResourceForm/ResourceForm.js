import React from "react";
import "./ResourceForm.css";

const ResourceForm = props => (
  <div className="form">
    <h2>This is the resource form</h2>
    	<form>
           <div class="form-group">
		    <label for="resource">Resource</label>
		    <input type="email" class="form-control" id="resource" placeholder="1st Grade Books">
		  </div>
		  <div class="form-group">
		    <label for="categorySelect">Category</label>
		    <select class="form-control" id="categorySelect">
		      <option>Recreation</option>
		      <option>Books</option>
		      <option>Supplies</option>
		      <option>Technology</option>
		      <option>Other</option>
		    </select>
		  </div>
		  <div class="form-group">
		    <label for="School_Name">School Name/label>
		    <input type="email" class="form-control" id="School_Name" placeholder="Bridgemount High">
		  </div>
		  <div class="form-group">
		    <label for="School_Location">Email address</label>
		    <input type="email" class="form-control" id="School_Location" placeholder="Minneapolis, MN">
		  </div>
		  <div class="form-group">
		    <label for="Quantity">Quantity</label>
		    <input type="email" class="form-control" id="Quantity" placeholder="5">
		  </div>
		  <div class="form-group">
		    <label for="Description">Description</label>
		    <textarea class="form-control" id="Description" rows="3" placeholder="Type your description here"></textarea>
		  </div>
		  <div class="form-group">
		  	<input class="btn btn-primary" type="submit" value="Submit">
		  </div>
         </form>

  </div>
);

export default ResourceForm;
