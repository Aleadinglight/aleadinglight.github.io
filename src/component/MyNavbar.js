import React, { Component } from 'react';
import { Navbar, Nav, } from 'react-bootstrap';

class MyNavbar extends Component {

  render() {
    //console.log(this.props.show);
    if (this.props.show === true)
      return (
        <Navbar bg="light" expand="lg" className="nav-scroll" fixed='top'>
          <Navbar.Brand href="#Home">ALEADING LIGHT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#MySkills">Skills</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      );
    else
      return ('');
  }
}

export default MyNavbar;