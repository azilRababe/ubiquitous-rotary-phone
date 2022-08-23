const Departments = require('../models/Departments');

module.exports.index = async (req, res) => {
    const Department = await Departments.find({})
        .populate({ path: 'depEmployees', select: 'Firstname Lastname -_id' })
        .populate({ path: 'HOD_Id', select: 'Firstname Lastname -_id' })
        .exec((err, Department) => {
            if (err) { res.status(404).json({ message: err }) }
            res.render('Department/index', { Department })
        })
}

module.exports.showDep = async (req, res) => {
    const { id } = req.params
    const CurrentUser = req.user
    const Department = await Departments.findById(id)
        .populate('depEmployees')
        .populate('HOD_Id')
        .exec((err, Department) => {
            console.log(`current user : ${CurrentUser._id} HOD: ${Department.HOD_Id._id}`)
            return res.render('Department/showDep', { Department })
        })
}