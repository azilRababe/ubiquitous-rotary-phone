const Departments = require('../models/Departments');

module.exports.index = async (req, res) => {
    const Department = await Departments.find({}).populate('depEmployees', ['Firstname', 'Lastname'])
        .exec((err, Department) => {
            if (err) { req.flash('error', 'Something went wrong') }
            res.render('Department/index', { Department })
        })

}
