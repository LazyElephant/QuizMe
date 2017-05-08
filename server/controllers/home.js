"use strict";

module.exports.index = function (req, res) {
  res.status(200).sendFile('index.html');
}

// module.exports.login = function (req, res) {
//   res.status(200).render('login');
// }

