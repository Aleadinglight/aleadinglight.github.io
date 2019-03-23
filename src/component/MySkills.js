import React, { Component } from 'react';
import './MySkills.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import ScrollTrigger from 'react-scroll-trigger';
import 'bootstrap/dist/css/bootstrap.css';

class MySkill extends Component {
  state = {num:0, timerID:null};
  
  constructor(props) {
    super(props);
    this.state.num = 12;
    this.incN = this.incN.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  incN(){
    if (this.state.num===59){
      clearInterval(this.timerID);
    }
    this.setState(
      prevState => {
        return {num: prevState.num + 1}
     }
    );
  }

  handleScroll() {

    if (this.state.num>50)
      return;
    this.timerID = setInterval(
      ()=> this.incN(),
      10
    );
    //  alert('asd');
  }
  
  render() {
    return (
      <div className='section-padding bg-gray' id='MySkills'>
        <ScrollTrigger onEnter={this.handleScroll}></ScrollTrigger>
        <Container>
          <Row>
            <Col lg={12}>
              <h4>My Skills</h4>
              <p>This is my skills what I know and what I can do</p>
            </Col>
          </Row>
            
          <Row>
            <Col lg={6}>
              <ProgressBar now={this.state.num} label={'Design'} className='progress-item'></ProgressBar>
              <ProgressBar now={60} label={'Design'} className='progress-item'></ProgressBar>
              <ProgressBar now={60} label={'Design'} className='progress-item'></ProgressBar>
            </Col>
            <Col lg={6}>
              <ProgressBar now={60} label={'Design'} className='progress-item'></ProgressBar>
              <ProgressBar now={60} label={'Design'} className='progress-item'></ProgressBar>
              <ProgressBar now={60} label={'Design'} className='progress-item'></ProgressBar>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MySkill;