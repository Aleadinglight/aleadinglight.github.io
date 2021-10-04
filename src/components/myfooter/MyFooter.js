import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import './MyFooter.css'

export default class MyFooter extends Component {
  render() {
    return (
      <Navbar bg="light" className="my-footer">
        <Container>
          <Navbar.Text>
          © 2021 Tam Nguyen. All rights reserved
          </Navbar.Text>
          <Navbar.Text>
            Designed & developed with React, hosted by GitHub
          </Navbar.Text>
        </Container>
      </Navbar>
    )
  }
}
