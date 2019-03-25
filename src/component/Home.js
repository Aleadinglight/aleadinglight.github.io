import React, { Component } from 'react';
import { Image, Container } from 'react-bootstrap';
import './Home.css';
import ScrollTrigger from 'react-scroll-trigger';
import BackgroundImage from './img/redemption.jpg';

var sectionStyle= {backgroundImage: "url(" + BackgroundImage + ")"};

class Home extends Component {
  state = {show:true}

  handleNavHide(){
    this.props.onSeen(false);
  }

  render() {
    return (
      <div className='home justify-content-center d-flex align-items-center' id='Home' style={sectionStyle}>
        <ScrollTrigger onEnter={this.handleNavHide.bind(this)}></ScrollTrigger>
        <Container className='justify-content-center'>
          <h4>Welcome To My Portfolio</h4>
        </Container>
      </div>
    );
  }
}

export default Home;