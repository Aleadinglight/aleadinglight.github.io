import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand, NavItem } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import 'bootstrap/dist/css/bootstrap.css';

class MyNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">ALEADING LIGHT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Skills">Skills</Nav.Link>
          <Nav.Link href="#Services">Services</Nav.Link>
          <Nav.Link href="#link">Portfolio</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;