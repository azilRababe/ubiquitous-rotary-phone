const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employees = new Schema({
    employeeId: {
        type: String,
    },
    Phone: String,
    Email: { type: String, unique: [true, "Email Already Exists"] },
    bloodType: String,
    Nationality: String,
    driverLicence: ['Yes', 'No'],
    birthDate: String,
    Gender: ['Male', 'Female', 'Other'],
    Location: String,
    departmentId: {
        type: Schema.Types.ObjectId,
        ref: 'Departments'
    },
    Firstname: String,
    Lastname: String,
    username: String,
    password: String,
    userRole: ['Employee', 'HOD', 'Admin', 'HR'],
})


module.exports = mongoose.model('Employees', Employees);
