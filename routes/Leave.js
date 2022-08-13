const express = require('express'),
    router = express.Router(),
    Leaves = require('../models/Leaves'),
    Leave = require('../controllers/Leaves');

router.route('/')
    .get(Leave.index)
    .post(Leave.createLeave)

router.get('/new', Leave.renderNewForm)

router.route('/:id')
    .put(Leave.updateLeave)
    .delete(Leave.deleteLeave)

router.get('/:id/edit', Leave.editForm)

module.exports = router;
