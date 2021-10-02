import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import avatar from '../../static/images/stare_crop.jpg'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <Container id="about-me" className="common-section-container">
        <h2 className="my-common-header">About Me</h2>
        <Container className="common-content">
          <Row>
            <Col md={7}>
              <p className="about-me-dialog">
                Hello! My name is Tam Nguyen, a programmer and sometimes a technical writer. I am passionate about building excellent software that benefits people. My story dates back to high school when I decided to participate in a Programming class out of boredom. It turns out to be one of the most significant decisions I have ever made because I have fallen in love with programming ever since. <br /><br />

                Fast-forward to this day, I am currently a software developer with 4+ years of professional experience. I am lucky to have the opportunity to work on various kinds of projects, including <b>a small internal application</b> for start-ups, <b>web applications</b> for big customers, and currently <b>a full-scale enterprise analytics platform.</b> <br /><br />

                Thanks to these years in the field, I acquired more knowledge, developed an engineering mindset, and improved my time management skills. I also improved my ability to communicate with team members and clients while working through milestones and deadlines. <br /><br />

                Besides my profession, I am somewhat of a musician in my free time. I play piano, guitar and sometimes I do make music. I am deeply in love with music and I feel that in some way, my instruments correspond to my human feeling.
              </p>
            </Col>

            <Col md={5} className="my-avatar-holder">
              <div>
                <Image src={avatar} className="my-avatar" thumbnail />
                <div className="my-avatar-description-container">
                  <p className="my-avatar-description">Don't let the picture scare you, I am a clown at heart.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}
