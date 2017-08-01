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
        <table>
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
                      </td> :
                      <td></td>
                    }
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