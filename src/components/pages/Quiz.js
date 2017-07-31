import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import DB from '../../lib/CardDB';
import Card from '../Card';
import './Quiz.css';

export default class Quiz extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    DB.open()
      .then(() => DB.getCards(10))
      .then((questions) => {
        this.setState({ 
          questions,
          currentQuestion: questions[0],
          index: 0
        });
      })
      .catch(error => console.log(error));
  }

  handleSubmit = () => {
    let { questions, index } = this.state;
    if (++index > questions.length) {
      // show done screen - quiz results maybe
    }
    else {
      this.setState({
        index,
        currentQuestion: questions[index],
      });
    }
  }

  render() {
    const { currentQuestion } = this.state;

    return (
      <div className="content">
        <ReactCSSTransitionGroup 
          component="div" 
          className="anchor"
          transitionName="card"
          transitionEnterTimeout={450}
          transitionLeaveTimeout={450} >
          {
            currentQuestion && <Card
                handleSubmit={this.handleSubmit}
                question={currentQuestion}
                 key={currentQuestion.id} />
          }
        </ ReactCSSTransitionGroup> 
      </div>
    );
  }
}
