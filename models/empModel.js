const mongoose = require('mongoose');
var schema = mongoose.Schema;

const empSchema = new schema({

    Fullname: {
        type: String,
        required: true
    },
    CIN: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date
    },
    phoneNumber: String,
    Position: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Department: String,
    salary: Number,
    addedDate: { type: Date, default: Date.now },


})

module.exports = mongoose.model('Employee', empSchema);
