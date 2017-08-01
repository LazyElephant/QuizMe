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
    const { AnswerCount, ChoiceCount } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="CardForm">
        <div className="CardForm-group">
          <label htmlFor='text' className="CardForm-label" >Question</label>
          <textarea rows={4} className="CardForm-input" required type='text' name='text' id='text' />
        </div>
        <MultipleInput count={AnswerCount} displayName="Answer" name="answers[]" add={this.addAnswerField} />
        <MultipleInput count={ChoiceCount} displayName="Choice" name="choices[]" add={this.addChoiceField} />
        <div className="CardForm-buttons" >
          <button type='submit'>Add</button>
          <button type='button' onClick={this.props.cancel} >Cancel</button>
        </div>
      </form>
    );
  }
}

export default CardForm;

const MultipleInput = ({add, displayName, name, count}) => {
  const elements = new Array(count).fill(0);
  
  return (
    <div className="CardForm-group">
      <label htmlFor='text' className="CardForm-label">{displayName}</label>
      {elements.map( (value, index) => (
        <input key={index} className="CardForm-input" type='text' name={name} />))}
      <button type='button' onClick={add}>+</button>
    </div>
  );
}
