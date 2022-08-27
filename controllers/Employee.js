const { json } = require("body-parser");
const Employees = require("../models/Employees"),
  passport = require("passport"),
  bcrypt = require("bcryptjs");

module.exports.index = async (req, res) => {
  Employees.find({})
    .populate("projectId")
    .populate("leaveId")
    .populate("taksId")
    .exec((err, Employee) => {
      if (err) {
        res.status(404).json({ err: err });
      }
      res.render("Employee/index", { Employee });
    });
};

module.exports.renderNewForm = (req, res) => {
  res.render("Employee/new");
};

module.exports.createEmployee = async (req, res) => {
  const body = req.body;
  Emp = new Employees(body);
  Employees.register(Emp, req.body.password, (err, Employees) => {
    if (err) {
      req.flash("error_msg", "Something went wrong");
      return res.redirect("/Employee/new");
    } else {
      req.flash("success_msg", "Employee has been added successfully");
      res.redirect("/Employee");
    }
  });
};

module.exports.showEmployee = async (req, res) => {
  const Employee = await Employees.findById({ _id: req.params.id });
  if (Employee) return res.render("Employee/Show", { Employee });
  req.flash("error_msg", "Employee not found");
  return res.redirect(`/Profil/${req.user.id}`);
};

module.exports.updateEmployee = async (req, res) => {
  // const id = req.params.id
  const body = req.body;
  const Employee = await Employees.findByIdAndUpdate(req.params.id, body);
  req.flash("success_msg", "Changes saved successfully");
  return res.redirect(`/Employee/${Employee._id}`);
};

module.exports.editForm = async (req, res) => {
  const { id } = req.params;
  const Employee = await Employees.findById({ _id: id });
  if (!Employee) return res.status(404).json({ message: "Employee not found" });
  return res.render("Employee/edit", { Employee });
};

module.exports.deleteEmployee = async (req, res) => {
  await Employees.findOneAndDelete({ _id: req.params.id });
  req.flash("success_msg", "Employee has been deleted successfully");
  res.redirect("/Employee");
};
