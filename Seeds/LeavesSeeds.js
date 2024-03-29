const Leave = require("../models/Leaves"),
  MongoDB = require("../config/db"),
  { faker } = require("@faker-js/faker"),
  _ = require("lodash");
const { default: mongoose } = require("mongoose");

let Leaves = [];
for (let i = 0; i < 5; i += 1) {
  let newLeave = {
    employeeId: faker.database.mongodbObjectId(),
    startDate: faker.date.future(),
    dueDate: faker.date.future(),
    leaveStatus: faker.helpers.arrayElement(["Yes", "No"]),
  };
  Leaves.push(newLeave);
}

const seedDB = async () => {
  await Leave.deleteMany({});
  await Leave.insertMany(Leaves);
};

seedDB().then(() => {
  mongoose.connection.close();
});
