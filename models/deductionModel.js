const mongoose = require('mongoose'),
    schema = mongoose.Schema;

const deductionSchema = new schema({
    salary_id: {
        type: mongoose.Types.ObjectId,
        ref: 'salaryModel'
    },
    CIN: {
        type: mongoose.Types.ObjectId,
        ref: 'empModel'
    },
    description: String,
    Date: Date,
    amount: String,
})

module.exports = mongoose.model('Deduction', deductionSchema);