
const mongoose = require('mongoose'),
    schema = mongoose.Schema;

const Departments = new schema({
    departmentId: { type: String, unique: true },
    departmentName: { type: String },
    HOD_Id: {
        type: schema.Types.ObjectId,
        ref: 'Employees'
    },
    depEmployees: {
        type: [schema.Types.ObjectId],
        ref: 'Employees'
    },
    Description: String
})

module.exports = mongoose.model('Departments', Departments);