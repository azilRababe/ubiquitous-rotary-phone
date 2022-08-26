const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  passportLocalMongoose = require("passport-local-mongoose");

const Employees = new Schema({
  Phone: String,
  Email: { type: String, unique: true },
  bloodType: String,
  Nationality: String,
  driverLicence: {
    type: String,
    enum: ["Yes", "No"],
  },
  birthDate: Date,
  Gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  Location: String,
  Firstname: String,
  Lastname: String,
  username: String,
  userRole: {
    type: String,
    enum: ["Employee", "HOD", "Admin", "HR"],
  },
  JD: String,
  join: { type: Date, default: Date.now },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Projects",
  },
  leaveId: {
    type: Schema.Types.ObjectId,
    ref: "Leaves",
  },
  taksId: {
    type: Schema.Types.ObjectId,
    ref: "Tasks",
  },
});

Employees.plugin(passportLocalMongoose);
module.exports = mongoose.model("Employees", Employees);
