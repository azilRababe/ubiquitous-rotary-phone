const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const Projects = new Schema({
    projectId: { type: String, unique: true },
    employeeId: { type: [mongoose.Types.ObjectId], ref: 'Employees' },
    projectTitle: String,
    projectStart: Date,
    projectEnd: Date,
    completetionStatus: ['Upcoming', 'In progress', 'Done'],
    createdBy: String
})

module.exports = mongoose.model('Projects', Projects)