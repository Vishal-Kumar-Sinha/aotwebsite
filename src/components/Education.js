import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Educationicon, DribbbleIcon } from "./Icons";

const Education = () => {
  return (
    <>
      <div>
        <VerticalTimeline  lineColor="rgb(33, 150, 243)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ boxShadow: "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7), inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff", boxShadow: "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7), inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)" }}
            icon={<Educationicon />}
          >
            <div className=" text-dark">
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            contentStyle={{ boxShadow: "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7), inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)" }}
            //contentArrowStyle={{ boxShadow: "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7), inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff", boxShadow: "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7), inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)" }}
            icon={<Educationicon />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            contentStyle={{ boxShadow: "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7), inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)" }}
            //contentArrowStyle={{ boxShadow: "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7), inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff", boxShadow: "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7), inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)" }}
            icon={<Educationicon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
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

export default Education;
