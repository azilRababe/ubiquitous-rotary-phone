const Departments = require("../models/Departments");
// const Users = require('../models/Users')
const Employee = require("../models/Employees"),
  MongoDB = require("../config/db"),
  { faker } = require("@faker-js/faker"),
  _ = require("lodash");
const { default: mongoose } = require("mongoose");

let Employees = [];
for (let i = 0; i < 5; i += 1) {
  const Firstname = faker.name.firstName();
  const Lastname = faker.name.lastName();
  let newEmployee = {
    Phone: faker.phone.number(),
    Email: faker.internet.email(Firstname, Lastname),
    bloodType: faker.helpers.arrayElement([
      "A+",
      "A-",
      "B+",
      "B-",
      "O+",
      "O-",
      "AB+",
      "AB-",
    ]),
    Nationality: faker.address.country(),
    driverLicence: faker.helpers.arrayElement(["Yes", "No"]),
    birthDate: faker.date.birthdate(),
    Gender: faker.helpers.arrayElement(["Male", "Female", "Other"]),
    Location: faker.address.city(),
    Firstname: Firstname,
    Lastname: Lastname,
    username: faker.internet.userName(Firstname, Lastname),
    userRole: faker.helpers.arrayElement(["Employee", "HOD", "Admin", "HR"]),
    JD: faker.company.bsBuzz(),
    projectId: faker.database.mongodbObjectId(),
    leaveId: faker.database.mongodbObjectId(),
    taksId: faker.database.mongodbObjectId(),
  };
  Employees.push(newEmployee);
}
const seedDB = async () => {
  // await Employee.deleteMany({});
  await Employee.insertMany(Employees);
};

seedDB().then(() => {
  mongoose.connection.close();
});
