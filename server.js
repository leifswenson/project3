// Dependencies
// ============================================================================
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");


// Sets up the Express App
// ============================================================================
const app = express();
const PORT = process.env.PORT || 3001;


// Body Parser
// ============================================================================
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve up static assets
// ============================================================================
app.use(express.static("client/build"));


// Add routes, both API and view
// ============================================================================
app.use(routes);


// Mongoose
// ============================================================================
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/schoolsource");


// Start the server
// ============================================================================
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening at localhost: ${PORT}!`);
});
