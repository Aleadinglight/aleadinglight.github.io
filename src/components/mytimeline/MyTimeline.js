import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Badge from 'react-bootstrap/Badge'
import './MyTimeline.css'

export default class MyTimeline extends Component {
  render() {
    return (
      <VerticalTimeline layout="1-column-left">
        <VerticalTimelineElement
          className="vertical-timeline-element--work my-timeline-card"
          contentStyle={{}}
          contentArrowStyle={{ borderRight: '7px solid #ff6600' }}
          iconStyle={{ background: '#ff6600', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            Former Lead Developer at Intuitive
          </h3>
          <p className="my-timeline-time"><b>Spring 2021 - Now</b></p>
          <p className="my-timeline-description">
            I work on an Analytics Platform that helps customers reduce building costs and provide other monitoring metrics.
          </p>
          <p className="my-timeline-description">
            As a lead backend developer, I established the company's full life-cycle software development, including architectural design, features implementation, unit & functional testing, bugs fixing, and server deployment.
          </p>
          <p className="my-timeline-description">
            Following a review of the application operation, I decided to take things a step further to improve performance and reliability. By optimizing the algorithms and database queries for large data sets, I archived a 30% improvement in application load time compared to the old version.
          </p>
          <Badge pill bg="secondary">Node.js</Badge>{" "}
          <Badge pill bg="secondary">TypeScript</Badge>{" "}
          <Badge pill bg="secondary">Graph Database</Badge>{" "}
          <Badge pill bg="secondary">Time-series Database</Badge>{" "}
          <Badge pill bg="secondary">Google Cloud Platform</Badge>{" "}
          <Badge pill bg="secondary">Pub/Sub</Badge>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work my-timeline-card"
          contentStyle={{}}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer at Excosoft
          </h3>
          <p className="my-timeline-time"><b>Summer 2019 - Now</b></p>
          <p className="my-timeline-description">
            I work with my team to build a Document Management System as a Web Application. My role as a full-stack developer involves working with the UI and sometimes the backend, with the guidance of my highly experienced senior.
          </p>
          <p className="my-timeline-description">
            During this time I also work on various tasks including application authorization & authentication, background task processing, events notification,... I also participated in refactoring legacy code and fixing bugs to maintain the application's stability.
          </p>
          <Badge pill bg="secondary">C#</Badge>{" "}
          <Badge pill bg="secondary">.Net</Badge>{" "}
          <Badge pill bg="secondary">Java</Badge>{" "}
          <Badge pill bg="secondary">Maven</Badge>{" "}
          <Badge pill bg="secondary">Javascript</Badge> {" "}
          <Badge pill bg="secondary">Cross-platform Web Application</Badge>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work my-timeline-card"
          contentStyle={{}}
          contentArrowStyle={{ borderRight: '7px solid #FDC12A' }}
          iconStyle={{ background: '#FDC12A', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer at Vamk
          </h3>
          <p className="my-timeline-time"><b>Fall 2018 - Summer 2019</b></p>
          <p className="my-timeline-description">
            As a request from a small start-up, with the help of my math teacher. I collaborated with a team to design and implement a Software Application that interacts with an industrial coordinate-measuring machine. The application provides the user with different measuring stages and exports the result to a readable format.
          </p>
          <Badge pill bg="secondary">
            C++ 14
          </Badge>{' '}
          <Badge pill bg="secondary">
            Desktop Application
          </Badge>{' '}
        </VerticalTimelineElement>
      </VerticalTimeline>
    )
  }
}
