const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employees = new Schema({
    employeeId: { type: String, unique: true },
    Phone: String,
    Email: { type: String, unique: true },
    bloodType: String,
    Nationality: String,
    driverLicence: ['Yes', 'No'],
    birthDate: Date,
    Gender: ['Male', 'Female', 'Other'],
    Location: String,
    Firstname: String,
    Lastname: String,
    username: String,
    password: String,
    userRole: ['Employee', 'HOD', 'Admin', 'HR'],
    JD: String,
})


module.exports = mongoose.model('Employees', Employees);
