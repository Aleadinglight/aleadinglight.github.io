import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './MyNavbar.css'

export default class MyNavbar extends Component {
  render() {
    return (
      <div className="my-navbar-container">
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#landing-page">Tam Nguyen</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#about-me">About</Nav.Link>
              <Nav.Link href="#experience-container">Experience</Nav.Link>
              <Nav.Link href="#porfolio">Porfolio</Nav.Link>
              <Nav.Link href="">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}
