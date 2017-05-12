import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Intro from './Intro';
import Portfolio from './Portfolio';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Intro />
        <Portfolio />
      </div>
    );
  }
}

export default App;
