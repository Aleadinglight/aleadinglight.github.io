import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';
import ScrollTrigger from 'react-scroll-trigger';
import BackgroundImage from './img/redemption.jpg';
import Typist from 'react-typist';

var sectionStyle= {backgroundImage: "url(" + BackgroundImage + ")"};

class Home extends Component {
  state = {typing:true}

  handleNavHide(){
    this.props.onSeen(false);
  }

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true })
    });
  }

  render() {
    return (
      <div className='home justify-content-center d-flex align-items-center' id='Home' style={sectionStyle}>
        <ScrollTrigger onEnter={this.handleNavHide.bind(this)}></ScrollTrigger>
        <ScrollTrigger onEnter={this.done}></ScrollTrigger>
        <Container className='justify-content-center'>
          {this.state.typing ? 
          <Typist avgTypingDelay={80}>
            <h4 className='welcome-text'> Welcome To My Portfolio </h4>
            <h4 className='welcome-text'> Get busy living, or get busy dying </h4>
          </Typist>: ''}
        </Container>
      </div>
    );
  }
}

export default Home;