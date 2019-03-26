import React, { Component } from 'react';
import './App.css';
import 'animate.css';
import MyNavbar from './component/MyNavbar';
import MySkills from './component/MySkills';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Projects from './component/Projects';
import Home from './component/Home';
import 'aos/dist/aos.css';
import AOS from 'aos';
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
    AOS.init();
    return (
      <div className="App">
        <MyNavbar show={this.state.showNav}/>
        <Home onSeen={this.hideNav.bind(this)}/>
        <About onSeen={this.hideNav.bind(this)}/>
        <MySkills />
        <Services />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
