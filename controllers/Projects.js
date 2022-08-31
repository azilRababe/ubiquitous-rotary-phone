const Projects = require("../models/Projects");

// Create - Read - Update - Delete

module.exports.renderNewForm = (req, res) => res.render("Project/New");
module.exports.createProject = async (err, req, res) => {
  const Project = new Projects(req.body);
  Project.save();
  if (err) res.json({ err: err });
  req.flash("success_msg", "Project created successfully");
  res.redirect("/Project");
};

module.exports.index = async (req, res) => {
  Projects.find({}).exec((err, Project) => {
    if (err) res.json({ err: err });
    res.render("Project/Index", { Project });
  });
};
module.exports.showProject = async (req, res) => {
  Projects.findById({ _id: req.params.id })
    .populate("employeeId")
    .exec((err, Project) => {
      if (err) res.json({ err: err });
      res.render("Project/Show", { Project });
    });
};

module.exports.editForm = async (req, res) => {
  const Project = await Projects.findById({ _id: req.params.id });
  res.render("Project/Edit", { Project });
};
module.exports.updateProject = async (req, res) => {
  await Projects.findByIdAndUpdate(req.params.id, req.body);
  req.flash("success_msg", "Changes saved successfully");
  res.redirect(`/Project`);
};

module.exports.deleteProject = async (req, res) => {
  await Projects.findOneAndDelete({ _id: req.params.id });
  req.flash("success_msg", "Project deleted successfuly");
  res.redirect("/Project");
};
