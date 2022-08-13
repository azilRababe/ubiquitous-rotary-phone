const express = require('express'),
    router = express.Router(),
    Employees = require('../models/Employees'),
    Employee = require('../controllers/Employee');

router.route('/')
    .get(Employee.index)
    .post(Employee.createEmployee)

router.get('/new', Employee.renderNewForm)

router.route('/:id')
    .get(Employee.showEmployee)
    .put(Employee.updateEmployee)
    .delete(Employee.deleteEmployee)

router.get('/:id/edit', Employee.editForm)

module.exports = router;
