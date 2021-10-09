import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Medium from '../../static/fonts/icon/medium.svg'
import Github from '../../static/fonts/icon/github.svg'
import Linkedin from '../../static/fonts/icon/linkedin-in.svg'
import Image from 'react-bootstrap/Image'

import './MyNavbar.css'

export default class MyNavbar extends Component {
  render() {
    return (
      <div className="my-navbar-container">
        <Navbar
          className="my-navbar"
          variant="dark"
          fixed="top">
          <Container>
            <Navbar.Brand href="#landing-page">Tam Nguyen</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#about-me">About</Nav.Link>
              <Nav.Link href="#experience-container">Experience</Nav.Link>
              <Nav.Link href="#porfolio">Porfolio</Nav.Link>
              <Nav.Link href="#contact-me">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className="github-button"
                href="https://github.com/Aleadinglight">
                <Image src={Github}></Image>
              </Nav.Link >
              <Nav.Link
                className="github-button"
                href="https://github.com/Aleadinglight">
                <Image src={Medium}></Image>
              </Nav.Link >
              <Nav.Link
                className="github-button"
                href="https://github.com/Aleadinglight">
                <Image src={Linkedin}></Image>
              </Nav.Link >
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}
