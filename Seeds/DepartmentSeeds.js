const Department = require('../models/Departments'),
    MongoDB = require('../config/db'),
    { faker } = require('@faker-js/faker'),
    _ = require("lodash");
const { default: mongoose } = require('mongoose');


let Departments = [];
for (let i = 0; i < 10; i += 1) {
    let newDepartment = {
        departmentId: faker.random.alphaNumeric(5),
        departmentName: faker.commerce.department(),
        depEmployees: faker.database.mongodbObjectId(),
        Description: faker.lorem.paragraph()
    };
    Departments.push(newDepartment);

}

const seedDB = async () => {
    await Department.deleteMany({});
    await Department.insertMany(Departments);
}

seedDB().then(() => {
    mongoose.connection.close();
})
