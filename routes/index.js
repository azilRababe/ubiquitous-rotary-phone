const express = require("express"),
  router = express.Router(),
  passport = require("passport"),
  Employee = require("../models/Employees"),
  index = require("../controllers/index");
const { isLoggedIn } = require("../middlewares/middleware");

router.route("/Profil/:id").get(isLoggedIn, index.Profil);

router.route("/login").get(index.getLogin).post(index.login);

router.route("/logout").get(isLoggedIn, index.logout);

module.exports = router;
