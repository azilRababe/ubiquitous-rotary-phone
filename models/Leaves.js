const { monoogse, default: mongoose } = require('mongoose')
const Schema = mongoose.Schema;

const Leaves = new Schema({
    employeeId: {
        type: [Schema.Types.ObjectId],
        ref: 'Employees'
    },
    submissionDate: { type: Date, default: Date.now },
    startDate: Date,
    dueDate: Date,
    leaveStatus: ['Yes', 'No'],
    Proof: Buffer
})

module.exports = mongoose.model('Leaves', Leaves);