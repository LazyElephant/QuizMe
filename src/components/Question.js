import React from 'react';
import marked from 'marked';
import { MultipleChoice, ShortAnswer } from './Answers';
import './Question.css';

const Question = ({ question, ...props }) => {
   const text = marked(`### ${question.text}`, { sanitized: true });
   return (
      <div className="Question">
         <div dangerouslySetInnerHTML={{ __html: text }}></div>
         {
            question.type === "short-answer" ?
               <ShortAnswer answers={question.answers} {...props} /> :
               <MultipleChoice
                  answers={question.answers}
                  choices={question.choices} />
         }
      </div>
   );
}

export default Question;