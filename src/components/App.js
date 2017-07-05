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
      let card = this.state.currentCard + 1;
      if( card === this.state.questions.length ) {
        this.loadCards();
      }
      else {      
        this.setState({
          currentCard: card
        });
      }
    }

    getClass(index) { 
        if(index > this.state.currentCard) return "";
        else if (index === this.state.currentCard) return "active";
        else return "done";    
    }

    render() {
        return (
          <div className="wrapper">
              { this.state.questions.map( (question, index) => {
                return <QuestionCard 
                  handleSubmit={this.handleSubmit.bind(this)}
                  className={this.getClass(index)}
                  question={question}
                  key={question._id}/>
              })}
          </div>
    );
  }
}
