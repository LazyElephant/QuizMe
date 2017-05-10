"use strict";

const secrets = require( './config/secrets');
const {join} = require( 'path');
const express = require( 'express');
const bodyParser = require( 'body-parser');
const cors = require('cors');

//require( './config/db');

const app = module.exports = express();
// disable cors when no longer necessary
app.use(cors());
app.use(express.static( join(__dirname, "public") ));
app.use(bodyParser.json());
app.get('/', (req, res) => { res.status(200).sendFile( join(__dirname, 'public', 'index.html'));});
app.get('/api/questions', (req, res) => { 
    res.status(200).json({
        questions: [{
            topic: "C++",
            question: "Which variable initialization causes a compiler error if var2 is a larger data type?",
            answers: [{text: "int var1 = var2", correct: false}, {text:"int var1{ var2 }", correct: true}]
        }]
    });
});

app.listen(secrets.PORT, () => {
    console.log("Server listening on", secrets.PORT);
});


