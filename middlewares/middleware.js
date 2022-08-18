
const { find } = require('lodash');
const { findByUsername } = require('../models/Employees');
const Employee = require('../models/Employees');


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports.isAdmin = async (req, res, next) => {
    if (req.user.userRole != 'Admin') {
        req.flash('error', 'YOU MUST BE AN ADMIN TO ACCESS THIS PAGE')
        return res.send('you shoud be an admin to access this page')
    }
    next()
}

// module.exports.isEmployee = (req, res, next) => {
//     if (req.user.userRole != 'Employee') {
//         req.flash('error', 'YOU MUST BE AN ADMIN TO ACCESS THIS PAGE')
//         return res.send('you should be')
//     }
//     next()
// }

module.exports.isHR = (req, res, next) => {
    if (req.user.userRole != 'HR') {
        req.flash('error', 'YOU MUST BE AN ADMIN TO ACCESS THIS PAGE')
        return res.send('you cannot access this page')
    }
    next()
}

module.exports.isHOD = (req, res, next) => {
    if (req.user.userRole != 'HOD') {
        req.flash('error', 'YOU MUST BE AN ADMIN TO ACCESS THIS PAGE')
        return res.send('you can not access this page')
    }
    next()
}



