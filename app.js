const { default: mongoose } = require('mongoose');

const express = require('express'),
    app = express(),
    dotenv = require('dotenv').config(),
    bodyParser = require('body-parser'),
    flash = require('connect-flash'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    expressLayouts = require('express-ejs-layouts');
// connect db
const db = require('./config/db')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));
app.use(expressLayouts)
app.use(cookieParser())
app.set('trust proxy', 1)
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(flash());

// GLOBAL VARIABLES


//ROUTES
app.use('/', require('./routes/index'))
app.use('/admin', require('./routes/adminRoutes'))
app.use('/employee', require('./routes/employeeRoutes'))
app.use('/manager', require('./routes/managerRoutes'))
app.use('/users', require('./routes/userRoutes'))


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server listening on ${port}`)
})