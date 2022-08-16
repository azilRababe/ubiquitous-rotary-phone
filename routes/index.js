const express = require('express'),
    router = express.Router(),
    Employee = require('../models/Employees'),
    index = require('../controllers/index');

router.route('/login')
    .get(index.getLogin)
    .post(index.login)


module.exports = router;
