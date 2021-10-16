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
        <p className="experience-text">Thanks to these years in the field, I acquired more knowledge, developed an engineering mindset, and improved my time management skills. I also improved my ability to communicate with team members and clients while working through milestones and deadlines. <br /><br /></p>
        <div className="timeline-container">
          <MyTimeline className="timeline-content"></MyTimeline>
        </div>
      </Container>
    )
  }
}
