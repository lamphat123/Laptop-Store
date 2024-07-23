const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://diablonguyen424:PuBFJYaGfPlkfB4g@project.rylcxnk.mongodb.net/laptop_store");
    console.log("Connect mongodb successfully!");
  } catch (error) {
    console.error("Connect mongodb failure!", error);
  }
}

module.exports = { connect };