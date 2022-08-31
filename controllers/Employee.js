const { json } = require("body-parser");
const Employees = require("../models/Employees"),
  passport = require("passport"),
  bcrypt = require("bcryptjs");

// Create - Read - Update - Delete

module.exports.renderNewForm = (req, res) => res.render("Employee/New");
module.exports.createEmployee = async (req, res) => {
  Emp = new Employees(req.body);
  Employees.register(Emp, req.body.password, (err, Employees) => {
    if (err) return res.json({ err: err });
    req.flash("success_msg", "Employee has been added successfully");
    return res.redirect("/Employee");
  });
};

module.exports.index = async (req, res) => {
  Employees.find({}).exec((err, Employee) => {
    if (err) res.status(404).json({ err: err });
    res.render("Employee/Index", { Employee });
  });
};
module.exports.showEmployee = async (req, res) => {
  Employees.findById({ _id: req.params.id })
    .populate("projectId")
    .populate("leaveId")
    .populate("taskId")
    .exec((err, Employee) => {
      if (err) return res.json({ err: err });
      return res.render(`Employee/Show`, { Employee });
    });
};

module.exports.editForm = async (req, res) => {
  Employees.findById({ _id: req.params.id })
    .populate("projectId")
    .populate("leaveId")
    .populate("taskId")
    .exec((err, Employee) => {
      if (err) return res.json({ err: err });
      return res.render("Employee/Edit", { Employee });
    });
};
module.exports.updateEmployee = async (req, res) => {
  await Employees.findByIdAndUpdate(req.params.id, req.body);
  req.flash("success_msg", "Changes saved successfully");
  return res.redirect(`/Employee`);
};

module.exports.deleteEmployee = async (req, res) => {
  const id = req.params;
  await Employees.findOneAndDelete(id);
  req.flash("success_msg", "Employee has been deleted successfully");
  res.redirect("/Employee");
};
