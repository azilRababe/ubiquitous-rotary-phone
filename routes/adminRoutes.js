const express = require('express'),
    router = express.Router(),
    User = require('../models/empModel'),
    bcrypt = require('bcryptjs');

router.get('/addEmployee', (req, res) => { res.render('admin/addEmployee') })
router.get('/employeesList', (req, res) => { res.render('admin/employeesList') })
router.get('/editEmployee', (req, res) => { res.render('admin/editEmployee') })

// add New employee
router.post('/addEmployee', async (req, res) => {
    const { Fullname, CIN, birthDate, phoneNumber, Position, Department, salary, Email, Password } = req.body;
    //    check empty strings
    if (!Fullname || !CIN || !birthDate || !phoneNumber || !Position || !Department || !salary || !Email || !Password) {
        console.log('All fields required')
    }
    // exists
    const userExists = await User.findOne({ Email })
    if (userExists) {
        console.log('Email already exists')
    }
    else {
        bcrypt.genSalt(10, async (err, salt) => {
            bcrypt.hash(Password, salt, async (err, hash) => {
                // Store hash in your password DB.
                const user = new User({
                    Fullname,
                    CIN,
                    birthDate,
                    phoneNumber,
                    Position,
                    Email,
                    Password: hash,
                    Department,
                    salary
                })
                await user.save();
                res.send('Employee added successfully')
            });
        });
    }

})

module.exports = router;