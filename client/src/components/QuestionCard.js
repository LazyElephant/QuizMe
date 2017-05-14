import React from 'react';
import Card from './Card';
import {MultipleAnswer, MultipleChoice, ShortAnswer} from './Answers';

export default class QuestionCard extends React.Component {
    constructor(props) {
        super(props)

        this.strategies = {
            "multiple-choice": MultipleChoice,
            "multiple-answer": MultipleAnswer,
            "short-answer": ShortAnswer
        }
    }

    checkAnswers() {
        if( this.answerComponent.isCorrect() )
            this.props.handleSubmit();
    }


    render() {
        return this.renderComponent(this.strategies[this.props.question.type]);
    }

    // AnswerComponent must have a isCorrect method
    renderComponent(AnswerComponent) {
        return (
            <Card className={this.props.className}>
                <Topic {...this.props.question} />
                <div className="question">
                    <h3>{this.props.question.question}</h3>
                    <AnswerComponent {...this.props.question} ref={ref=>this.answerComponent=ref}/>
                    <button
                        className="submit"
                        onClick={this.checkAnswers.bind(this)}>Next
                    </button>
                </div>
            </Card>
        );
    }
}


const Topic = ({topic}) => 
    <div className="topic">
        <p>{topic}</p>
    </div>


