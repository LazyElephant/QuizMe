import React from 'react'
import Card from './Card'

export default class QuestionCard extends React.Component {
    render() {
        return ( 
            <Card className={this.props.className}>
                <Topic {...this.props.question} />
                <Question 
                    {...this.props.question} 
                    handleSubmit={this.props.handleSubmit}/>
            </Card>
        );
    }
}

const Topic = ({topic}) => 
    <div className="topic">
        <p>{topic}</p>
    </div>


class Question extends React.Component {

    render() {
        return (
        <div className="question">
            <h3>{this.props.question}</h3>
            <ul>
                {
                    this.props.answers.map( (answer, index) => 
                        <li 
                            className="answer-item"
                            key={`${index}`}>{`${index+1}. ${answer.text}`}
                        </li>)
                }
            </ul>
            <button
                className="submit"
                ref={ ref => this._button = ref }
                onClick={this.props.handleSubmit}>Next
            </button>
        </div>
        );
    }
}
