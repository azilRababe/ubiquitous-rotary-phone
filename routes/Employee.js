const express = require("express"),
  router = express.Router(),
  Employee = require("../controllers/Employee"),
  { isLoggedIn } = require("../middlewares/middleware");

router.route("/").get(isLoggedIn, Employee.index).post(Employee.createEmployee);

router.get("/new", Employee.renderNewForm);

router
  .route("/:id")
  .get(isLoggedIn, Employee.showEmployee)
  .put(isLoggedIn, Employee.updateEmployee)
  .delete(isLoggedIn, Employee.deleteEmployee);

router.get("/:id/edit", isLoggedIn, Employee.editForm);

module.exports = router;
