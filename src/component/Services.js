import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card} from 'react-bootstrap';
import './Services.css';
class Services extends Component {
  state = {}

  render() {
    return ( 
      <Container className='section-padding' id='Services' data-scroll-index="3">
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
            <Card>
              <Card.Body>
                <Card.Title>
                  Cloud Computing
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Cloud Computing
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Cloud Computing
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Cloud Computing
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Cloud Computing
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Cloud Computing
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
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