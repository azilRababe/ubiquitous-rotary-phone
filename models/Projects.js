const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const Projects = new Schema({
  employeeId: { type: [mongoose.Types.ObjectId], ref: "Employees" },
  Title: { type: String },
  startDate: { type: Date },
  dueDate: { type: Date },
  Createdin: { type: Date, Default: Date.now },
  Status: {
    type: String,
    enum: ["Upcoming", "In progress", "Done"],
  },
  createdBy: { type: String },
});

module.exports = mongoose.model("Projects", Projects);
