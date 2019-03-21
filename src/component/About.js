import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class About extends Component {
  state = {}
  render() {
    return (
      <Container>
        <Row>
          <Col sm={7}>
            <div className='content'>
              <div className='item'>
                <div className='section-header text-left'>
                  <h4>
                    I'm Tam Nguyen
                  </h4>
                </div>
                <h6 className='text-left'>DEVELOPER / APP DESIGNER</h6>
                <p className='text-left'>Lorem Ipsum is simply dummy unknown printer took a galley of type and text of the '
                  printing and type setting specimen book industry when an unknown printer took a galley 
                  of type and scrambled it to make a type specimen book It has survived not only five centuries.</p>
                <p className='text-left'>Setting industry when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book It has survived not only five centuries.</p>
                <p className='text-left'>Setting industry when an unknown printer took a galley of type and scrambled it to make a 
                  type specimen book It has survived not only five centuries. Setting industry when an unknown 
                  printer took a galley of type and scrambled it to make a type specimen book It has survived 
                  not only five centuries.</p>
              </div>
            </div>
          </Col>
          <Col sm={5}></Col>
        </Row>
      </Container>);
  }
}

export default About;