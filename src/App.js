import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/MyNavbar';
import About from './component/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
      </div>
    );
  }
}

export default App;
