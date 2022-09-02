const express = require("express"),
  router = express.Router(),
  Employees = require("../models/Employees"),
  Employee = require("../controllers/Employee"),
  { isLoggedIn } = require("../middlewares/middleware");

router
  .route("/")
  .get(isLoggedIn, Employee.index)
  .post(isLoggedIn, Employee.createEmployee);

router.get("/new", isLoggedIn, Employee.renderNewForm);

router
  .route("/:id")
  .get(isLoggedIn, Employee.showEmployee)
  .put(isLoggedIn, Employee.updateEmployee)
  .delete(isLoggedIn, Employee.deleteEmployee);

router.get("/:id/edit", isLoggedIn, Employee.editForm);
router.get("/:id/report", isLoggedIn, Employee.genReport);
module.exports = router;
