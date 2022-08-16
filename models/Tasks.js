const monoogse = require('mongoose'),
    Schema = monoogse.Schema;

const Tasks = new Schema({
    taskId: { type: String, unique: true },
    assignerId: { type: Schema.Types.ObjectId, ref: 'Employees' },
    assignDate: { type: Date, Default: Date.now },
    startDate: Date,
    dueDate: Date,
    Notes: String,
    taskReport: String,
    assignedTo: { type: [Schema.Types.ObjectId], ref: 'Employees' },
    taskStatus: ['Upcoming', 'In progress', 'Done'],
})

module.exports = monoogse.model('Tasks', Tasks)