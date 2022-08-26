const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const Projects = new Schema({
  employeeId: { type: [mongoose.Types.ObjectId], ref: "Employees" },
  Title: String,
  startDate: Date,
  dueDate: Date,
  Createdin: { type: Date, Default: Date.now },
  Status: {
    type: String,
    enum: ["Upcoming", "In progress", "Done"],
  },
  createdBy: String,
});

module.exports = mongoose.model("Projects", Projects);
