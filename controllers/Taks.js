const Tasks = require('../models/Tasks');


module.exports.index = async (req, res) => {
    const Task = await Tasks.find({}).populate('assignerId')
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
    const Task = await Tasks.findById(req.params.id).populate('employeeId')
    if (!Task) {
        req.flash('error_msg', 'OPS! TASK NOT FOUND')
    }
    res.render('Task/Show', { Task })
}

module.exports.editForm = (req, res) => {
    res.render('Task/edit')
}

module.exports.updateTask = async (req, res) => {
    const Task = await Tasks.findByIdAndUpdate(req.params.id, { ...req.body.Tasks }, (err, Task) => {
        if (err) { res.send(err) }
        req.flash('success_msg', 'GOT SOME CHANGES')
        res.render('Task/Show', { Task })
    })
}

module.exports.deleteTask = async (req, res) => {
    await Tasks.findOneAndDelete(req.params.id)
    req.flash('success_msg', 'OMG! YOU JUST DELETED A TASK')
    res.redirect('/Task/Show')
}