const Project = require('../models/Projects'),
    MongoDB = require('../config/db'),
    { faker } = require('@faker-js/faker'),
    _ = require("lodash");
const { default: mongoose } = require('mongoose');


let Projects = [];
for (let i = 0; i < 10; i += 1) {
    let newProject = {
        employeeId: faker.database.mongodbObjectId(),
        Title: faker.random.word(),
        startEnd: faker.date.future(),
        dueDate: faker.date.future(),
        Status: faker.helpers.arrayElement(['Upcoming', 'In progress', 'Done']),
        createdBy: faker.name.findName()
    };
    Projects.push(newProject);

}

const seedDB = async () => {
    await Project.deleteMany({});
    await Project.insertMany(Projects);
}

seedDB().then(() => {
    mongoose.connection.close();
})
