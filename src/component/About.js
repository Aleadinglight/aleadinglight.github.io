import React, { Component } from 'react';
import {Containter, Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class About extends Component {
    state = {  }
    render() { 
        return ( 
        <Container>
            <Row>
                <Col sm={7}></Col>
                <Col sm={5}></Col>
            </Row>
        </Container>);
    }
}
 
export default About;