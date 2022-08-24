
const express = require('express'),
    router = express.Router(),
    Tasks = require('../models/Tasks'),
    Task = require('../controllers/Task');
const { isLoggedIn, authRole } = require('../middlewares/middleware')

router.route('/')
    .get(isLoggedIn, Task.index)
    .post(isLoggedIn, Task.createTask)

router.get('/new', isLoggedIn, Task.renderNewForm)

router.route('/:id')
    .get(isLoggedIn, Task.showTask)
    .put(isLoggedIn, Task.updateTask)
    .delete(isLoggedIn, Task.deleteTask)

router.get('/:id/edit', isLoggedIn, Task.editForm)

module.exports = router;
