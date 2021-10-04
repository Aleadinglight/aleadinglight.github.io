import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import porfolioData from '../../static/porfolio_data'
import './Porfolio.css'

export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      porfolioData: porfolioData
    };
  }

  render() {
    return (
      <Container id="porfolio" className="common-section-container">
        <h2 className="my-common-header">Porfolio</h2>
        <p className="experience-text">Some worth-nothing projects</p>

        <Row lg={2} xl={3}>
          {this.state.porfolioData.map((item) => (
            <Col key={item.name} className="card-column">
              <Card className="porfolio-card">
                <Card.Img
                  variant="top"
                  src={require(`../../static/images/${item.image}`).default} />
                <Card.Body className="my-card-body">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    {item.language}
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}
