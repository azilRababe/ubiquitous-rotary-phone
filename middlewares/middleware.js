const Departments = require("../models/Departments");

// user authentification
const isLoggedIn = async (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash("error", "You must be signed in first!");
    return res.redirect("/login");
  }
  next();
};
// user Authorization
const authRole = async (Role) => async (req, res, next) => {
  const userDepartement = await Departments.find({
    Name: Role,
    $or: [{ HOD: req.user._id }, { Employees: req.user._id }],
  });
  if (userDepartement) next();
  return res.json({ message: "You are not allowed to see this content" });
};

module.exports = { isLoggedIn, authRole };
