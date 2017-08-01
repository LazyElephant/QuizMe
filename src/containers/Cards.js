import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardRepository from '../lib/CardRepository';
import './Cards.css';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    CardRepository
      .getCards()
      .then((cards) => this.setState({ cards }))
      .catch((error) => console.log(error))
  }

  render() {
    const { cards } = this.state;

    return (
      <div className='container' >
        <Link to="/cards/create" className="floating-button">New Card</Link>
        {
          cards.map( (card) => {
            return (
              <div key={card.id}>
                <p>{card.text}</p>
                <ul>Correct Answer
                  { card.answers.map( (answer, index) => <li key={index}>{answer}</li>)}
                </ul>
                { card.choices && 
                  <ul>Wrong Choices
                    { card.choices.map( (choice, index) => <li key={index}>{choice}</li>)}
                  </ul>
                }
              </div> 
            )
          })
        }
      </div>
    )
  }
}

export default Cards;