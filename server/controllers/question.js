"use strict"

const Question = require('../models/question');

module.exports = {

create: (question, language, trueAnswers, falseAnswers) => {
    let newQuestion = new Question();

    newQuestion.question = question;
    newQuestion.answers = [];
    newQuestion.answers.push({
        language: language,
        true: [...realAnswers],
        false: [...falseAnswers]
    });
    newQuestion.save( (err) => {
        if (err) return {status: "error", error: err};

        return {status: "success"};
    });
},

random: (numToTake, skip) => {
    Question.findOne({})
        .skip(skip)
        .exec( (err, question ) => {
            if (err) return { status: "error", error: err };
            return {status: "success", question: question};
        });
}
};