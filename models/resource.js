const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  description: { type: String, required: true }
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;