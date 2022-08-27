const Departments = require("../models/Departments");

const isLoggedIn = async (req, res, next) => {
  if (req.isAuthenticated()) next();
  req.session.returnTo = req.originalUrl;
  req.flash("error", "You must be signed in first!");
  return res.redirect("/login");
};

const authRole = async (Role) => async (req, res, next) => {
  const userDepartement = await Departments.find({
    Name: Role,
    $or: [{ HOD: req.user._id }, { Employees: req.user._id }],
  });
  if (userDepartement) next();
  return res.json({ message: "You are not allowed to see this content" });
};

// function authRole(Role) {
//   return (req, res, next) => {
//     if (req.user.userRole != Role && req.user.userRole != "Admin") {
//       res.json({ message: "You are not allowed to see this content" });
//     }
//     next();
//   };
// }

module.exports = { isLoggedIn, authRole };
