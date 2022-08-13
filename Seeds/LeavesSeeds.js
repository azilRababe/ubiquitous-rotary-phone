const Leave = require('../models/Leaves'),
    MongoDB = require('../config/db'),
    { faker } = require('@faker-js/faker'),
    _ = require("lodash");
const { default: mongoose } = require('mongoose');


let Leaves = [];
for (let i = 0; i < 10; i += 1) {
    let newLeave = {
        leaveId: faker.random.alphaNumeric(8),
        employeeId: faker.database.mongodbObjectId(),
        leaveStart: faker.date.soon(),
        leaveEnd: faker.date.soon(),
        leaveStatus: faker.helpers.arrayElement['Yes', 'No'],
        attachment: faker.system.commonFileName()
    };
    Leaves.push(newLeave);

}

const seedDB = async () => {
    await Leave.deleteMany({});
    await Leave.insertMany(Leaves);
}

seedDB().then(() => {
    mongoose.connection.close();
})
