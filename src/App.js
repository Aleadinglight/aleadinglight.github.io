import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavbar from './component/MyNavbar';
import MySkills from './component/MySkills';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Home from './component/Home';

import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

  constructor(){
    super();
    this.state = {showNav: false};
  }

  hideNav(value){
    console.log("value:",value);
    this.setState({showNav: value});
  }

  render() {
    console.log('state:', this.state.showNav);
    return (
      <div className="App">
        <MyNavbar show={this.state.showNav}/>
        <Home onSeen={this.hideNav.bind(this)}/>
        <About onSeen={this.hideNav.bind(this)}/>
        <MySkills />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default App;
