import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import landingIcon from '../../static/images/astronaut.png'
import Button from 'react-bootstrap/Button'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Container fluid id="landing-page">
          <Row className="landing-page-content">
            <Col className="landing-page-text-container">
              <Container className="welcome-text">
                <h1>HELLO THERE!</h1>
                <h4>It's nice to see someone here.</h4>
                <Button
                  href="#about-me"
                  className="welcome-button"
                  variant="light">
                  Read More
                </Button>
              </Container>
            </Col>
            <Col className="landing-page-icon-container">
              <Image
                className="landing-page-icon"
                src={landingIcon}>
              </Image>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}



