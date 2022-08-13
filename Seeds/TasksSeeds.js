const Task = require('../models/Tasks'),
    MongoDB = require('../config/db'),
    { faker } = require('@faker-js/faker'),
    _ = require("lodash");
const { default: mongoose } = require('mongoose');


let Tasks = [];
for (let i = 0; i < 10; i += 1) {
    let newTask = {
        taskId: faker.random.alphaNumeric(7),
        assignerId: faker.database.mongodbObjectId(),
        assignDate: faker.date.recent(),
        startDate: faker.date.soon(),
        dueDate: faker.date.soon(),
        Notes: faker.lorem.sentences(),
        taskReport: faker.lorem.paragraph(),
        assignedTo: faker.database.mongodbObjectId(),
        taskStatus: faker.helpers.arrayElement(['Upcoming', 'In progress', 'Done']),
    };
    Tasks.push(newTask);

}

const seedDB = async () => {
    await Task.deleteMany({});
    await Task.insertMany(Tasks);
}

seedDB().then(() => {
    mongoose.connection.close();
})
