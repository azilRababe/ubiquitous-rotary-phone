const Tasks = require("../models/Tasks");

module.exports.index = async (req, res) => {
  const Task = await Tasks.find({})
    .populate({ path: "assignerId", select: "Firstname Lastname" })
    .populate({ path: "assignedTo", select: "Firstname Lastname" })
    .exec((err, Task) => {
      if (err) {
        res.json({ err: err });
      }
      res.render("Task/index", { Task });
    });
};

module.exports.renderNewForm = (req, res) => {
  res.render("Task/new");
};

module.exports.createTask = async (req, res) => {
  const Task = new Tasks({ ...req.body.Tasks });
  Task.save();
  req.flash("success_msg", "Task has been created successfully");
  res.render("Task/show");
};

module.exports.showTask = async (req, res) => {
  const Task = await Tasks.findById(req.params.id)
    .populate({ path: "assignerId", select: "Firstname Lastname -_id" })
    .populate({ path: "assignedTo", select: "Firstname Lastname -_id" })
    .exec((err, Task) => {
      if (err) {
        res.json({ err: err });
      }
      res.render("Task/Show", { Task });
    });
};

module.exports.editForm = async (req, res) => {
  const { id } = req.params;
  const Task = await Tasks.findById({ _id: id })
    .populate({ path: "assignerId", select: "Firstname Lastname" })
    .populate({ path: "assignedTo", select: "Firstname Lastname" })
    .exec((err, Task) => {
      if (err) {
        res.json({ err: err });
      }
      res.render("Task/edit", { Task });
    });
};

module.exports.updateTask = async (req, res) => {
  const body = req.body;
  const Task = await Tasks.findByIdAndUpdate(req.params.id, body);
  req.flash("success_msg", "Changes saved successfully");
  res.redirect("/Task", { Task });
};

module.exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Tasks.findOneAndDelete({ _id: id });
  req.flash("success_msg", "Task has been deleted successfully");
  res.redirect("/Task");
};
