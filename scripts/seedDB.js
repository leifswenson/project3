const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the resources collection and inserts the resources below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/schoolsource",
  {
    useMongoClient: true
  }
);

const resourceSeed = [
  {
    title: "Desks",
    category: "Furniture",
    school: "Buffalo High School",
    school_location: "Buffalo, MN",
    quantity: "20",
    description: "Desks that need a new home.  In great shape.",
    date: new Date(Date.now())
  }
];

db.resource
  .remove({})
  .then(() => db.resource.collection.insertMany(resourceSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
