import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/MyNavbar';
import MySkills from './component/MySkills';
import About from './component/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
        <MySkills />
      </div>
    );
  }
}

export default App;
