import React, { Component } from 'react';
import { Row, Col, Container, CardColumns, Card } from 'react-bootstrap';
import './Projects.css';
import askaiImg from './projectImg/askai.png';
import artStyleImg from './projectImg/artstyle.png';
import digitreco from './projectImg/digitreco.png';
import particles from './projectImg/particle.png';
import aug from './projectImg/aug.jpg';
import raspberry from './projectImg/raspberry.jpg';
import chart from './projectImg/chart.jpg';
import scraping from './projectImg/scraping.png';


class Projects extends Component {
  state = {}
  render() {
    return ( 
      <Container className='section-padding bg-gray' fluid='true' id='Portfolio'>
        <Container>
          <Row data-aos='fade-up'>
            <Col lg={12}>
              <div className='section-head'>
                <h4>My Projects</h4>
                <p>Things I have been doing</p>
              </div>
            </Col>
          </Row>
          
          <CardColumns>
            <Card data-aos='fade-up'>
              <Card.Img variant="top" src={askaiImg} />
              <Card.Body>
                <Card.Title><Card.Link href="https://github.com/Aleadinglight/askAI" className='cardlink'>Ask AI</Card.Link></Card.Title>
                <Card.Text>
                  An AI name Galadriel that can be controlled with voice command to search for definition of a word. The project
                  is also hosted on Heroku with user interface.
                </Card.Text>
                
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Node.js, Vue.js</small>
              </Card.Footer>
            </Card>
            
            <Card data-aos='fade-up'>
              <Card.Img variant="top" src={digitreco} />
              <Card.Body>
                <Card.Title><Card.Link href="https://github.com/Aleadinglight/Real-time-handwritten-digits-recognition" className='cardlink'>Real-time Digits Recognition</Card.Link></Card.Title>
                <Card.Text>
                  An application in Python that recognize hand-written digit using input images from desktop's camera.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Pytorch, OpenCV</small>
              </Card.Footer>
            </Card>

            <Card data-aos='fade-up'>
              <Card.Img variant="top" src={artStyleImg} />
              <Card.Body>
                <Card.Title><Card.Link href="https://github.com/Aleadinglight/Pytorch-VGG-19" className='cardlink'>Art-style Transfer</Card.Link></Card.Title>
                <Card.Text>
                  Create a mix in style and content of two pictures using the power of Convolutional Neural Network
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Pytorch</small>
              </Card.Footer>
            </Card>

            <Card data-aos='fade-up'>
              <Card.Img variant="top" src={particles} />
              <Card.Body>
                <Card.Title><Card.Link href="https://github.com/Aleadinglight/Flutter-Particles" className='cardlink'>Flutter Particles</Card.Link></Card.Title>
                <Card.Text>
                  A Flutter widget for creating particles background. Posted on Flutter's packages site. 
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Dart, Flutter</small>
              </Card.Footer>
            </Card>

            <Card data-aos='fade-up'>
              <Card.Img variant="top" src={chart} />
              <Card.Body>
                <Card.Title><Card.Link href="https://github.com/Aleadinglight/Interactive-chart-java" className='cardlink'>Java Interactive Chart</Card.Link></Card.Title>
                <Card.Text>
                  An application for displaying 2D chart on energy consumption where user can interact with the chart directly. Data is
                  stored in a tree where each node is the value of the energy used.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">JavaFx</small>
              </Card.Footer>
            </Card>

            <Card data-aos='fade-up'>
              <Card.Img variant="top" src={scraping} />
              <Card.Body>
                <Card.Title><Card.Link href="https://github.com/Aleadinglight/Job-Description-Data-Scraping" className='cardlink'>Job Description Data Scrapping</Card.Link></Card.Title>
                <Card.Text>
                  A tool in Python to get the job's description from Indeed.com
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Python</small>
              </Card.Footer>
            </Card>

            <Card data-aos='fade-up'>
              <Card.Img variant="top" src={aug} />
              <Card.Body>
                <Card.Title><Card.Link href="https://github.com/Aleadinglight/Data-Augmentation" className='cardlink'>Data Augmentation</Card.Link></Card.Title>
                <Card.Text>
                  Using data augmentation methods to increase the dataset                
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">MathLab</small>
              </Card.Footer>
            </Card>

            <Card data-aos='fade-up'>
              <Card.Img variant="top" src={raspberry} />
              <Card.Body>
                <Card.Title><Card.Link href="https://github.com/Aleadinglight/Rasp_AppDev" className="cardlink">Raspberry Pi Application</Card.Link></Card.Title>
                <Card.Text>
                  Using Rasperry Pi 3 with USB soundcard and microphone to visualize sound.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">JavaFx</small>
              </Card.Footer>
            </Card>
          </CardColumns>  
        </Container>
      </Container> 
    );
  }
}

export default Projects;