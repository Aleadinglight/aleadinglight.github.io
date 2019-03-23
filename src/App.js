import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/MyNavbar';
import MySkills from './component/MySkills';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Home from './component/Home';

import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <MySkills />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default App;
