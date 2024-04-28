import React from "react";
import AnimatedText from "../AnimatedText";
import AnimatedTextWord from "../AnimatedTextWord";

const Gate = () => {
  return (
    <div>
      <AnimatedTextWord
        text="&ldquo;Training  for  GATE  @  AOT&rdquo;"
        className="!text-4xl text-[hsl(232,47%,28%)] inline text-center font-bold font-serif italic pt-3"
      />
      <div>
        <div className="flex flex-wrap rounded-2xl p-4 w-full">
          <p className="pb-1 font-sans font-medium text-lg">
            &emsp;&emsp;&emsp;In the present era, a valid GATE score is
            undeniably a very important aspect in engineering education. The
            rapidly escalating number of students applying for GATE every year
            attests to this. From 7,77,134 applicants in 2012 to 9,22,167 in
            2017, this number has increased by 18.66% in merely 5 years.
          </p>
          <p className=" text-2xl font-serif font-extrabold p-2 ml-2">
            WHY <span className=" font-mont text-4xl">?</span>
          </p>
        </div>
        <div>
          <div className="px-6 py-2 ml-10 font-sans text-lg w-fit">
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <span className="font-bold">PSU Jobs :&emsp;</span>
                <span>
                  Every year almost all the top Indian PSUs (ONGC, BHEL, NTPC,
                  BPCL, CEL, Indian Oil, Power Grid, etc.) recruit engineering
                  students for thousands of vacancies and for these a valid GATE
                  score is mandatory. Nowadays, high salary and service security
                  make PSU jobs more lucrative than private sector jobs.
                  Moreover, jobs in the private sector, including IT sector, are
                  decreasing day by day due to recession, automation, global
                  foreign policy, etc.
                </span>
              </li>
              <li>
                <span className="font-bold">Higher Education :&emsp;</span>
                <span className="font-normal">
                  Approx. 12000 seats are available for M. Tech in the IITs and
                  other premier institutions like the NITs, Jadavpur University,
                  IIEST etc. for GATE qualified students. For those aspiring to
                  go abroad, there is also the option to study at Singapore or
                  Germany with a valid GATE score.
                </span>
              </li>
              <li>
                <span className="font-bold">MHRD Scholarship :&emsp;</span>
                <span className="font-normal">
                  Students who enroll for M. Tech programmes with a valid GATE
                  score are eligible for a monthly scholarship of Rs. 12400/-
                  from MHRD.
                </span>
              </li>
              <li>
                <span className="font-bold">
                  Common Exit Test for Engineering degree :&emsp;
                </span>
                <span className="font-normal">
                  MHRD, Govt. of India is proposing to have a common Exit Exam
                  that will be mandatory for engineering students in the near
                  future. Sources say this may be GATE.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" mt-4">
          <AnimatedText
            text="Salient features of AOT’s GATE programme:"
            className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
          />
          <div className="px-6 py-2 ml-10 font-sans font-medium text-lg w-fit">
            <ul style={{ listStyleType: "disc" }}>
              <li>
                81 regular faculty members are having specialization in Industry
                4.0 Technologies, e.g., Internet of Things (IOT), 3D Technology,
                Machine Learning, Data Science, Cloud Computing, Cyber Security,
                Renewable Energy & Energy Management.
              </li>
              <li>
                Average teaching experience of faculty members is 11 years 8
                months.
              </li>
              <li>
                Faculty members of AOT have published 84 papers in various
                International & National Journals.
              </li>
              <li>Existing faculty members of AOT have authored 11 books.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gate;
