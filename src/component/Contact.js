import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Contact.css';

class Contact extends Component {
  state = {}
  render() {
    return ( 
      <Container className='section-padding'>
        <Row>
          <Col lg={12}>
            <div className='section-head'>
              <h4>Leave a Message</h4>
            </div>
          </Col>
        </Row>
        
        <Row>
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
              <Button variant="warning" type="submit">
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