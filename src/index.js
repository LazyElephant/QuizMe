import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { 
  BrowserRouter,
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Nav from './containers/partials/Nav';
import Routes from './routes/MainPages';
import './index.css';

class QuizMe extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Routes />  
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<QuizMe />, document.getElementById('root'));
registerServiceWorker();
