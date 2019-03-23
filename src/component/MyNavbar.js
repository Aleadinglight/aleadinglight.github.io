import React, { Component } from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class MyNavbar extends Component {
  
  state = {show: true};
    //this.state.show.bind(this);

  render() {
    if (this.state.show === true)
      return (
        <Navbar bg="light" expand="lg" className="nav-scroll">
          <Navbar.Brand href="#Home">ALEADING LIGHT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#MySkills">Skills</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#link">Portfolio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      );
    else
      return ('');
  }
}

export default MyNavbar;