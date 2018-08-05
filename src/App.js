import React, { Component } from 'react';
import './App.css';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hot or Cold</h1>
        <p>Guess a number between -100 and 100.</p>
        <Game />
      </div>
    );
  }
}

export default App;
