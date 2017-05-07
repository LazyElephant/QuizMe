"use strict";

const passport = require('passport');
require('../config/passport');

module.exports.Login = passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' });
module.exports.Logout = (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/login');
}

module.exports.isAuthenticated = (req, res, next) => {
    if( !req.user ) return res.redirect('/login');
    next();
}