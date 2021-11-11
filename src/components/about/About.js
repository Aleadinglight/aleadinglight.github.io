import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container'
import Quote from '../quote/Quote'
import avatar from '../../static/images/stare_crop.jpg'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <Container fluid className="bg-light" >
        <Container id="about-me" className="common-section-container">
          <h2 className="my-common-header">About Me</h2>
          <Container className="common-content">
            <Row>
              <Col md={7}>
                <p className="about-me-dialog">
                  Hello! My name is Tam Nguyen, a programmer and sometimes a technical writer. My passion is developing excellent software that helps people. I got into programming in high school when I decided to attend a Pascal programming class due to my interest in computers. It has been one of the most significant decisions of my life because I have been in love with programming ever since. <br /><br />

                  Fast-forward to this day, I am currently a software developer with 3+ years of professional experience. I am lucky to have the opportunity to work on various kinds of projects, ranging from <b>A small internal application</b> for a start-up to some <b>Web applications for big customers</b>, and currently <b>A large-scale analytics platform</b> for enterprise business customers. My main focus these days is building fast, scalable web applications that benefit the customer. <br /><br />

                  Aside from my profession, I am somewhat of a musician in my free time. I enjoy spending time with my instruments and I record music occasionally. Somehow, I sense that my instruments reflect my feelings as a human being.
                </p>
              </Col>

              <Col md={5} className="my-avatar-holder">
                <Figure>
                  <Figure.Image
                    className="my-avatar"
                    src={avatar}
                    thumbnail
                  />
                  <Figure.Caption className="my-avatar-caption">
                    Don't let the picture scare you, I smile a lot.
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </Container>
          <Quote></Quote><br />
        </Container>
      </Container>
    )
  }
}
