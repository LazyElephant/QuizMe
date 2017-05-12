import React from 'react';

export default class Answers extends React.Component {
    constructor(props) {
        super(props);

        this.answerTypes = {
            "multiple-choice": MultipleChoice,
            "multiple-answer": MultipleAnswer,
            "short-answer": ShortAnswer
        };
    }
    isCorrect() {
        return true;
    }

    render() {
        return this.answerTypes[this.props.type](this.props);
    }
}

const MultipleChoice = ({choices}) =>  
            <ul>
                {
                    choices.map( (choice, index) => 
                        <li 
                            className="answer-item"
                            key={`${index}`}>{`${index+1}. ${choice}`}
                        </li>)
                }
            </ul>

const MultipleAnswer = ({choices}) =>
            <ul>
                {
                    choices.map( (choice, index) => 
                        <li 
                            className="answer-item"
                            key={`${index}`}>{`${index+1}. ${choice}`}
                        </li>)
                }
            </ul>


const ShortAnswer = () =>
            <input type="text" className="answer-item" placeholder="Answer"/>
