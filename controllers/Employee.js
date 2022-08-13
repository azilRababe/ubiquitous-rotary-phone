const Employees = require('../models/Employees'),
    bcrypt = require('bcryptjs');

module.exports.index = async (req, res) => {
    const Employee = await Employees.find({}).populate('departmentId')
    res.render('Employee/index', { Employee })
}

module.exports.renderNewForm = (req, res) => {
    res.render('Employee/new')
}

module.exports.createEmployee = async (req, res) => {
    const body = req.body
    const Employee = new Employees(body)
    const salt = await bcrypt.genSalt(10);
    Employee.password = await bcrypt.hash(Employee.password, salt);
    Employee.save()
    req.flash('success_msg', 'OLE, A NEW EMPLOYEE ADDED TO THE TEAM')
    res.redirect('/Employee')
}

module.exports.showEmployee = async (req, res) => {
    const Employee = await Employees.findById({ _id: req.params.id }).populate('departmentId')
    if (!Employee) {
        req.flash('error_msg', 'OPS! EMPLOYEE NOT FOUND')
    }
    res.render('Employee/Show', { Employee })
}

module.exports.updateEmployee = async (req, res) => {
    const body = req.body
    const Employee = await Employees.findByIdAndUpdate(req.params.id, body)
    req.flash('success_msg', 'GOT SOME CHANGES')
    res.redirect(`/Employee/${req.params.id}`)
}

module.exports.editForm = async (req, res) => {
    const { id } = req.params
    const Employee = await Employees.findById({ _id: id })
    res.render('Employee/edit', { Employee })
}

module.exports.deleteEmployee = async (req, res) => {
    await Employees.findOneAndDelete({ _id: req.params.id })
    req.flash('success_msg', 'OMG! YOU JUST FIRED AN EMPLOYEE')
    res.redirect('/Employee')
}