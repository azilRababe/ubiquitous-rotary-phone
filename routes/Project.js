const express = require('express'),
    router = express.Router(),
    Projects = require('../models/Projects'),
    Project = require('../controllers/Projects');
const { isLoggedIn, authRole } = require('../middlewares/middleware')

router.route('/')
    .get(isLoggedIn, Project.index)
    .post(isLoggedIn, Project.createProject)

router.get('/new', isLoggedIn, Project.renderNewForm)

router.route('/:id')
    .get(isLoggedIn, Project.showProject)
    .put(isLoggedIn, Project.updateProject)
    .delete(isLoggedIn, Project.deleteProject)

router.get('/:id/edit', isLoggedIn, Project.editForm)

module.exports = router;
