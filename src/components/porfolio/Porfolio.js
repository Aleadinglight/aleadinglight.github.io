import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Porfolio.css'

export default class Porfolio extends Component {
  render() {
    return (
      <Container id="porfolio" className="common-section-container">
        <h2 className="my-common-header">Porfolio</h2>
        <p className="experience-text">This is what I have been doing so far</p>
        <div className="card-columns">
          <Row xs={1} md={3} className="g-4" >
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <Card className="porfolio-card">
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    )
  }
}
