import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Contact.css';
import BackgroundMap from './img/map.png';

var sectionStyle= {backgroundImage: "url(" + BackgroundMap + ")"};

class Contact extends Component {
  state = {};

  handleEmailSend() {
    alert('Please contact me via my email. This page is currently hosted on GitHub so its only a static page. Therefore, it cannot send email properly :) I will find a way to fix this later.');
  }

  render() {
    return ( 
      <Container fluid='true' className='section-padding contact' id='Contact' style={sectionStyle}>
        <Row>
          <Col lg={12} data-aos='fade-up'>
            <div className='section-head'>
              <h4>Leave a Message</h4>
            </div>
          </Col>
        </Row>
        
        <Row data-aos='fade-up'>
          <Col lg={6}>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder='First name*' />
                </Col>
                <Col>
                  <Form.Control placeholder='Last name*' />
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <Form.Control placeholder='Subject'></Form.Control>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <Form.Control placeholder='Message*'></Form.Control>
                </Col>
              </Row>
              <br/>
              <Button variant="primary" type="submit" onClick={this.handleEmailSend.bind(this)}>
                Send Message
              </Button>
            </Form>
          </Col>
          
          <Col lg={6}>
            <Row>
              <Col ><h4>Contact me</h4></Col>
              
            </Row>
            <Row>
              <Col><p>(+358) 417 408 387</p></Col>
              
            </Row>
            <Row>
              <Col><p>huutamnguyen2302@gmail.com</p></Col>
            </Row>

            <Row>
              <Col><p>Vuorikatu 14, C82 Vaasa 65100, Finland</p></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;