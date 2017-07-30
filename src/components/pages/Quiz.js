import React, { Component } from 'react';

import DB from '../../lib/CardDB';
import Card from '../Card';
import './Quiz.css';

export default class Quiz extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      questions: [],
      currentCard: 0,
    };
  }

  componentDidMount() {
    DB.open()
      .then(() => DB.getCards(10))
      .then((questions) => {
        this.setState({ questions });
      })
      .catch(error => console.log(error));
  }

  handleSubmit() {
    const card = (this.state.currentCard + 1) % this.state.questions.length;

    this.setState({
      currentCard: card,
    });
  }

  render() {
    const currentQuestion = this.state.questions.length > 0
         && this.state.questions[this.state.currentCard];

    return (
      <div className="Quiz">
        {
          currentQuestion ?
            <Card
              handleSubmit={this.handleSubmit.bind(this)}
              question={currentQuestion}
              key={currentQuestion.id}
            /> :
            <p>No cards</p>
        }
      </div>
    );
  }
}
