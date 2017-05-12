import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Intro from './Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Intro />
      </div>
    );
  }
}

export default App;
