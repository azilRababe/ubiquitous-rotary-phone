const Departments = require("../models/Departments");

module.exports.index = async (req, res) => {
  Departments.find({})
    .populate({ path: "HOD", select: "Firstname Lastname -_id" })
    .populate({ path: "Employees", select: "Firstname Lastname -_id" })
    .exec((err, Department) => {
      if (err) {
        res.status(404).json({ message: err });
      }
      res.render("Department/index", { Department });
    });
};

module.exports.deleteDep = async (req, res) => {
  await Departments.findOneAndDelete({ _id: req.params.id });
  req.flash("success_msg", "Department has been deleted successfully");
  res.redirect("/Department");
};

module.exports.updateDep = async (req, res) => {
  const body = req.body;
  Departments.findByIdAndUpdate(req.params.id, body)
    .populate("HOD")
    .populate("Employees")
    .exec((err, Department) => {
      if (err) {
        res.status(404).json({ err: err });
      }
      req.flash("success_msg", "Changes saved successfully");
      return res.redirect(`/Department`);
    });
};

module.exports.editForm = async (req, res) => {
  const { id } = req.params;
  Departments.findById({ _id: id })
    .populate({ path: "HOD", select: "Firstname Lastname Email -_id" })
    .populate({ path: "Employees", select: "Firstname Lastname -_id" })
    .exec((err, Department) => {
      if (err) {
        res.status(404).json({ message: "Department not found" });
      }
      console.log(Department);
      req.flash("error_msg", "Changes saved successfully");
      res.render("Department/edit", { Department });
    });
};

// module.exports.showDep = async (req, res) => {
//     const { id } = req.params
//     const CurrentUser = req.user
//     const Department = await Departments.findById(id)
//         .populate('depEmployees')
//         .populate('HOD_Id')
//         .exec((err, Department) => {
//             console.log(`current user : ${CurrentUser._id} HOD: ${Department.HOD_Id._id}`)
//             return res.render('Department/showDep', { Department })
//         })
// }
