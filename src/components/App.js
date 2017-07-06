import React, { Component } from 'react';

import {getCards} from '../helpers/data-access';
import QuestionCard from './QuestionCard';

export default class App extends Component{
    constructor(props, context) {
      super(props,context);
      this.state = { 
        questions: [],
        currentCard: 0 
      };
    }
    
    componentDidMount() {
      const questions = getCards(10);
      this.setState({
        questions
      });
    }

    handleSubmit() {
      let card = (this.state.currentCard + 1) % this.state.questions.length;;
   
      this.setState({
        currentCard: card
      });
    }

    render() {
      const currentQuestion = this.state.questions.length > 0 
                           && this.state.questions[this.state.currentCard];
      
      return (
        <div className="wrapper">
            { 
              currentQuestion ? 
              <QuestionCard 
                handleSubmit={this.handleSubmit.bind(this)}
                question={currentQuestion}
                key={currentQuestion.id}/> :
              <p>No cards</p>
            }
        </div>
    );
  }
}