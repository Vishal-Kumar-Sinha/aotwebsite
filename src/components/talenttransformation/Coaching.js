import React from "react";
import AnimatedText from "@/components/AnimatedText";
import AnimatedTextWord from "@/components/AnimatedTextWord";

//import directories
import { btechcoachinglinks, mcacoachinglinks } from "@/dictionary/Talentlinks";

const Coaching = () => {
  return (
    <div>
      <AnimatedTextWord
        text="&ldquo;Empowering students by enhancing Employability Quotient.&rdquo;"
        className="!text-4xl text-[hsl(232,47%,28%)] inline text-center font-bold font-serif italic pt-3"
      />
      <div>
        <div className="flex flex-wrap rounded-2xl p-4 w-full">
          <p className="pb-1 font-sans font-medium text-lg">
            &emsp;&emsp;&emsp;Achievement is a target won by training and
            habituation. For most colleges training is a one-time affair, but we
            believe in a well-structured & comprehensive approach that helps
            every student achieve his/her true potential. So we reinvented the
            Training for Improvement of Placement Skills (TIPS) begun in 2004
            and instituted a more holistic programme from 2012. Presently, AOT
            provides training from the very first year with regular internal
            assessment to enable our B. Tech, B. Tech (Lateral), M. Tech & MCA
            students to be high achievers in Campus Placement. Pre-final and
            final year students have the opportunity to take several online
            practice tests using the extensive set of questions on AOT’s
            Moodle-based Assessment Portal to improve their performance during
            campus recruitment.
          </p>
        </div>
        <div>
          <AnimatedText
            text="Training Schedule for B.Tech"
            className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
          />
          <div className="flex flex-wrap rounded-2xl p-4 w-full">
            <div className="rounded-2xl w-full shadow-news-shadow md:overflow-x-scroll">
              <table className="table rounded-2xl w-full text-center">
                <thead className="border-b llg:text-2xl rounded-t-2xl shadow-inside-shadow">
                  <tr className="rounded-2xl bg-blue-950/20">
                    <th
                      scope="col"
                      colSpan={1}
                      className="px-2 py-4 rounded-tl-2xl shadow-inside-shadow border-r"
                    >
                      Programmes
                    </th>
                    <th
                      scope="col"
                      colSpan={1}
                      className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                    >
                      Focussed Objectives
                    </th>
                    <th
                      scope="col"
                      colSpan={8}
                      className="px-2 py-4 rounded-tr-2xl shadow-inside-shadow"
                    >
                      Weekly contact hours per semester (hrs./week)
                    </th>
                  </tr>
                  <tr className=" bg-blue-950/10">
                    <th scope="col" className="px-2 py-4 border-r"></th>
                    <th scope="col" className="px-3 py-4 border-r"></th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      1st
                    </th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      2nd
                    </th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      3rd
                    </th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      4th
                    </th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      5th
                    </th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      6th
                    </th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      7th
                    </th>
                    <th scope="col" className="px-2 shadow-inside-shadow py-4">
                      8th
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {btechcoachinglinks.map((btechcoachinglink, index1) => (
                    <>
                      <tr key={index1} className="border-b">
                        <th className="whitespace-nowrap px-3 py-3 text-xl font-serif shadow-inside-shadow" colSpan={10}>{btechcoachinglink.skilltype}</th>
                      </tr>
                      {btechcoachinglink.skill.map((coaching, index2) => (
                        <tr className="border-b">
                          <td className=" px-2 font-bold py-4 border-r">
                            {coaching.programme}
                          </td>
                          <td className=" md:w-60 w-[30vw] px-3 py-4 border-r">
                            {coaching.objectives}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {coaching.sem1}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {coaching.sem2}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {coaching.sem3}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {coaching.sem4}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {coaching.sem5}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {coaching.sem6}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {coaching.sem7}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {coaching.sem8}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-xl italic font-serif font-medium text-gray-600">*NBT – Need-Based Company-specify Training</div>
          </div>
        </div>
        <div className="mt-6">
          <AnimatedText
            text="Training Schedule for MCA"
            className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
          />
          <div className="flex flex-wrap rounded-2xl p-4 w-full">
            <div className="rounded-2xl w-full shadow-news-shadow md:overflow-x-scroll">
              <table className="table rounded-2xl w-full text-center">
                <thead className="border-b llg:text-2xl rounded-t-2xl shadow-inside-shadow">
                  <tr className="rounded-2xl bg-blue-950/20">
                    <th
                      scope="col"
                      colSpan={1}
                      className="px-2 py-4 rounded-tl-2xl shadow-inside-shadow border-r"
                    >
                      Programmes
                    </th>
                    <th
                      scope="col"
                      colSpan={1}
                      className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                    >
                      Focussed Objectives
                    </th>
                    <th
                      scope="col"
                      colSpan={6}
                      className="px-2 py-4 rounded-tr-2xl shadow-inside-shadow"
                    >
                      Weekly contact hours per semester (hrs./week)
                    </th>
                  </tr>
                  <tr className=" bg-blue-950/10">
                    <th scope="col" className="px-2 py-4 border-r"></th>
                    <th scope="col" className="px-3 py-4 border-r"></th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      1st
                    </th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      2nd
                    </th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      3rd
                    </th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      4th
                    </th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      5th
                    </th>
                    <th
                      scope="col"
                      className="px-2 shadow-inside-shadow py-4 border-r"
                    >
                      6th
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mcacoachinglinks.map((mcalink, index1) => (
                        <tr className="border-b">
                          <td className=" px-2 font-bold py-4 border-r">
                            {mcalink.programme}
                          </td>
                          <td className=" md:w-60 w-[30vw] px-3 py-4 border-r">
                            {mcalink.objectives}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {mcalink.sem1}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {mcalink.sem2}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {mcalink.sem3}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {mcalink.sem4}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {mcalink.sem5}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {mcalink.sem6}
                          </td>
                        </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaching;
