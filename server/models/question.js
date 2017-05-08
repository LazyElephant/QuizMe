"use strict";

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    topic: { type: String, required: true, index: true },
    question: { type:String, required: true, minLength: 10 },
    answers: [{type: String, required: true}],
    nonAnswers: [{type: String, required: true}],
});

module.exports = mongoose.model("Question", questionSchema);