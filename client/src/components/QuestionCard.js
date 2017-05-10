import React from 'react'
import Card from './Card'

export default class QuestionCard extends React.Component {
    render() {
        return ( this.props.question != null ? 
                    <Card className={this.props.className}>
                        <Topic {...this.props.question} />
                        <Question {...this.props.question} onSubmit={this.props.onSubmit}/>
                    </Card>
                    : 
                    <Card>
                        <p>loading...</p>
                    </Card>
        );
    }
}

const Topic = ({topic}) => 
    <div className="topic">
        <p>{topic}</p>
    </div>


const Question = ({question, answers, onSubmit}) => 
    <div className="question">
        <h3>{question}</h3>
        <ul>
            {
                answers.map( (answer, index) => 
                    <li 
                        className="answer-item"
                        onClick={() => { this._button.disabled = !answer.correct; }}
                        key={`${index}`}>{`${index+1}. ${answer.text}`}
                    </li>)
            }
        </ul>
        <button disabled
            className="submit"
            ref={ ref => this._button = ref }
            onSubmit={onSubmit}>Next
        </button>
    </div>
