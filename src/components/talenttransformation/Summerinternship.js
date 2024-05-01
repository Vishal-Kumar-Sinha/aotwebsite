import React from "react";
//import components
import AnimatedTextWord from "@/components/AnimatedTextWord";

// import dictionary
import { summerinternshipcompanylinks } from "@/dictionary/Summerinternshipcompanylist";

const Summerinternship = () => {
  return (
    <div>
      <AnimatedTextWord
        text="&ldquo;Summer  Internships  @  AOT&rdquo;"
        className="!text-4xl text-[hsl(232,47%,28%)] inline text-center font-bold font-serif italic pt-3"
      />
      <div>
        <div className="flex flex-wrap rounded-2xl p-4 w-full">
          <p className="pb-1 font-sans font-medium text-lg">
            &emsp;&emsp;&emsp;In AOT, seminars, industrial visits, invited
            lectures and national/ international conferences are organized on a
            regular basis to enhance professional competence of students. In
            every academic session Academy of Technology arranges summer
            training/internship for every pre-final year B. Tech student. For
            information regarding companies where our students have done their
            summer training/internship during the last three years please glance
            through the following list&nbsp;: -
          </p>
          <div className="px-6 py-2 ml-10 font-sans font-[650] text-lg w-fit">
            <ul style={{ listStyleType: "disc" }}>
              {summerinternshipcompanylinks.map((companylink, index) => (
                <li key={index}>{companylink}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summerinternship;
