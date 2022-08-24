
const Employees = require('../models/Employees'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcryptjs');

module.exports.Profil = async (req, res) => {
    const Employee = await Employees.findById({ _id: req.params.id })
    res.render(`User/Profil`, { Employee })
}

module.exports.getLogin = (req, res) => {
    res.render('User/login')
}

module.exports.login = async (req, res) => {
    passport.authenticate('local', function (err, Employees, info) {
        if (err) {
            req.flash('error', 'Something went wrong')
            return res.redirect('/login')
        } else {
            if (!Employees) {
                req.flash('error_msg', 'Username or password incorrect')
                return res.redirect('/login')
            } else {
                req.login(Employees, function (err) {
                    if (err) {
                        req.flash('error', 'Something went wrong')
                        return res.redirect('/login')
                    } else {
                        const token = jwt.sign({
                            userId: Employees._id,
                            username: Employees.username
                        }, process.env.SECRET,
                            { expiresIn: '24h' })
                        req.flash('success_msg', 'Welcome to your dashboard')
                        return res.redirect(`/Profil/${Employees._id}`)
                    }
                })
            }
        }
    })(req, res);
}

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            req.flash('error_msg', 'Logout failed')
            res.send(err)
        }
        req.flash('error', 'See you next time')
        res.redirect('/login');
    });
}