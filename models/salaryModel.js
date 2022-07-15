const mongoose = require('mongoose'),
    schema = mongoose.Schema;

const salarySchema = new schema({
    CIN: {
        type: mongoose.Types.ObjectId,
        ref: 'empModel',
        required: true
    },
    labourHours: {
        type: Number
    },
    overTime: Number,
    Total: Number,
    details: String,
})

module.exports = mongoose.model('Salary', salarySchema);