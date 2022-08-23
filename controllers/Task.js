const Tasks = require('../models/Tasks');


module.exports.index = async (req, res) => {
    const Task = await Tasks.find({})
    res.render('Task/index', { Task })
}

module.exports.renderNewForm = (req, res) => {
    res.render('Task/new')
}

module.exports.createTask = async (req, res) => {
    const Task = new Tasks({ ...req.body.Tasks })
    Task.save()
    req.flash('success_msg', 'OPS, NEW TASK HAS BEEN ASSINED TO YOU')
    res.render('Task/show')

}

module.exports.showTask = async (req, res) => {
    const Task = await Tasks.findById(req.params.id)
        .populate({ path: 'assignerId', select: 'Firstname Lastname -_id' })
        .populate({ path: 'assignedTo', select: 'Firstname Lastname -_id' })
        .exec((err, Task) => {
            if (err) { req.flash('error', 'Something went wrong') }
            res.render('Task/Show', { Task })
        })
}

module.exports.editForm = async (req, res) => {
    const { id } = req.params
    const Task = await Tasks.findById({ _id: id })
    res.render('Task/edit', { Task })
}

module.exports.updateTask = async (req, res) => {
    const body = req.body
    const Task = await Tasks.findByIdAndUpdate(req.params.id, body)
    req.flash('success_msg', 'GOT SOME CHANGES')
    res.render('Task/Show', { Task })
}

module.exports.deleteTask = async (req, res) => {
    const { id } = req.params
    await Tasks.findOneAndDelete({ _id: id })
    req.flash('success_msg', 'OMG! YOU JUST DELETED A TASK')
    res.redirect('/Task')
}