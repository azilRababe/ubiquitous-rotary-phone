const express = require('express'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/HRMS', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('MONGO CONNECTION OPEN!!') })
    .catch((err) => { console.log(err) })


