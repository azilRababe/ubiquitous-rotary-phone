const { default: mongoose } = require('mongoose'),
    express = require('express'),
    app = express(),
    dotenv = require('dotenv').config(),
    bodyParser = require('body-parser'),
    flash = require('connect-flash'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    moment = require('moment'),
    expressLayouts = require('express-ejs-layouts'),
    methodOverride = require('method-override'),
    passport = require('passport'),
    db = require('./config/db'),
    path = require('path'),
    Employee = require('./models/Employees'),
    jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(expressLayouts)
app.use(cookieParser())
app.set('trust proxy', 1)
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: true
}))


app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(Employee.serializeUser());
passport.deserializeUser(Employee.deserializeUser());

const configPass = require('./config/passport')

// connect flash
app.use(flash());

// GLOBAL VARIABLES
app.use((req, res, next) => {
    res.locals.currentUser = req.user
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.moment = moment //date format
    next()
})

//ROUTES
app.use('/', require('./routes/index'))
app.use('/Employee', require('./routes/Employee'))
app.use('/Department', require('./routes/Department'))
app.use('/Task', require('./routes/Task'))
app.use('/Leave', require('./routes/Leave'))
app.use('/Project', require('./routes/Project'))

// app.get('*', (req, res) => {
//     res.status(404).json({ err: 'Page not found' })
// })

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server listening on ${port}`)
})