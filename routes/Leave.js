const express = require('express'),
    router = express.Router(),
    Leaves = require('../models/Leaves'),
    Leave = require('../controllers/Leaves');
const { isLoggedIn, isHR, isAdmin, isEmployee } = require('../middlewares/middleware')

router.route('/')
    .get(isLoggedIn, Leave.index)
    .post(isLoggedIn, Leave.createLeave)

router.get('/new', isLoggedIn, Leave.renderNewForm)

router.route('/:id')
    .put(isLoggedIn, Leave.updateLeave)
    .delete(isLoggedIn, Leave.deleteLeave)

router.get('/:id/edit', isLoggedIn, Leave.editForm)

module.exports = router;
