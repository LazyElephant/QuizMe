"use strict";

const passport = require('passport');
const User = require('../models/user');

const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser( (user, done) => {
    done(null, user._id);
});

passport.deserializeUser( (id, done) => {
    User.findById(id, (err, user) => {
        if (err) { return done(err); }
        done(null, user)
    });
});

passport.use(new LocalStrategy((username, password, done) => {

    User.findOne({ username: username }, function( err, user ) {

        if (err) return done(err);
        if (!user) return done( null, false );
        if (!user.verifyPassword(password)) { return done(null, false); }

        return done(null, user);
    });
}));