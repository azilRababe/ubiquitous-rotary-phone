
const express = require('express'),
    router = express.Router(),
    Tasks = require('../models/Tasks'),
    Task = require('../controllers/Task');
const { isLoggedIn, authRole } = require('../middlewares/middleware')

router.route('/')
    .get(isLoggedIn, authRole('HR'), Task.index)
    .post(isLoggedIn, authRole('HR'), Task.createTask)

router.get('/new', isLoggedIn, authRole('HR'), Task.renderNewForm)

router.route('/:id')
    .get(isLoggedIn, authRole('HR'), Task.showTask)
    .put(isLoggedIn, authRole('HR'), Task.updateTask)
    .delete(isLoggedIn, authRole('HR'), Task.deleteTask)

router.get('/:id/edit', isLoggedIn, authRole('HR'), Task.editForm)

module.exports = router;
