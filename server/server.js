"use strict";

const secrets = require( './config/secrets');
const {join} = require( 'path');
const express = require( 'express');
const bodyParser = require( 'body-parser');
const Question = require('./models/question');
const cors = require('cors');
require( './config/db');

const app = module.exports = express();
app.use(cors());
app.use(express.static( join(__dirname, "public") ));
app.use(bodyParser.json());
app.get('/', (req, res) => { res.status(200).sendFile( join(__dirname, 'public', 'index.html'));});
app.get('/api/questions', (req, res) => { 
    Question.find({}, {_id:0, __v:0})
        .then( (docs) => res.status(200).json( docs ))
        .catch( err => res.status(500).json({error: err}))
});

app.listen(secrets.PORT, () => {
    console.log("Server listening on", secrets.PORT);
});


