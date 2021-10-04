import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container'
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

                Fast-forward to this day, I am currently a software developer with 4+ years of professional experience. I am lucky to have the opportunity to work on various kinds of projects, ranging from <b>A small internal application</b> for a start-up to some <b>Web applications for big customers</b>, and currently <b>A large-scale analytics platform</b> for enterprise users. My main focus these days is building fast, scalable web applications that benefits customer <br /><br />

                Besides my profession, I am somewhat of a musician whenever I have time. I enjoy spending time with my piano, guitar and sometimes I record music. I feel that, in some way, my instruments correspond to my human feelings.
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
                  Don't let the picture scare you, I am a clown at heart (try clicking on it).
                </Figure.Caption>

              </Figure>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}
