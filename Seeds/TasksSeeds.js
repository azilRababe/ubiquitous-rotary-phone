const Task = require('../models/Tasks'),
    MongoDB = require('../config/db'),
    { faker } = require('@faker-js/faker'),
    _ = require("lodash");
const { default: mongoose } = require('mongoose');


let Tasks = [];
for (let i = 0; i < 10; i += 1) {
    let newTask = {
        assignerId: faker.database.mongodbObjectId(),
        assignedTo: faker.database.mongodbObjectId(),
        assignDate: faker.date.recent(),
        startDate: faker.date.soon(),
        dueDate: faker.date.soon(),
        Notes: faker.lorem.sentences(),
        Status: faker.helpers.arrayElement(['Upcoming', 'In progress', 'Done']),
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
