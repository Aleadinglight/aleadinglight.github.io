import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand, NavItem} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import 'bootstrap/dist/css/bootstrap.css';
 
class MyNavbar extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">ALEADING LIGHT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Skill</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Portfolio</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default MyNavbar;