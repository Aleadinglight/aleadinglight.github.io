import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import porfolioData from '../../static/porfolio_data'
import './Porfolio.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      porfolioData: porfolioData
    };
    AOS.init();
  }

  render() {
    return (
      <Container id="porfolio" className="bg-light common-section-container" fluid>
        <Container>
          <h2 className="my-common-header">Porfolio</h2>
          <p className="experience-text">Some worth-noting projects</p>

          <Row lg={3} xl={4}>
            {this.state.porfolioData.map((item) => (
              <Col key={item.name} className="card-column">
                <Card className="porfolio-card" data-aos="fade-up" data-aos-duration="500">
                  <Card.Img
                    variant="top"
                    src={require(`../../static/images/${item.image}`).default} />
                  <Card.Body className="my-card-body">
                    <Card.Title><Card.Link target="_blank" className="my-card-title" href={item.link}>{item.name}</Card.Link></Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      <b>{item.language}</b>
                    </small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    )
  }
}
