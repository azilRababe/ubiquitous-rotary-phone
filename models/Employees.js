const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

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
    userRole: ['Employee', 'HOD', 'Admin', 'HR'],
    JD: String,
})

Employees.plugin(passportLocalMongoose);
module.exports = mongoose.model('Employees', Employees);
