const express = require('express'),
    router = express.Router(),
    Projects = require('../models/Projects'),
    Project = require('../controllers/Projects');
const { isLoggedIn, authRole } = require('../middlewares/middleware')

router.route('/')
    .get(isLoggedIn, authRole('HR'), Project.index)
    .post(isLoggedIn, authRole('HR'), Project.createProject)

router.get('/new', isLoggedIn, authRole('HR'), Project.renderNewForm)

router.route('/:id')
    .get(isLoggedIn, authRole('HR'), Project.showProject)
    .put(isLoggedIn, authRole('HR'), Project.updateProject)
    .delete(isLoggedIn, authRole('HR'), Project.deleteProject)

router.get('/:id/edit', isLoggedIn, authRole('HR'), Project.editForm)

module.exports = router;
