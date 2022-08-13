const express = require('express'),
    router = express.Router(),
    Projects = require('../models/Projects'),
    Project = require('../controllers/Projects');

router.route('/')
    .get(Project.index)
    .post(Project.createProject)

router.get('/new', Project.renderNewForm)

router.route('/:id')
    .get(Project.showProject)
    .put(Project.updateProject)
    .delete(Project.deleteProject)

router.get('/:id/edit', Project.editForm)

module.exports = router;
