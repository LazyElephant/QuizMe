import React from 'react';

export class ShortAnswer extends React.Component {
    isCorrect() {
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
        // check that all answers are checked
        for (let answer of this.props.answers) {
            
            if(undefined === this.answerRefs.find( el => el.dataset.text === answer && el.dataset.checked === "true")) return false;
        }
        // make sure only the correct answers are checked
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
