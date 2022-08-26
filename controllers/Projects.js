const Projects = require("../models/Projects");

module.exports.index = async (req, res) => {
  const Project = await Projects.find({})
    .populate({ path: "employeeId", select: "Firstname Lastname -_id" })
    .exec((err, Project) => {
      if (err) {
        res.json({ err: err });
      }
      res.render("Project/index", { Project });
    });
};

module.exports.renderNewForm = (req, res) => {
  res.render("Project/new");
};

module.exports.createProject = async (req, res) => {
  const body = req.body;
  const Project = new Projects(body);
  Project.save();
  req.flash("success_msg", "Project created successfully");
  res.redirect("/Project");
};

module.exports.showProject = async (req, res) => {
  const Project = await Projects.findById({ _id: req.params.id })
    .populate({ path: "employeeId", select: "Firstname Lastname" })
    .exec((err, Project) => {
      if (err) {
        res.json({ err: err });
      }
      res.render("Project/Show", { Project });
    });
};

module.exports.updateProject = async (req, res) => {
  const body = req.body;
  const Project = await Projects.findByIdAndUpdate(req.params.id, body);
  req.flash("success_msg", "Changes saved successfully");
  res.redirect(`/Project`);
};

module.exports.editForm = async (req, res) => {
  const { id } = req.params;
  const Project = await Projects.findById({ _id: id });
  res.render("Project/edit", { Project });
};

module.exports.deleteProject = async (req, res) => {
  await Projects.findOneAndDelete({ _id: req.params.id });
  req.flash("success_msg", "Project deleted successfuly");
  res.redirect("/Project");
};
