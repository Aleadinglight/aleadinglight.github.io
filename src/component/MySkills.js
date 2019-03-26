import React, { Component } from 'react';
import './MySkills.css';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import ScrollTrigger from 'react-scroll-trigger';
import 'bootstrap/dist/css/bootstrap.css';

class MySkill extends Component {
  const_state = {
    cpp: 95,
    cs: 80,
    js: 94,
    py: 95,
    java: 80,
    dart: 75,
    php: 60,
    sh: 73,
    //tech
    react: 90,
    nodejs: 80,
    mysql: 60,
    pytorch: 80,
    flutter: 77,
    redux: 70,
  };
  
  state = {
    cpp: 0,
    cs: 0,
    js: 0,
    py: 0,
    java: 0,
    dart: 0,
    php: 0,
    sh: 0,
    //tech
    react: 0,
    nodejs: 0,
    mysql: 0,
    pytorch: 0,
    flutter: 0,
    redux: 0,
  }

  constructor(props) {
    super(props);
    this.incN = this.incN.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  incN(){
    if (this.state.cpp === this.const_state.cpp){
      clearInterval(this.timerID);
    }
    //console.log(this.state.cpp);
    Object.keys(this.state).map(
      i => this.setState(prevState => { 
        console.log(this.state[i]);
        return {[i]: this.const_state[i]}; 
    }));
  }

  handleScroll() {
    if (this.state.cpp === this.const_state.cpp)
      return;
    this.timerID = setInterval(
      ()=> this.incN(),
      100
    );
    //  alert('asd');
  }
  
  render() {
    return (
      <div className='section-padding bg-gray' id='MySkills'>
        <ScrollTrigger onEnter={this.handleScroll}></ScrollTrigger>
        <Container>
          <Row>
            <Col lg={12} className='section-head'>
              <h4>My Skills</h4>
              <p>This is my skills what I know and what I can do</p>
            </Col>
          </Row>
            
          <Row><h4>Languages</h4></Row>
          <Row>
            <Col lg={6}>
              <ProgressBar now={this.state.cpp} label={'C++'} className='progress-item'></ProgressBar>
              <ProgressBar now={this.state.py} label={'Python'} className='progress-item'></ProgressBar>
              <ProgressBar now={this.state.java} label={'Java'} className='progress-item'></ProgressBar>
              <ProgressBar now={this.state.php} label={'PHP'} className='progress-item'></ProgressBar>

            </Col>
            <Col lg={6}>
              <ProgressBar now={this.state.cs} label={'C# (.NET)'} className='progress-item'></ProgressBar>
              <ProgressBar now={this.state.js} label={'Javascript'} className='progress-item'></ProgressBar>
              <ProgressBar now={this.state.dart} label={'Dart'} className='progress-item'></ProgressBar>
              <ProgressBar now={this.state.sh} label={'Bash'} className='progress-item'></ProgressBar>
            </Col>
          </Row>
          <br/><br/>
          <Row><h4>Technologies</h4></Row>
          <Row>
            <Col lg={6}>
              <ProgressBar now={this.state.react} label={'React'} className='progress-item'></ProgressBar>
              <ProgressBar now={this.state.nodejs} label={'Node.js'} className='progress-item'></ProgressBar>
              <ProgressBar now={this.state.mysql} label={'MySQL'} className='progress-item'></ProgressBar>
            </Col>
            <Col lg={6}>
              <ProgressBar now={this.state.redux} label={'Redux'} className='progress-item'></ProgressBar>
              <ProgressBar now={this.state.pytorch} label={'Pytorch'} className='progress-item'></ProgressBar>
              <ProgressBar now={this.state.flutter} label={'Flutter'} className='progress-item'></ProgressBar>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MySkill;