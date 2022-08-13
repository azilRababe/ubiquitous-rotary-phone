const express = require('express'),
    router = express.Router(),
    Departments = require('../models/Departments'),
    Department = require('../controllers/Department');

router.route('/')
    .get(Department.index)

module.exports = router;
