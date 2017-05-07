"use strict";
// load secrets
const secrets = require( './config/secrets');
// load external dependencies
const path = require( 'path');
const express = require( 'express');
const session = require( 'express-session');
const logger = require( 'morgan');
const bodyParser = require( 'body-parser');
const passport = require( 'passport');
// const routes
const homeRouter = require('./routes/home');

// require database connection
require( './config/db');

//create the server
const app = module.exports = express();

// set view engine to pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// add console logging of request information
app.use(logger('dev'));

// parse json requests and add fields to the request
app.use(bodyParser.urlencoded({extended: true}));

// set public path and set cache time to one day
app.use(express.static(path.join(__dirname, "/assets") /*, { maxAge: 86400000}*/));

// add session support
app.use(session({ secret: secrets.SESSION_SECRET, resave: false, saveUninitialized: false }));
// add passport
app.use(passport.initialize());
app.use(passport.session());
// add routes
app.use('/', homeRouter);

// catch all others in 404
app.use( (req, res, done) => {
    res.status(404).render('errors/404.pug');
});

// start the server
app.listen(secrets.PORT, () => {
    console.log("Server listening on", secrets.PORT);
});


