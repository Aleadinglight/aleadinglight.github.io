import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import landingIcon from '../../static/images/astronaut.svg'
import Button from 'react-bootstrap/Button'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Container fluid id="landing-page">
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
          <Image
            className="landing-page-icon"
            src={landingIcon}>
          </Image>
        </Container>
      </div>
    )
  }
}



