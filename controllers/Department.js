const Departments = require("../models/Departments");

// Create - Read - Update - Delete

module.exports.renderNewForm = (req, res) => res.render("Department/New");
module.exports.createDepartment = async (err, req, res) => {
  const Department = new Departments(req.body);
  Department.save();
  if (err) return res.json({ err: err });
  req.flash("success_msg", "New Department added successfully");
  res.redirect("/Department");
};

module.exports.index = async (req, res) => {
  Departments.find({}).exec((err, Department) => {
    if (err) return res.status(404).json({ message: err });
    return res.render("Department/Index", { Department });
  });
};
module.exports.showDep = async (req, res) => {
  Departments.findById({ _id: req.params.id })
    .populate({ path: "HOD" })
    .populate({ path: "Employees" })
    .exec((err, Department) => {
      if (err) return res.json({ err: err });
      return res.render("Department/Show", { Department });
    });
};

module.exports.deleteDep = async (req, res) => {
  await Departments.findOneAndDelete({ _id: req.params.id });
  req.flash("success_msg", "Department has been deleted successfully");
  res.redirect("/Department");
};

module.exports.editForm = async (req, res) => {
  Departments.findById({ _id: req.params.id })
    .populate("HOD", "Firstname Lastname -_id")
    .populate("Employees")
    .exec((err, Department) => {
      if (err) res.status(404).json({ message: "Department not found" });
      req.flash("success_msg", "Changes saved successfully");
      res.render("Department/Edit", { Department });
    });
};
module.exports.updateDep = async (req, res) => {
  Departments.findByIdAndUpdate(req.params.id, req.body).exec(
    (err, Department) => {
      if (err) return res.status(404).json({ err: err });
      req.flash("success_msg", "Changes saved successfully");
      return res.redirect(`/Department`);
    }
  );
};
