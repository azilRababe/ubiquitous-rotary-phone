const Employees = require('../models/Employees'),
    bcrypt = require('bcryptjs');

module.exports.getLogin = (req, res) => {
    res.render('User/login')
}

module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    const Employee = await Employees.findOne({ username: username })
    if (Employee) {
        const validPassword = bcrypt.compareSync(password, Employee.password);
        if (validPassword) {
            res.render('User/Profil', { Employee })
        }
        else {
            req.flash('error_msg', 'username or password incorrect')
            res.redirect('/login')
        }
    } else {
        req.flash('error_msg', 'User not found')
        res.redirect('/login')
    }
}
