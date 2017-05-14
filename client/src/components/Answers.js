import React from 'react';

// export default class Answers extends React.Component {
//     constructor(props) {
//         super(props);

//         this.answerTypes = {
//             "multiple-choice": MultipleChoice,
//             "multiple-answer": MultipleAnswer,
//             "short-answer": ShortAnswer
//         };
//     }
//     isCorrect() {
//         return true;
//     }

//     render() {
//         return <this.answerTypes[this.props.type] {...this.props} />;
//     }
// }

export class ShortAnswer extends React.Component {
    isCorrect() {
        console.log(this.answerRef.value);
        if (this.answerRef.value === this.props.answers[0]) return true;

        return false;
    }

    render() {
        return (
            <input ref={(ref)=>{this.answerRef = ref}} type="text" className="answer-item" placeholder="Answer"/>
        );
    }
}
export class MultipleChoice extends React.Component {
    constructor(props) {
        super(props);

        this.answerRefs = Array(this.props.choices.length);
    }

    isCorrect() {
        // check that all 
        for (let answer of this.props.answers) {
            
            if(undefined === this.answerRefs.find( el => el.dataset.text === answer && el.dataset.checked === "true")) return false;
        }
        let numChecked = 0;

        for(let el of this.answerRefs) {
            if (el.dataset.checked === "true") numChecked++;
        }
        return numChecked === this.props.answers.length ? true : false;
    }

    handleClick(e) {
        e.target.dataset.checked = e.target.dataset.checked === "true" ? "false" : "true";
    }

    // the checked state was persisting through card loads
    // this explicitly makes sure they're initially false
    componentWillReceiveProps() {
        for( let el of this.answerRefs) {
            el.dataset.checked = "false";
        }    
    }

    render() {
        return (
            <ul>
                {
                    this.props.choices.map( (choice, index) => 
                        <li 
                            className="answer-item"
                            data-text={choice}
                            data-checked="false"
                            onClick={this.handleClick}
                            ref={(ref)=>this.answerRefs[index] = ref}
                            key={`${index}`}>{`${index+1}. ${choice}`}
                        </li>)
                }
            </ul>
        );
    }
}

export const MultipleAnswer = MultipleChoice; 

