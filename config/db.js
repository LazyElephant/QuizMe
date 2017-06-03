"use strict";

const secrets = require('./secrets');
const mongoose = require('mongoose');
// replace the deprecated mongoose promise
mongoose.Promise = global.Promise;
// create a mongodb connection with mongoose
mongoose.connect(secrets.DB_URI)
    .then(() => {
        console.log('Mongoose connected to ' + secrets.DB_URI);
    }).catch(err => {
        console.error("Mongoose connection error: " + err);
    });

// create listeners for db connection events
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected'); 
    process.exit(1);
});

let closeConnection = (msg, done) => {
    mongoose.connections.close( () => {
        console.log(msg);
        done();
    });
};

// create listeners for process termination signals
// Nodemon restart
process.once('SIGUSR2', () => {
    closeConnection('Nodemon restart', () => process.kill(process.pid, 'SIGUSR2') );
});
// App termination
process.on('SIGINT', () => {
    closeConnection('App termination', () => process.exit(0) );
});
// Heroku termination
process.on('SIGTERM', () => {
    closeConnection('Heroku app termination', () => process.exit(0) );
});