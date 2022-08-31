const Leaves = require("../models/Leaves");

// Create - Read - Update - Delete

module.exports.renderNewForm = (req, res) => res.render("Leave/New");
module.exports.createLeave = async (req, res) => {
  const Leave = new Leaves(req.body);
  if (Leave.dueDate < Leave.startDate) {
    req.flash("error", "The due date should be greater than the start data");
    return res.redirect("/Leave/New");
  }
  Leave.save();
  req.flash("success_msg", "New Leave has been added successfully");
  res.redirect("/Leave");
};

module.exports.showLeave = async (req, res) => {
  Leaves.findById({ _id: req.params.id })
    .populate("employeeId")
    .exec((err, Leave) => {
      if (err) return res.json({ err: err });
      return res.render("Leave/Show", { Leave });
    });
};
module.exports.index = async (req, res) => {
  Leaves.find({}).exec((err, Leave) => {
    if (err) return res.json({ err: err });
    return res.render("Leave/Index", { Leave });
  });
};

module.exports.editForm = async (req, res) => {
  Leaves.findById({ _id: req.params.id })
    .populate("employeeId")
    .exec((err, Leave) => {
      if (err) res.json({ err: err });
      res.render("Leave/Edit", { Leave });
    });
};
module.exports.updateLeave = async (req, res) => {
  Leaves.findByIdAndUpdate(req.params.id, req.body);
  req.flash("success_msg", "Changes saved successfully");
  res.redirect("/Leave");
};

module.exports.deleteLeave = async (req, res) => {
  await Leaves.findOneAndDelete({ _id: req.params.id });
  req.flash("success_msg", "Leave deleted successfully");
  res.redirect("/Leave");
};
