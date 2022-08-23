const express = require('express'),
    router = express.Router(),
    Departments = require('../models/Departments'),
    Department = require('../controllers/Department'),
    { isLoggedIn, authRole } = require('../middlewares/middleware'),
    catchAsync = require('../utils/catchAsync');

router.route('/')
    .get(isLoggedIn, authRole('HR'), catchAsync(Department.index))

router.route('/:id')
    .get(isLoggedIn, Department.showDep)

module.exports = router;
