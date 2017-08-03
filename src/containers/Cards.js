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
      modalOpen: false
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
        <table className="Cards-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Answers</th>
              <th>Choices</th>
            </tr>
          </thead>
          <tbody>
            {
              cards.map( (card) => {
                return (
                  <tr key={card.id}>
                    <td>{card.text}</td>
                    <td>
                      { card.answers.map( (answer, index) => <p key={index}>{answer}</p>)}
                    </td>
                    { card.choices ? 
                      <td>
                        { card.choices.map( (choice, index) => <p key={index}>{choice}</p>)}
                      </td> : <td></td>
                    }
                    <td className="delete-icon">
                      <svg viewBox="0 0 20 20" height="20" width="20">
                        <circle fill="red" stroke="red" r="9" cx="10" cy="10" />
                        <path stroke="white" d="M6,6 L15,15 M15,6 L6,15" />
                      </svg>
                    </td>
                  </tr> 
                )
              })
            }
          </tbody>
        </table>
        <button type='button' 
          className="floating-button" 
          onClick={this.toggleModal}
          >New Card
        </button>
        <Modal open={modalOpen} closeModal={this.toggleModal}>
          <CardForm cancel={this.toggleModal} />
        </Modal>
      </div>
    )
  }
}

export default Cards;