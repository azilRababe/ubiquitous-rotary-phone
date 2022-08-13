const Project = require('../models/Projects'),
    MongoDB = require('../config/db'),
    { faker } = require('@faker-js/faker'),
    _ = require("lodash");
const { default: mongoose } = require('mongoose');


let Projects = [];
for (let i = 0; i < 10; i += 1) {
    let newProject = {
        projectId: faker.random.alphaNumeric(10),
        employeeId: faker.database.mongodbObjectId(),
        projectTitle: faker.random.word(),
        projectStart: faker.date.future(),
        projectEnd: faker.date.future(),
        completetionStatus: faker.helpers.arrayElement(['Upcoming', 'In progress', 'Done']),
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
