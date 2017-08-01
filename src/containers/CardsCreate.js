import React, { Component } from 'react';

class CreateCard extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='text'>
          <input type='text' name='text' placeholder='Question' />
        </label>
        <label htmlFor='answer'>
          <input type='text' name='answers[]' placeholder='Answer' />
        </label>
        <label htmlFor='text'>
          <input type='text' name='choices[]' placeholder='Wrong Choice' />
        </label>
        <button type='submit'>Add</button>
      </form>
    );
  }
}

export default CreateCard;