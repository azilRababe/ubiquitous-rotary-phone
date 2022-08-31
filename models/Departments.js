const mongoose = require("mongoose"),
  schema = mongoose.Schema;

const Departments = new schema({
  Name: {
    type: String,
    enum: [
      "Marketing",
      "Finance",
      "Operations management",
      "Human Resource",
      "IT",
    ],
  },
  HOD: {
    type: schema.Types.ObjectId,
    ref: "Employees",
  },
  Employees: {
    type: [schema.Types.ObjectId],
    ref: "Employees",
  },
  Description: {
    type: String,
  },
});

module.exports = mongoose.model("Departments", Departments);
