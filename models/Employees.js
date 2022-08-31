const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  passportLocalMongoose = require("passport-local-mongoose");

const Employees = new Schema({
  Phone: { type: String },
  Email: { type: String, unique: true },
  bloodType: { type: String },
  Nationality: { type: String },
  driverLicence: {
    type: String,
    enum: ["Yes", "No"],
  },
  birthDate: Date,
  Gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  Location: { type: String },
  Firstname: { type: String },
  Lastname: { type: String },
  username: { type: String },
  userRole: {
    type: String,
    enum: ["Employee", "HOD", "Admin", "HR"],
  },
  JD: { type: String },
  join: { type: Date, default: Date.now },
  projectId: {
    type: [Schema.Types.ObjectId],
    ref: "Projects",
  },
  leaveId: {
    type: [Schema.Types.ObjectId],
    ref: "Leaves",
  },
  taskId: {
    type: [Schema.Types.ObjectId],
    ref: "Tasks",
  },
});

Employees.plugin(passportLocalMongoose);
module.exports = mongoose.model("Employees", Employees);
