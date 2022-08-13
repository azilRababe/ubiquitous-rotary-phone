const Departments = require('../models/Departments');
// const Users = require('../models/Users')
const Employee = require('../models/Employees'),
    MongoDB = require('../config/db'),
    { faker } = require('@faker-js/faker'),
    _ = require("lodash");
const { default: mongoose } = require('mongoose');



let Employees = [];
for (let i = 0; i < 10; i += 1) {
    const Firstname = faker.name.firstName();
    const Lastname = faker.name.lastName();
    let newEmployee = {
        employeeId: faker.random.alphaNumeric(10),
        Phone: faker.phone.number(),
        Email: faker.internet.email(Firstname, Lastname),
        bloodType: faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']),
        Nationality: faker.address.country(),
        driverLicence: faker.helpers.arrayElement(['Yes', 'No']),
        birthDate: faker.date.birthdate(),
        Gender: faker.helpers.arrayElement(['Male', 'Female', 'Ohter']),
        Location: faker.address.city(),
        DepartmentId: faker.random.alphaNumeric(5),
        Firstname: Firstname,
        Lastname: Lastname,
        username: faker.internet.userName(Firstname, Lastname),
        password: faker.internet.password(),
        userRole: faker.helpers.arrayElement(['Employee', 'HOD', 'Admin', 'HR']),
    };
    Employees.push(newEmployee);

}
const seedDB = async () => {
    await Employee.deleteMany({});
    await Employee.insertMany(Employees);
}

seedDB().then(() => {
    mongoose.connection.close();
})

