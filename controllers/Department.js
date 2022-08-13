const Departments = require('../models/Departments');

module.exports.index = async (req, res) => {
    const Department = await Departments.find({})
    res.render('Department/index', { Department })
}
