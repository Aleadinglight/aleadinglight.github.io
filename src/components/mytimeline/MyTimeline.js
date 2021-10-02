import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
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
            Software developer at Vamk
          </h3>
          <p className="my-timeline-time">Fall 2019 - Summer 2019</p>
          <p className="my-timeline-description">
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work my-timeline-card"
          contentStyle={{}}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon
        >
          <h3 className="vertical-timeline-element-title">
            Software developer at Excosoft 
          </h3>
          <p className="my-timeline-time">Fall 2019 - Summer 2019</p>
          <p className="my-timeline-description">
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work my-timeline-card"
          contentStyle={{}}
          contentArrowStyle={{ borderRight: '7px solid #FDC12A' }}
          
          iconStyle={{ background: '#FDC12A', color: '#fff' }}
          icon
        >
          <h3 className="vertical-timeline-element-title">
            Full-stack web engineer
          </h3>
          <p className="my-timeline-time">Fall 2019 - Summer 2019</p>
          <p className="my-timeline-description">
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    )
  }
}
