import React from 'react'
import Card from './Card'


export default class QuestionCard extends React.Component {
    render() {
        return ( this.props.question != null ? 
                    <Card>
                        <Topic {...this.props.question} />
                        <Question {...this.props.question} />
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


const Question = ({question, answers}) => 
    <div className="question">
        <h3>{question}</h3>
        <ul>
            {
                answers.map( (answer) => <li>{answer}</li>)
            }
        </ul>
    </div>
