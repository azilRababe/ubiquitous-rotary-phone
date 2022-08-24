const Leaves = require('../models/Leaves');

module.exports.index = async (req, res) => {
    const Leave = await Leaves.find({})
        .populate({ path: 'employeeId', select: 'Firstname Lastname -_id' })
        .exec((err, Leave) => {
            if (err) { req.flash('error', 'Something went wrong') }
            res.render('Leave/index', { Leave })
        })
}

module.exports.renderNewForm = (req, res) => {
    res.render('Leave/new')
}

module.exports.createLeave = async (req, res) => {
    const body = req.body
    const Leave = new Leaves(body)
    if (Leave.dueDate < Leave.startDate) {
        req.flash('error', 'The due date should be greater than the start data')
        return res.redirect('/Leave/new')
    }
    Leave.save()
    req.flash('success_msg', 'New Leave has been added successfully')
    res.redirect('/Leave')
}

module.exports.updateLeave = async (req, res) => {
    const body = req.body
    const Leave = await Leaves.findByIdAndUpdate(req.params.id, body)
    req.flash('success_msg', 'Changes saved successfully')
    res.redirect('/Leave')
}


module.exports.editForm = async (req, res) => {
    const { id } = req.params
    const Leave = await Leaves.findById({ _id: id })
    res.render('Leave/edit', { Leave })
}

module.exports.deleteLeave = async (req, res) => {
    await Leaves.findOneAndDelete({ _id: req.params.id })
    req.flash('success_msg', 'Leave deleted successfully')
    res.redirect('/Leave')
}