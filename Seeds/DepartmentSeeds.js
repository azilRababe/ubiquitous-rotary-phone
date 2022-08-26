const Department = require("../models/Departments"),
  MongoDB = require("../config/db"),
  { faker } = require("@faker-js/faker"),
  _ = require("lodash");
const { default: mongoose } = require("mongoose");

let Departments = [];
for (let i = 0; i < 10; i += 1) {
  let newDepartment = {
    Name: faker.helpers.arrayElement([
      "Marketing",
      "Finance",
      " Operations management",
      " Human Resource",
      "IT",
    ]),
    HOD: faker.database.mongodbObjectId(),
    Employees: faker.database.mongodbObjectId(),
    Description: faker.lorem.sentence(),
  };
  Departments.push(newDepartment);
}

const seedDB = async () => {
  await Department.deleteMany({});
  await Department.insertMany(Departments);
};

seedDB().then(() => {
  mongoose.connection.close();
});
