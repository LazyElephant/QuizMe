import React from 'react'

import QuestionCard from './components/QuestionCard'

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
      fetch('/api/questions')
        .then(response => response.json())
        .then(jsonResponse => {
          this.setState({
            questions: jsonResponse,
            currentCard: 0
          });
        })
        .catch(err => console.log(err));
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
