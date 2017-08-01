import React, { Component } from 'react';
import Modal from './partials/Modal';
import CardForm from './partials/CardForm';
import CardRepository from '../lib/CardRepository';
import './Cards.css';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      modalOpen: true
    }
  }

  componentDidMount() {
    CardRepository
      .getCards()
      .then((cards) => this.setState({ cards }))
      .catch((error) => console.log(error))
  }

  toggleModal = (event) => {
    const modalOpen = !this.state.modalOpen; 
    this.setState({ modalOpen });
  }

  render() {
    const { cards, modalOpen } = this.state;

    return (
      <div className='container' aria-hidden={!modalOpen} >
        <button type='button' 
          className="floating-button" 
          onClick={this.toggleModal}
          >New Card
        </button>
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
        <Modal open={modalOpen} closeModal={this.toggleModal}>
          <CardForm />
        </Modal>
      </div>
    )
  }
}

export default Cards;