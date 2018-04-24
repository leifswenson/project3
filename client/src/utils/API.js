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
    return axios.post("/api/resources", resourceData);
  }
};
