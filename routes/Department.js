const express = require('express'),
    router = express.Router(),
    Departments = require('../models/Departments'),
    Department = require('../controllers/Department'),
    { isLoggedIn, isHR, isAdmin, isEmployee } = require('../middlewares/middleware'),
    catchAsync = require('../utils/catchAsync');

router.route('/')
    .get(isLoggedIn, isAdmin, isHR, catchAsync(Department.index))

module.exports = router;
