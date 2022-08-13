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
    // User = require('./models/Users'),
    methodOverride = require('method-override'),
    // connect db
    db = require('./config/db');


app.use(methodOverride('_method'));
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(expressLayouts)
app.use(cookieParser())
app.set('trust proxy', 1)
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}))

// connect flash
app.use(flash());

// GLOBAL VARIABLES
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.moment = moment //date format
    next()
})

//ROUTES
app.use('/Employee', require('./routes/Employee'))
app.use('/Department', require('./routes/Department'))
app.use('/Task', require('./routes/Task'))
app.use('/Leave', require('./routes/Leave'))
app.use('/Project', require('./routes/Project'))



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server listening on ${port}`)
})