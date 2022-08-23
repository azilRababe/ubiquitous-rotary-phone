const express = require('express'),
    router = express.Router(),
    Employees = require('../models/Employees'),
    Employee = require('../controllers/Employee'),
    { isLoggedIn, authRole } = require('../middlewares/middleware');

router.route('/')
    .get(isLoggedIn, authRole('HR'), Employee.index)
    .post(isLoggedIn, authRole('HR'), Employee.createEmployee)

router.get('/new', isLoggedIn, authRole('HR'), Employee.renderNewForm)

router.route('/:id')
    .get(isLoggedIn, authRole('HR'), Employee.showEmployee)
    .put(isLoggedIn, Employee.updateEmployee)
    .delete(isLoggedIn, isLoggedIn, authRole('HR'), Employee.deleteEmployee)

router.get('/:id/edit', isLoggedIn, Employee.editForm)

module.exports = router;
