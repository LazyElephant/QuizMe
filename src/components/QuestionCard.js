import React from 'react';
import Card from 'material-ui/Card';
import marked from 'marked';
import {MultipleChoice, ShortAnswer} from './Answers';

export default class QuestionCard extends React.Component {
    constructor(props) {
        super(props);

        this.checkAnswers = this.checkAnswers.bind(this);
    }
    checkAnswers() {
        if( this.answerComponent.isCorrect() )
            this.props.handleSubmit();
    }


    render() {
        const { question, className } = this.props;
        let text = marked(`### ${question.text}`, {sanitized: true});
        return (
            <Card className={["Card", className].join(' ')}>
                <div className="topic">
                    <p>{question.topic}</p>
                </div>
                <div className="question">
                    <div dangerouslySetInnerHTML={{ __html:text}}></div>
                    {   
                        question.type === "short-answer" ?
                            <ShortAnswer {...question} ref={ref=>this.answerComponent=ref}/> :
                            <MultipleChoice {...question} ref={ref=>this.answerComponent=ref}/>
                    }
                    <button
                        className="submit"
                        onClick={this.checkAnswers}>Next
                    </button>
                </div>
            </Card>
        );
    }
}

