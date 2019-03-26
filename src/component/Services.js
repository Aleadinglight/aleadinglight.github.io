import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card} from 'react-bootstrap';
import './Services.css';
class Services extends Component {
  state = {}

  render() {
    return ( 
      <Container className='section-padding' id='Services'>
        <Row>
          <Col lg={12}>
            <div className='section-head'>
              <h4>Services</h4>
              <p>Here is the things I can help you with</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={4}>
            <Card className='item' border='light'>
              <Card.Body>
                <Card.Title>
                  Web Development
                </Card.Title>
                <Card.Text>
                  If you need help building a website, don't hesitate to contact me. 
                  I have been working with React + Redux and this website is build on them.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card  className='item' border='light'>
              <Card.Body>
                <Card.Title>
                  Cloud Computing
                </Card.Title>
                <Card.Text>
                  Feel like you need a cloud server? Give me a call. 
                  I can build back-end with Node.js and deploying them to Heroku, or Amazon Cloud. 
                  Which one you prefer?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className='item' border='light'> 
              <Card.Body>
                <Card.Title>
                  Desktop Application
                </Card.Title>
                <Card.Text>
                  Real life experienced right here. 
                  I have design & develope a desktop application for a local company. 
                  The main framework that I am currently using is .NET
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col lg={4}>
            <Card className='item' border='light'>
              <Card.Body>
                <Card.Title>
                  Internet of Things
                </Card.Title>
                <Card.Text>
                  When I was a trainee, I have worked with IOT - Ticket for my company. 
                  I handle client part to connect with the server using its protocol.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className='item' border='light'>
              <Card.Body>
                <Card.Title>
                  Mobile Application
                </Card.Title>
                <Card.Text>
                  Lately I find myself interested in Flutter for mobile app. 
                  I was playing around and even became a package contributor.
                  You will find a link in the below section.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className='item' border='light'>
              <Card.Body>
                <Card.Title>
                  Machine Learning & Deep Learning
                </Card.Title>
                <Card.Text>
                  I have been playing around with Pytorch for a while,
                  written some tutorial training neural network.
                  Some of the first projects in my life was about real-time recognition and
                  sequential predicting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Services;