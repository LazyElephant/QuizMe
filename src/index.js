import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactTransitionGroup from 'react-addons-transition-group';

import { 
  BrowserRouter,
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import Nav from './components/pages/partials/Nav';
import Routes from './routes/MainPages';
import './index.css';

class ThemedApp extends Component {
  constructor () {
    super();

    this.state = {
      drawerOpen: false
    }
  }

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

ReactDOM.render(<ThemedApp />, document.getElementById('root'));
registerServiceWorker();
