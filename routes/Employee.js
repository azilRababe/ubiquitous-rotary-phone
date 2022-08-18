const express = require('express'),
    router = express.Router(),
    Employees = require('../models/Employees'),
    Employee = require('../controllers/Employee'),
    { isLoggedIn, isHR, isAdmin, isEmployee } = require('../middlewares/middleware'),
    ensureLoggedIn = require('connect-ensure-login');

router.route('/')
    .get(isLoggedIn, isAdmin, isHR, Employee.index)
    .post(isLoggedIn, isHR, isAdmin, Employee.createEmployee)

router.get('/new', isLoggedIn, isHR, isAdmin, Employee.renderNewForm)

router.route('/:id')
    .get(isLoggedIn, isHR, isAdmin, Employee.showEmployee)
    .put(isLoggedIn, isHR, isAdmin, Employee.updateEmployee)
    .delete(isLoggedIn, isHR, isAdmin, Employee.deleteEmployee)

router.get('/:id/edit', isLoggedIn, isHR, isAdmin, Employee.editForm)

module.exports = router;
