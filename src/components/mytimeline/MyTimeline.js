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
          icon
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer at Vamk
          </h3>
          <p className="my-timeline-time"><b>Fall 2018 - Spring 2018</b></p>
          <p className="my-timeline-description">
            As a request from a small start-up, with the help of my teacher. I design and implement a Software Application that interacts with an industrial Coordinate-measuring machine. The application provides the user with different measuring methods and exports the result to a readable format.
          </p>
          <Badge pill bg="secondary">
            C#
          </Badge>{' '}
          <Badge pill bg="secondary">
            .Net
          </Badge>{' '}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work my-timeline-card"
          contentStyle={{}}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer at Excosoft
          </h3>
          <p className="my-timeline-time"><b>Summer 2019 - Now</b></p>
          <p className="my-timeline-description">
            I work with my team to build a Document Management System as a Web Application. A full-stack developer, I work with the User Interface and sometimes the backend with the assistance of my highly experienced senior.
          </p>
          <Badge pill bg="secondary">C#</Badge>{" "}
          <Badge pill bg="secondary">Javascript</Badge>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work my-timeline-card"
          contentStyle={{}}
          contentArrowStyle={{ borderRight: '7px solid #FDC12A' }}

          iconStyle={{ background: '#FDC12A', color: '#fff' }}
          icon
        >
          <h3 className="vertical-timeline-element-title">
            Former Backend Developer at Intuitive
          </h3>
          <p className="my-timeline-time"><b>Winter 2021 - Now</b></p>
          <p className="my-timeline-description">
            I decided to try out a different challenge. After getting in touch with the CEO of the company.
            I designed the architecture of an Analytics Platform that helps customers reduce building costs and provide other monitoring metrics.
          </p>
          <p className="my-timeline-description">
            As a backend developer, I build and maintain the application server. I am also responsible for database management, cloud hosting & deployment.
          </p>
          <Badge pill bg="secondary">Node.js</Badge>{" "}
          <Badge pill bg="secondary">TypeScript</Badge>{" "}
          <Badge pill bg="secondary">Database</Badge>{" "}
          <Badge pill bg="secondary">Pub/Sub</Badge>
        </VerticalTimelineElement>
      </VerticalTimeline>
    )
  }
}
