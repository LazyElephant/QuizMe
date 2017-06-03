/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;*/

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
      // const jsonResponse = await response.json();

      // this.setState({
      //   questions: jsonResponse,
      //   currentCard: 0
      // });
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
