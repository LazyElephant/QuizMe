import React from 'react';
import Question from './Question';
import './Card.css';
// TODO:  create a callback to pass to the answer components to
// check if the card is correctly answered

export default class QuestionCard extends React.Component {
   constructor(props) {
      super(props);

      this.checkAnswers = this.checkAnswers.bind(this);

      this.state = {
         cardStateClass: 'mounted'
      }
   }

   checkAnswers() {
      if (this.answerComponent.isCorrect()) {
         this.setState({ cardStateClass: 'done' }, this.props.handleSubmit);
      }
   }

   componentDidMount() {
      // setting state right away causes the card to appear with no animation
      // apparently because of the mounting order (leaves to root)
      requestAnimationFrame(() => this.setState({ cardStateClass: 'active' }));
   }

   render() {
      const { question } = this.props;
      return (
         <div className={`Card ${this.state.cardStateClass}`}>
            <Topic topic={question.topic} />
            <Question question={question} />
            <button
               className="submit"
               onClick={this.checkAnswers}>Next
            </button>
         </div>
      );
   }
}

const Topic = ({ topic }) => (
   <div className="Topic">
      <p>{topic}</p>
   </div>
);