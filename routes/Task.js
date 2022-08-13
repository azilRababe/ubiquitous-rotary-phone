
const express = require('express'),
    router = express.Router(),
    Tasks = require('../models/Tasks'),
    Task = require('../controllers/Taks');

router.route('/')
    .get(Task.index)
    .post(Task.createTask)

router.get('/new', Task.renderNewForm)

router.route('/:id')
    .get(Task.showTask)
    .put(Task.updateTask)
    .delete(Task.deleteTask)

router.get('/:id/edit', Task.editForm)

module.exports = router;
