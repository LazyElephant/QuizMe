import React from 'react'

import QuestionCard from './QuestionCard'
import Footer from './Footer'

export default class App extends React.Component{
    constructor(props, context) {
      super(props,context);
      this.state = { 
        questions: [],
        currentCard: 0 
      };
    }
    
    componentDidMount() {
      this.loadCards();
    }

    async loadCards() {
      const response = await fetch('http://localhost:3000/api/questions');
      const jsonResponse = await response.json();
        
      this.setState({
        questions: jsonResponse.questions,
        currentCard: 0
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
                  question={question}/>
              })}
          </div>
    );
  }
}
