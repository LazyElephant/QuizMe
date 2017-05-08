import React from 'react'

import QuestionCard from './QuestionCard'
import Footer from './Footer'

/*const Home = () => (
  <div className="wrapper">
    <div className="card">
      <h1>Hello, Tim</h1>
      <p>Welcome to the site</p>
    </div>
    <footer>
      <div className="copyright">
          <p>&copy; Timothy Schmidt 2017</p>
      </div>
    </footer>
  </div>

)*/

export default class App extends React.Component{
    constructor(props, context) {
      super(props,context);
      this.state = { question: null };
    }
    
    componentDidMount() {
      fetch('http://localhost:3000/api/questions')
        .then( (response) => response.json() )
        .then( (jsonResponse) => {
          console.log(jsonResponse);
          this.setState({
            question: jsonResponse
          });
        });
    }

    render() {
        return (
          <div className="wrapper">
            <QuestionCard question={this.state.question}/>
            <Footer/>
          </div>
    );
  }
}
