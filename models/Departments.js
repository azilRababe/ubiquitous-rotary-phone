
const mongoose = require('mongoose'),
    schema = mongoose.Schema;

const Departments = new schema({
    departmentId: { type: String, unique: true },
    departmentName: { type: String },
    Description: String
})

module.exports = mongoose.model('Departments', Departments);