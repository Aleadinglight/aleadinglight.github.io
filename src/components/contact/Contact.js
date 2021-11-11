import React, { Component } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import "./Contact.css"

export default class Contact extends Component {
  render() {
    return (
      <Container id="contact-me" className="common-section-container">
        <h2 className="my-common-header">Contact</h2>
        <Row>
          <Col>
            <p className="">
              My inbox is always open.

            </p>
            <p className="" >
              Whether you have a question, need to discuss something or simply just want to talk, drop an email and say hi!
            </p>

            <p><b>Email:</b> huutamnguyen2302@gmail.com</p>
            <Button
              className="contact-button"
              size="lg"
              href="mailto:huutamnguyen2302@gmail.com">
              Email Me
            </Button>
          </Col>
          <Col>
            <iframe
              title="My Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562221.4220525697!2d20.3898955361618!3d62.49188766472001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467d603e623ab243%3A0x1e1d7faa61aa800e!2sVaasa!5e0!3m2!1sen!2sfi!4v1633280641316!5m2!1sen!2sfi"
              width="600"
              height="450"
              loading="lazy">
            </iframe>
          </Col>
        </Row>
      </Container>
    )
  }
}
