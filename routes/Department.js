const express = require("express"),
  router = express.Router(),
  Departments = require("../models/Departments"),
  Department = require("../controllers/Department"),
  { isLoggedIn, authRole } = require("../middlewares/middleware");

router
  .route("/")
  .get(isLoggedIn, Department.index)
  .post(isLoggedIn, Department.createDepartment);

router.get("/new", isLoggedIn, Department.renderNewForm);

router
  .route("/:id")
  .get(isLoggedIn, Department.showDep)
  .put(isLoggedIn, Department.updateDep)
  .delete(isLoggedIn, Department.deleteDep);

router.get("/:id/edit", isLoggedIn, Department.editForm);

module.exports = router;
