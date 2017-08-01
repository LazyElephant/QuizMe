import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {
  constructor() {
    super();

    this.addAnswerField = this.addInputField.bind(this, 'AnswerCount');
    this.addChoiceField = this.addInputField.bind(this, 'ChoiceCount');
    this.state = {
      AnswerCount: 1,
      ChoiceCount: 1,
    };
  }

  addInputField(field) {
    let newCount = this.state[field] + 1;
    this.setState({
      [field]: newCount
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    const { numAnswers, numChoices } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="CardForm">
        <label htmlFor='text'>
          <input autofocus required type='text' name='text' />
        </label>
        <MultipleInput count={numAnswers} name="answers[]" add={this.addAnswerField} />
        <MultipleInput count={numChoices} name="choices[]" add={this.addChoiceField} />
        <button type='submit'>Add</button>
      </form>
    );
  }
}

export default CardForm;

const MultipleInput = ({add, name, count}) => {
  
  return (
    <label htmlFor='text'>
      {
        
        <input type='text' name placeholder='Wrong Choice' />

      }
      <span onClick={add}>+</span>
    </label>
  );
}
