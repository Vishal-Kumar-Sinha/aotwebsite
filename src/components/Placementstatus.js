import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa6";
import Link from "next/link";

import { placementlist } from "@/dictionary/Placementlinks";

const Placementstatus = () => {
  const setdata = ({plyear}) => {
    try {
      localStorage.setItem("aot-placement-year", plyear);
    } catch (error) {
      //error
    }
  }
  return (
    <div>
      <VerticalTimeline lineColor="hsl(232,47%,28%)">
        {placementlist.map((placementitem, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            key={index}
            visible={true}
            animate={false}
            contentStyle={{
              boxShadow:
                "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7), inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)",
            }}
            contentArrowStyle={{ display: "none" }}
            date={placementitem.year}
            iconStyle={{
              background: "hsl(232,47%,28%)",
              color: "#fff",
              boxShadow:
                "6px 6px 10px -1px rgba(0,0,0,0.15), -6px -6px 10px -1px rgba(255,255,255,0.7), inset 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px -4px 6px -1px rgba(255,255,255,0.7), -0.5px -0.5px 0px rgba(255,255,255,1), 0.5px 0.5px 0px rgba(0,0,0,0.15), 0px 12px 10px -10px rgba(0,0,0,0.05)",
            }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">
              Highest Package<span>{placementitem.hp}</span>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Average Package<span>{placementitem.avp}</span>
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              {placementitem.toffers} Offers
            </h4>
            <div className=" overflow-x-auto">
              <table className="table text-center">
                <thead className="border-b bg-[hsl(232,47%,28%)]/10">
                  <tr>
                    <th className="border-x px-3 py-0.5">Till April</th>
                    <th className="border-x px-3 py-0.5">Final Placement</th>
                  </tr>
                </thead>
                <tbody className="border-b">
                  <tr>
                    <td className="border-x px-3 py-0.5">
                      {placementitem.tillapril}%
                    </td>
                    <td className="border-x px-3 py-0.5">
                      {placementitem.final}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <Link
                className="border border-accent hover:border-none px-2 rounded-2xl py-1 hover:bg-accent/10 hover:shadow-news-shadow transition-all duration-200 ease-in-out"
                href="/placementdetails"
                onClick={() => {
                  try {
                    localStorage.setItem("aot-placement-year", placementitem.year);
                  } catch (error) {
                    //error
                  }
                }}
              >
                View Details
              </Link>
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Placementstatus;
