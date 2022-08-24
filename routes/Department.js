const express = require('express'),
    router = express.Router(),
    Departments = require('../models/Departments'),
    Department = require('../controllers/Department'),
    { isLoggedIn, authRole } = require('../middlewares/middleware'),
    catchAsync = require('../utils/catchAsync');

router.route('/')
    .get(isLoggedIn, Department.index)

router.route('/:id')
    .put(isLoggedIn, Department.updateDep)
    .delete(isLoggedIn, Department.deleteDep)

router.route('/:id/edit')
    .get(isLoggedIn, Department.editForm)
module.exports = router;
