import * as React from 'react';
import About from './About';
import Contact from './Contact';
import Intro from './Intro';
import Nav from './Nav';
import Portfolio from './Portfolio';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div className="app">
        <Nav />
        <Intro />
        <Portfolio />
        <About />
        <Contact />
      </div>
    );
  }
}
