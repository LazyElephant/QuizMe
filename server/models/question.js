"use strict";

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    topic: { type: String, required: true, index: true },
    // type values: "multiple-choice", "multiple-answer", "short-answer"
    type: {type: String, required: true},
    question: { type:String, required: true, minLength: 10 },
    // answer: the correct answer(s) of the question
    answers: [{type: String, required: true}],
    // choices: all possible choices, including false options if necessary
    // ignored for short-answer questions
    choices: [String],
});

questionSchema.pre('save', function(next) {
    if (this.type !== "short-answer") {
        
        for( let i = 0; i < this.answers.length; i++ ) {
            let index = Math.floor( Math.random() * this.choices.length );
            this.choices.splice( index, 0, this.answers[i]);
        }
    }
    console.log(this.choices);
    next();
});

module.exports = mongoose.model("Question", questionSchema);