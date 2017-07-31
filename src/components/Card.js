import React from 'react';
import Question from './Question';
import './Card.css';
// TODO:  create a callback to pass to the answer components to
// check if the card is correctly answered

const Card = ({ question, handleSubmit }) => (
  <div className={`Card`} >
    <Topic topic={question.topic} />
    <Question question={question} />
    <button
        className="submit"
        onClick={handleSubmit}>Next
    </button>
  </div> 
);

const Topic = ({ topic }) => (
   <div className="Topic">
      <p>{topic}</p>
   </div>
);

export default Card;