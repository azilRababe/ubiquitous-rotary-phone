const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

const Employees = new Schema({
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
    join: { type: Date, default: Date.now },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Projects'
    },
    leaveId: {
        type: Schema.Types.ObjectId,
        ref: 'Leaves'
    },
    taksId: {
        type: Schema.Types.ObjectId,
        ref: 'Tasks'
    }
})

Employees.plugin(passportLocalMongoose);
module.exports = mongoose.model('Employees', Employees);
