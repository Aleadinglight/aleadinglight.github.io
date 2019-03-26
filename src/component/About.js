import React, { Component } from 'react';
import { Container, Row, Col, Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';
import ScrollTrigger from 'react-scroll-trigger';

class About extends Component {
  state = {}

  handleNavShow(){
    this.props.onSeen(true);
  }
  render() {
    return (
      <Container className='section-padding' id='About' fluid='true'>
        
        <Row>
          <Col lg={7}>
            <div className='content'>
              <div className='aboutme'>
                <div className='section-header text-left'>
                  <h4>
                    I'm Tam Nguyen
                  </h4>
                </div>
                <h6 className='text-left'>DEVELOPER / APP DESIGNER</h6>
                <p className='text-left'>Lorem Ipsum is simply dummy unknown printer took a galley of type and text of the '
                  printing and type setting specimen book industry when an unknown printer took a galley 
                  of type and scrambled it to make a type specimen book It has survived not only five centuries.</p>
                <ScrollTrigger onEnter={this.handleNavShow.bind(this)}></ScrollTrigger>
                <p className='text-left'>Setting industry when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book It has survived not only five centuries.</p>
                <p className='text-left'>Setting industry when an unknown printer took a galley of type and scrambled it to make a 
                  type specimen book It has survived not only five centuries. Setting industry when an unknown 
                  printer took a galley of type and scrambled it to make a type specimen book It has survived 
                  not only five centuries.</p>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className='about-img justify-content-center'>
              <img src='./img/iu.jpg' className='about-img' alt=''/>
            </div>

              <ButtonToolbar className='btnbar justify-content-left'>
                <Button variant="primary" className='button'>Download resume</Button>
                <Button variant="outline-primary" className='button' href='#Contact'>Contact me</Button>
              </ButtonToolbar>
          </Col>
        </Row>
      </Container>);
  }
}

export default About;