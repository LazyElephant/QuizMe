"use strict";

const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    language: { type: String, required: true, index: true },
    true: [{type: String, required: true}],
    false: [{type: String, required: true}],
});

const questionSchema = new mongoose.Schema({
    question: { type:String, required: true, minLength: 10 },
    answers: [answerSchema],
});

module.exports = mongoose.Model("Question", questionSchema);