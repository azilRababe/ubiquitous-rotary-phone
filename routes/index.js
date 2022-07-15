const express = require('express'),
    router = express.Router(),
    User = require('../models/empModel'),
    bcrypt = require('bcryptjs'),
    mongoose = require('mongoose');

router.get('/', (req, res) => { res.render('login') })
router.get('/Dashboard', (req, res) => { res.render('Dashboard') })
router.get('/Profil', (req, res) => { res.render('viewProfil') })

// login
router.post('/', async (req, res) => {
    const { Email, Password } = req.body
    const Exists = await User.findOne({ Email })
    const matchPassword = await bcrypt.compare(Password, User.Password)
    if (matchPassword) {
        res.send('loged in succeccfuly')
    } else { res.send('Your need permision to access this page') }
})

module.exports = router;