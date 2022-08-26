const mongoose = require("mongoose");
const passport = require("passport");

const Employee = mongoose.model("Employees");

const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(Employee.authenticate()));
