import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>You must be lost</h2>
        </div>
      </div>
    );
  }
}

export default NotFound;
