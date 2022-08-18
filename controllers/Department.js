const Departments = require('../models/Departments');

module.exports.index = async (req, res) => {
    const Department = await Departments.find({}).populate({ path: 'depEmployees', select: 'Firstname Lastname -_id' })
        .exec((err, Department) => {
            if (err) { req.flash('error', 'Something went wrong') }
            res.render('Department/index', { Department })
        })
}
