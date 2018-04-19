const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  school: { type: String, required: true },
  school_location: { type: String, required: true },
  quantity: { type: String, required: true },
  description: { type: String, required: true },
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;