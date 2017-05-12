import React from 'react';
import Card from './Card';
import Answers from './Answers';

export default class QuestionCard extends React.Component {

    checkAnswers() {
        if( this.answerComponent.isCorrect() )
            this.props.handleSubmit();
    }

    render() {
        return ( 
            <Card className={this.props.className}>
                <Topic {...this.props.question} />
                <div className="question">
                    <h3>{this.props.question.question}</h3>
                    <Answers {...this.props.question} ref={ref=>this.answerComponent=ref}/>
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


