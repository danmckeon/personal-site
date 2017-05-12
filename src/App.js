import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Intro from './Intro';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Intro />
        <Portfolio />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
