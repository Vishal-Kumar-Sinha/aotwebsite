import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experienceicon } from "./Icons";

const Experience = () => {
  return (
    <>
      <div>
        <VerticalTimeline lineColor="rgb(33, 150, 243)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black", boxShadow: "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7), inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff", boxShadow: "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7), inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)" }}
            icon={<Experienceicon />}
          >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
          </VerticalTimelineElement>
          
          {/* <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<DribbbleIcon />}
          /> */}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
