const { find } = require("lodash");
const Employees = require("../models/Employees");
const Departments = require("../models/Departments");
const Leaves = require("../models/Leaves");
const Projects = require("../models/Projects");
const Tasks = require("../models/Tasks");

function isLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash("error", "You must be signed in first!");
    return res.redirect("/login");
  }
  next();
}

function authRole(Role) {
  return (req, res, next) => {
    if (req.user.userRole != Role && req.user.userRole != "Admin") {
      res.json({ message: "You are not allowed to see this content" });
    }
    next();
  };
}

module.exports = { isLoggedIn, authRole };
