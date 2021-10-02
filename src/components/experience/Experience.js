import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import experienceDetails from '../../static/exDetails'
import MyTimeline from '../mytimeline/MyTimeline'
import './Experience.css'

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exDetails: experienceDetails
    };
  }

  render() {
    return (
      <Container id="experience-container" className="common-section-container">
        <h2 className="my-common-header">Experience</h2>
        <p className="experience-text">I have been working with bla bla bla hehehehe</p>
        <div className="timeline-container">
          <MyTimeline className="timeline-content"></MyTimeline>
        </div>
      </Container>
    )
  }
}
