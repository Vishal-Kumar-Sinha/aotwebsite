import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";
import Slider3d from "@/components/banner/Slider3d";

import { studentbanner } from "@/dictionary/Bannerlist";
import {
  campusphotos,
  btech60list,
  btech75list,
} from "@/dictionary/Campuslist";

const Student = () => {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.6,
        staggerChildren: 0.4,
      },
    },
  };
  const childitem = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 1.2,
      },
    },
  };
  const childitem2 = {
    hidden: { opacity: 0, scale: 0.75, rotateY: 180 },
    show: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        ease: "easeOut",
        duration: 1.2,
      },
    },
  };
  const childitem4 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1.2,
      },
    },
  };
  return (
    <>
      <Head>
        <title>AOT | Life@AOT</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-2 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Banner sliderItems={studentbanner} />
        <Layout className="!pt-8">
          <motion.div variants={parent} initial="hidden" whileInView="show">
            <div className="flex mt-2 flex-wrap rounded-2xl px-4 w-full justify-center">
              <AnimatedText
                text="Campus Communities"
                className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div>
                <motion.p
                  variants={childitem}
                  initial="hidden"
                  whileInView="show"
                  className="pb-1 font-sans font-medium text-lg"
                >
                  &emsp;&emsp;&emsp;AOT – where the zeal of co and extra
                  curricular activities are limitless and a deep sense of
                  belonging prevails. One can get into everything with the
                  following five communities of AOT campus : -
                </motion.p>
              </div>
              <motion.div
                variants={parent}
                initial="hidden"
                whileInView="show"
                className="flex flex-wrap mx-auto xll:mx-0 mb-10 mt-5 justify-center"
              >
                <motion.a
                  variants={childitem4}
                  className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                  href="/communities/ardour"
                >
                  Ardour
                </motion.a>
                <motion.a
                  variants={childitem4}
                  className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                  href="/communities/agile"
                >
                  Agile
                </motion.a>
                <motion.a
                  variants={childitem4}
                  className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                  href="/communities/acuity"
                >
                  Acuity
                </motion.a>
                <motion.a
                  variants={childitem4}
                  className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                  href="/communities/analects"
                >
                  Analects
                </motion.a>
                <motion.a
                  variants={childitem4}
                  className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                  href="/communities/accilivities"
                >
                  Accilivities
                </motion.a>
              </motion.div>
            </div>
            <motion.div
              variants={childitem}
              initial="hidden"
              whileInView="show"
              className="flex flex-wrap rounded-2xl px-4 w-full "
            >
              <AnimatedText
                text="Activities Beyond Academics"
                className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)]"
              />
              <div>
                <motion.p
                  variants={childitem}
                  className="pb-1 font-sans font-medium text-lg"
                >
                  &emsp;&emsp;&emsp;The Comprehensive Curriculum at Academy of
                  Technology creates space for various activities beyond the
                  university prescribed syllabus. AOT organizes several
                  seminars, industrial visits, invited lectures and
                  national/international conferences on a regular basis to
                  enhance the academic knowledge and professional competence of
                  students. Renowned academicians and experts from top corporate
                  firms visit the college to speak to the students about recent
                  advancements in technology. Arrangement is also made to
                  broadcast webinars relevant to the academic interests of the
                  students.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              variants={childitem}
              initial="hidden"
              whileInView="show"
            >
              <Slider3d props={campusphotos} />
            </motion.div>
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              className="flex flex-wrap rounded-2xl px-4 w-full"
            >
              <AnimatedText
                text="Academic Performance"
                className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)]"
              />
              <motion.p
                variants={childitem}
                className="pb-1 font-sans font-medium text-lg"
              >
                &emsp;&emsp;&emsp;Performance is always the result of
                intelligent planning, focused efforts and commitment to
                excellence. Steady improvement in university result of students
                due to Comprehensive Academic System of AOT attests that
                positive change is the end result of true learning.
              </motion.p>
              <div className="xss:overflow-x-auto">
                <motion.div
                  variants={childitem2}
                  className="rounded-2xl w-full my-4 shadow-news-shadow xss:overflow-x-scroll"
                >
                  <table className="table rounded-2xl w-full text-center">
                    <thead className="border-b llg:text-2xl rounded-t-2xl shadow-inside-shadow">
                      <tr className="rounded-t-2xl bg-blue-950/20">
                        <th
                          scope="col"
                          className="px-2 py-4 rounded-tl-2xl shadow-inside-shadow border-r"
                        >
                          Year of Graduation
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-4 shadow-inside-shadow border-r"
                        >
                          Graduation Level (B.Tech) Performance DGPA 6.75 &
                          above i.e. equivalent to 60% marks
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-4 rounded-tr-2xl shadow-inside-shadow border-r"
                        >
                          Entry Level Standard (60% & above in HS/10+2 standard)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {btech60list.map((btech60, index) => (
                        <tr key={index} className="border-b">
                          <td className="whitespace-nowrap px-2 font-bold py-4 border-r">
                            {btech60.year}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 border-r">
                            {btech60.btech}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {btech60.hs}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
                <div className=" bg-transparent h-3"></div>
                <motion.div
                  variants={childitem2}
                  className="rounded-2xl w-full my-4 shadow-news-shadow xss:overflow-x-scroll"
                >
                  <table className="table rounded-2xl w-full text-center">
                    <thead className="border-b llg:text-2xl rounded-t-2xl shadow-inside-shadow">
                      <tr className="rounded-t-2xl bg-blue-950/20">
                        <th
                          scope="col"
                          className="px-2 py-4 rounded-tl-2xl shadow-inside-shadow border-r"
                        >
                          Year of Graduation
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-4 shadow-inside-shadow border-r"
                        >
                          Graduation Level (B.Tech) Performance DGPA 8.25 &
                          above i.e. equivalent to 75% marks
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-4 rounded-tr-2xl shadow-inside-shadow border-r"
                        >
                          Entry Level Standard (75% & above in HS/10+2 standard)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {btech75list.map((btech75, index) => (
                        <tr key={index} className="border-b">
                          <td className="whitespace-nowrap px-2 font-bold py-4 border-r">
                            {btech75.year}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 border-r">
                            {btech75.btech}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {btech75.hs}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              className="flex flex-wrap rounded-2xl p-4 w-full "
            >
              <AnimatedText
                text="Sucess @ GATE/ GRE/ CAT"
                className="!text-2xl text-start italic font-serif !text-[hsl(232,47%,28%)]"
              />
              <div>
                <div className="pb-1 font-medium text-lg">
                  <ul style={{ listStyleType: "disc" }}>
                    <motion.li variants={childitem} className="p-1.5">
                      64 students have qualified GATE and are eligible for GATE
                      Scholarship.
                    </motion.li>
                    <motion.li variants={childitem} className="p-1.5">
                      9 students have qualified GRE and 8 students have
                      qualified CAT.
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              className="flex mt-2 flex-wrap rounded-2xl px-4 w-full justify-center"
            >
              <AnimatedText
                text="Comprehensive Academic System"
                className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div>
                <motion.p variants={childitem} className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;In its continuous journey towards
                  excellence, Academy of Technology has instituted several Best
                  Practices in every sphere from Governance to Academics, from
                  Students’ Life Cycle Management to Faculty Recruitment &
                  Development. The{" "}
                  <span className=" font-extrabold text-gray-600">
                    Comprehensive Curricula @ AOT
                  </span>{" "}
                  is one such Best Practice. It has been implemented to enhance
                  the Employability Quotient of every one of our students as
                  well as help them achieve a high percentile in GATE through an
                  integrated and blended curriculum that meets present industry
                  trends.
                </motion.p>
                <motion.p variants={childitem} className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;The objective of this Best Practice is to
                  help students progressively attain a desired benchmark in
                  their professional competencies by achieving the right balance
                  between technical skills and soft skills (in alignment with
                  the Graduate Attributes articulated by Accreditation bodies
                  like NBA, NAAC & ABET as well as industry requirements).
                </motion.p>
                <motion.p variants={childitem} className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;To achieve this objective the University
                  syllabus has been rounded out and enriched keeping in mind
                  desired learning outcomes and specific industry requirements.
                  “In today’s knowledge-based economy, what you earn depends on
                  what you learn.” To equip students for their future careers,
                  additional content & resources for crucial skill-enhancement
                  have been integrated as needed. Along with this, using the
                  knowledge and experiences of several distinguished
                  well-wishers of AOT, the very approach to teaching & learning
                  is being continuously enriched so that every student can
                  develop the skills required for the world beyond.
                </motion.p>
                <motion.div variants={childitem} className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;To achieve the goal of imparting quality
                  education and also to instil confidence in the minds of
                  students, the whole edifice of the academic system is based on
                  the tripod of
                  <div className="px-6 pt-2 ml-10 w-fit font-serif font-bold">
                    <ul style={{ listStyleType: "lower-roman" }}>
                      <motion.li variants={childitem}>Attendance.</motion.li>
                      <motion.li variants={childitem}>Teaching- Learning & Mentoring Process.</motion.li>
                      <motion.li variants={childitem}>Academic Integrity.</motion.li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div variants={parent} initial="hidden" whileInView="show" className="flex flex-wrap rounded-2xl p-4 w-full ">
              <AnimatedText
                text="Attendance"
                className="!text-4xl text-center italic font-serif !text-[hsl(232,47%,28%)]"
              />
              <div>
                <motion.p variants={childitem} className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;Regular class attendance is fundamental to
                  the orderly acquisition of knowledge. In AOT, utmost
                  importance is given to regular class attendance which is a
                  responsibility and a prerequisite of engineering education.
                  Students should recognize the advantages of regular class
                  attendance, accept it as a personal responsibility and apprise
                  themselves of the consequences of poor attendance.
                </motion.p>
              </div>
            </motion.div>
            <motion.div variants={parent} initial="hidden" whileInView="show" className="flex flex-wrap rounded-2xl p-4 w-full ">
              <AnimatedText
                text="Teaching - Learning & Counselling Process"
                className="!text-4xl text-center italic font-serif !text-[hsl(232,47%,28%)]"
              />
              <div>
                <motion.p variants={childitem} className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;AOT regulates the teaching-learning &
                  counselling process using the following comprehensive methods:
                </motion.p>
              </div>
              <div>
                <AnimatedText
                  text="Orientation Programme for Educators"
                  className="!text-2xl text-start italic font-serif !text-[hsl(232,47%,28%)]"
                />
                <div className="px-6 pt-2 ml-10 w-fit text-lg font-medium">
                  <ul style={{ listStyleType: "circle" }}>
                    <motion.li variants={childitem}>
                      Arrangement of workshop at the beginning of every semester
                      to review previous semester’s teaching-learning process,
                      adopt steps to remove the flaws, introduce new ideas and
                      chalk out teaching plan for the next semester.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Based on the feedback received from various cross sections
                      of students, counselling to desired faculty members for
                      improvement.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Completion of prescribed syllabus in a structured manner
                      with provision for extra hours in class routine to teach
                      the comprehensive curriculum in a relaxed fashion.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Distribution of detailed syllabus and lecture plans with
                      course objectives and e-learning resources to the students
                      at the beginning of every semester.
                    </motion.li>
                  </ul>
                </div>
              </div>
              <div>
                <AnimatedText
                  text="Counselling & Mentoring Weaker and Wayward Students"
                  className="!text-2xl text-start italic font-serif !text-[hsl(232,47%,28%)]"
                />
                <div className="px-6 pt-2 ml-10 w-fit text-lg font-medium">
                  <ul style={{ listStyleType: "circle" }}>
                    <motion.li variants={childitem}>
                      Regular mentoring and counselling on one-to-one basis for
                      attendance and academic improvement and to bring back
                      wayward students to main stream.
                    </motion.li>
                    <motion.li variants={childitem}>Remedial lectures/tutorials beyond class hours.</motion.li>
                    <motion.li variants={childitem}>
                      Interaction with parents, with preferably two Guardian
                      Interaction Sessions per semester at the Institute level
                      and as many as required at the departmental level.
                    </motion.li>
                  </ul>
                </div>
              </div>
              <div>
                <AnimatedText
                  text="Course Delivery in Comprehensive Manner with Proper Teaching Plan"
                  className="!text-2xl text-start italic font-serif !text-[hsl(232,47%,28%)]"
                />
                <div className="px-6 pt-2 ml-10 w-fit text-lg font-medium">
                  <ul style={{ listStyleType: "circle" }}>
                    <motion.li variants={childitem}>
                      A series of Orientation Classes at the beginning of each
                      semester to generate awareness about various aspects of
                      academic performance.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Proper reallocation of classes on daily basis (if
                      required) to ensure that no class is let off.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Delivery of classroom instruction with emphasis on
                      powerpoint presentation and proper animation to make the
                      lecture illustrative and understandable.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Advice regarding use of printed and e-resources for some
                      such information which either is not available in text
                      books or needs to be updated.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Question Banks pertaining to MAKAUT, WB syllabus,
                      competitive exams like GATE & Campussing & additional
                      print & e-resources as needed. Question Banks are provided
                      to students to provide them opportunity to assess their
                      own understanding of subjects.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Video lecture, lecture from industry experts to enhance
                      the exposure and application knowledge.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Tutorials and Home assignments to enhance conceptual
                      knowledge based on Industry application of the relevant
                      subject. In lab work, the students are allowed to explore,
                      investigate and critically examine the instruments,
                      experiments and design methodology. Some space is
                      available here for independent thinking.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Optimum use of lab & effective execution of final year
                      projects with focus on areas beyond curriculum & real-life
                      industry practices. In GDs and Seminars, students are
                      advised to choose topics not covered in the texts and in
                      the prescribed syllabi; once again they are allowed to
                      choose freely the subjects of topical interest for their
                      final year projects.
                    </motion.li>
                  </ul>
                </div>
              </div>
              <div>
                <AnimatedText
                  text="Continuous Assessment and Appraisal"
                  className="!text-2xl text-start italic font-serif !text-[hsl(232,47%,28%)]"
                />
                <div className="px-6 pt-2 ml-10 w-fit text-lg font-medium">
                  <ul style={{ listStyleType: "circle" }}>
                    <motion.li variants={childitem}>
                      Regular class assignment, quiz on subject topics to review
                      the students’ attainment of instructional outcomes.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Two well planned (pre-scheduled) class tests to gauge
                      their level of progress and help the faculty members adopt
                      monitoring and corrective measures.
                    </motion.li>
                    <motion.li variants={childitem}>University examination system with high integrity.</motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div variants={parent} initial="hidden" whileInView="show" className="flex flex-wrap rounded-2xl p-4 w-full ">
              <AnimatedText
                text="Academic Integrity"
                className="!text-4xl text-center italic font-serif !text-[hsl(232,47%,28%)]"
              />
              <div>
                <motion.p variants={childitem} className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;Every individual student, faculty and staff
                  of AOT believes that unfair examination system, whether it is
                  home assignment, internal examination or university
                  examination, is the ultimate violation of academic integrity.
                  It is an already established fact that our examination system
                  which is conducted with utmost integrity makes our students
                  hardworking and motivated, and thus enables them to get right
                  placement and/or opportunity of higher studies through
                  competitive examinations.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default Student;
