import React from 'react';
import Card from './Card';
import {MultipleChoice, ShortAnswer} from './Answers';

export default class QuestionCard extends React.Component {
    constructor(props) {
        super(props)
    }

    checkAnswers() {
        if( this.answerComponent.isCorrect() )
            this.props.handleSubmit();
    }


    render() {
        return (
            <Card className={this.props.className}>
                <div className="topic">
                    <p>{this.props.question.topic}</p>
                </div>
                <div className="question">
                    <h3>{this.props.question.question}</h3>
                    {   
                        this.props.question.type === "short-answer" ?
                            <ShortAnswer {...this.props.question} ref={ref=>this.answerComponent=ref}/> :
                            <MultipleChoice {...this.props.question} ref={ref=>this.answerComponent=ref}/>
                    }
                    <button
                        className="submit"
                        onClick={this.checkAnswers.bind(this)}>Next
                    </button>
                </div>
            </Card>
        );
    }
}

