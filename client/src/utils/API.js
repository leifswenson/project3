import axios from "axios";

export default {
  // Gets all resources
  getresources: function() {
    return axios.get("/api/resources");
  },
  // Gets the resource with the given id
  getresource: function(id) {
    return axios.get("/api/resources/" + id);
  },
  // Deletes the resource with the given id
  deleteresource: function(id) {
    return axios.delete("/api/resources/" + id);
  },
  // Saves a resource to the database
  saveresource: function(resourceData) {
    // alert("save resource in api")
    return axios.post("/api/resources", resourceData);
  },
  
  // Gets all users
  getusers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getuser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteuser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveuser: function(userData) {
    // alert("save user in api")
    return axios.post("/api/users", userData);
  }
};
