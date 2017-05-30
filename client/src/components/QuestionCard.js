import React from 'react';
import Card from './Card';
import marked from 'marked';
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
        let question = marked(`### ${this.props.question.question}`, {sanitized: true});
        return (
            <Card className={this.props.className}>
                <div className="topic">
                    <p>{this.props.question.topic}</p>
                </div>
                <div className="question">
                    <div dangerouslySetInnerHTML={{ __html:question}}></div>
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

