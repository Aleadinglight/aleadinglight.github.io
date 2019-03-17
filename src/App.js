import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/MyNavbar';
import {Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
