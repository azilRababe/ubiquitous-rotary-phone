const monoogse = require('mongoose'),
    Schema = monoogse.Schema;

const Tasks = new Schema({
    assignerId: { type: [Schema.Types.ObjectId], ref: 'Employees' },
    assignedTo: { type: [Schema.Types.ObjectId], ref: 'Employees' },
    assignDate: { type: Date, Default: Date.now },
    startDate: Date,
    dueDate: Date,
    Notes: String,
    Status: ['Upcoming', 'In progress', 'Done'],
})

module.exports = monoogse.model('Tasks', Tasks)