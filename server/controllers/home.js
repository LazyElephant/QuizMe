"use strict";

module.exports.index = function (req, res) {
  res.status(200).render('index');
}

module.exports.login = function (req, res) {
  res.status(200).render('login');
}

