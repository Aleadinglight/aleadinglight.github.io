import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <div id="landing-page">
        Hello this is landing page.
        <Button variant="primary">Primary</Button>{' '}
      </div>
    )
  }
}



