import React, { Component } from 'react';
import './NewCard.css';

class NewCard extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

  }

  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} className="NewCard-form">
          <label htmlFor='text'>
            <input type='text' name='text' />
          </label>
          <label htmlFor='answer'>
            <input type='text' name='answers[]' placeholder='Answer' />
          </label>
          <label htmlFor='text'>
            <input type='text' name='choices[]' placeholder='Wrong Choice' />
          </label>
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default NewCard;