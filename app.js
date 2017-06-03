var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
const Question = require('./models/question');
require( './config/db');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/api/questions', (req, res) => { 
    Question.find({}, {__v:0})
        .then( (docs) => res.status(200).json( docs ))
        .catch( err => res.status(500).json({error: err}))
});
app.get('*', (req, res, next) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  let error = req.app.get('env') === 'development' ? err : err.message;

  // render the error page
  res.status(err.status || 500);
  res.json({error: error});
});

module.exports = app;
