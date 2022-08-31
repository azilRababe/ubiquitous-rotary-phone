const Tasks = require("../models/Tasks");

// Create - Read - Update - Delete

module.exports.renderNewForm = (req, res) => res.render("Task/New");
module.exports.createTask = async (req, res) => {
  const Task = new Tasks(req.body);
  Task.save();
  req.flash("success_msg", "Task has been created successfully");
  res.render("Task/show");
};

module.exports.index = async (req, res) => {
  Tasks.find({}).exec((err, Task) => {
    if (err) res.json({ err: err });
    res.render("Task/Index", { Task });
  });
};
module.exports.showTask = async (req, res) => {
  Tasks.findById(req.params.id)
    .populate("assignerId")
    .populate("assignedTo")
    .exec((err, Task) => {
      if (err) res.json({ err: err });
      res.render("Task/Show", { Task });
    });
};

module.exports.editForm = async (req, res) => {
  Tasks.findById({ _id: req.params.id }).exec((err, Task) => {
    if (err) res.json({ err: err });
    res.render("Task/Edit", { Task });
  });
};
module.exports.updateTask = async (err, req, res) => {
  Tasks.findByIdAndUpdate(req.params.id, req.body);
  if (err) res.json({ err: err });
  req.flash("success_msg", "Changes saved successfully");
  res.redirect("/Task");
};

module.exports.deleteTask = async (req, res) => {
  await Tasks.findOneAndDelete({ _id: req.params.id });
  req.flash("success_msg", "Task has been deleted successfully");
  res.redirect("/Task");
};
