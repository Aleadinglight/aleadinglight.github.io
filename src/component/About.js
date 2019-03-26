import React, { Component } from 'react';
import { Container, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';
import ScrollTrigger from 'react-scroll-trigger';

class About extends Component {
  state = {  }

  handleNavShow() {
    this.props.onSeen(true);
  }

  render() {
    return (
      <Container className='section-padding' id='About' data-aos='fade-up'>
        <Row>
          <Col lg={7}>
            <div className='content'>
              <div className='aboutme'>
                <div className='section-head text-left'>
                  <h4 className='text-left'>
                    I'm Tam Nguyen
                    </h4>
                </div>
                <h6 className='text-left'>DEVELOPER / APP DESIGNER</h6>
                <p className='text-left'>I am Nguyen Huu Tam (don't let the picture fool you, I am a true nerdy programmer). I am a programmer in Vaasa, Finland.
                  I have fallen in love with coding since the very beginning of my school's life.
                  Which lead to a result that I get to know and experience a lot of coding languages and system design.
                  I am proficient in C++, Python and Javascript. Familiar with many technologies such as: Deep learning,
                    Machine learnign, Web hosting, Web development, Git, Internet of things, Software development...</p>
                <ScrollTrigger onEnter={this.handleNavShow.bind(this)}></ScrollTrigger>
                <p className='text-left'>Considering myself as a young man,
                  I believe I must always keep studying new things and moving forward, that is
                  why I am always available for new positions and challenges. So if you have something in mind,
                    please don't hesitate to send me an email.</p>
                <p className='text-left'>If you happen to be here somehow, then I guest fate has set our paths to meet each other,
                  atleast once in a while.
                    So if you decide to know more about me, please head to my Projects page.</p>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className='about-img justify-content-center'>
              <img src='./img/ava.jpg' className='about-img' alt='' />
            </div>

            <ButtonToolbar className='btnbar justify-content-center'>
              <Button variant="primary" className='button' href='https://drive.google.com/file/d/1uD9bLlpWemnhRYwLRUrZTblwtvt13nQr/view?usp=sharing'>My resume</Button>
              <Button variant="outline-primary" className='button' href='#Contact'>Contact me</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;