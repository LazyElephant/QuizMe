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
        
      console.log(jsonResponse);
      this.setState({
        questions: jsonResponse.questions,
        currentCard: 0
      });
    }

    handleSubmit() {
      if( this.state.currentCard === this.state.questions.length-1 ) {
        loadCards();
      }
      else {
        let card = this.state.currentCard + 1;
        this.setState({
          currentCard: card
        });
      }
    }

    getClass(index, currentCard) { 
        console.log(index, currentCard);
        if(index > currentCard) return "";
        else if (index === currentCard) return "active";
        else return "done";    
    }

    render() {
        return (
          <div className="wrapper">
            { this.state.questions.map( (question, index) => {
              return <QuestionCard 
                onSubmit={this.handleSubmit.bind(this)}
                className={this.getClass(index, this.state.currentCard)}
                question={this.state.questions[0]}/>
            })}
          </div>
    );
  }
}
