"use strict";

const mongoose = require('mongoose');
// change schema to represent different types of questions
// answers can have 1 or many
// choices can have zero or many
// 0 for short answer question
// need to add type of question
const questionSchema = new mongoose.Schema({
    topic: { type: String, required: true, index: true },
    type: {type: String, required: true},
    question: { type:String, required: true, minLength: 10 },
    answers: [{type: String, required: true}],
    choices: [String],
});

// format documents for consumption by react app
questionSchema.statics.formatAll = (questions) => questions.map( format );

questionSchema.statics.format = format;

// TODO: This will most likely be unneccessary after refactor is finished
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