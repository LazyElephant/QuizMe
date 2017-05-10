"use strict";

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    topic: { type: String, required: true, index: true },
    question: { type:String, required: true, minLength: 10 },
    answers: [{type: String, required: true}],
    nonAnswers: [{type: String, required: true}],
});

// format documents for consumption by react app
questionSchema.statics.formatAll = (questions) => return questions.map( format );

questionSchema.statics.format = format;

function format(question) {
    let answer = {text:question.answers[0], correct: true};
    let answers = question.nonAnswers.map( na => {return {text: na, correct:false};})
    let index = Math.floor( Math.random() * question.nonAnswers.length );
    answers.splice(index, 0, answer);

    return {
        topic: question.topic,
        question: question.question,
        answers: answers
    };
}
module.exports = mongoose.model("Question", questionSchema);