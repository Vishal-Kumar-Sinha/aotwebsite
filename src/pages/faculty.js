import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";
import AnimatedTextWord from "@/components/AnimatedTextWord";

import { facultybanner } from "@/dictionary/Bannerlist";
import { facultylinks } from "@/dictionary/Facultylinks";

const Faculty = () => {
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
        duration: 1,
      },
    },
  };
  const childitem2 = {
    hidden: { opacity: 0, scale: 0.95, rotateY: 180 },
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
  return (
    <>
      <Head>
        <title>AOT | Faculty</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Banner sliderItems={facultybanner} />
        <Layout className="!pt-8 ">
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            className="flex flex-wrap rounded-2xl p-4 w-full "
          >
            <AnimatedTextWord
              text="&ldquo;Quality education starts with its educators.&rdquo;"
              className="text-3xl text-[hsl(232,47%,28%)] inline text-center font-bold font-serif italic pt-3"
            />
            <div className=" px-2 py-4 rounded-2xl">
              <motion.p
                variants={childitem}
                className="pb-2 font-sans font-medium text-lg"
              >
                &emsp;&emsp;&emsp;AOT believes in creating an environment that
                helps the students to enhance their intellectual, emotional and
                physical development.
              </motion.p>
              <motion.p
                variants={childitem}
                className="pb-1 font-sans font-medium text-lg"
              >
                &emsp;&emsp;&emsp;Prof. (Dr.) Dilip Bhattacharya, renowned
                Professor of Electronics & Electrical Communication Engineering
                from IIT Kharagpur and the Director of Academy of Technology,
                leads a team of 111 qualified and experienced faculty members
                conforming to AICTE stipulated teacher-student ratio.
              </motion.p>
              <div className="px-6 py-2 ml-10 font-sans font-medium text-lg w-fit">
                <ul style={{ listStyleType: "disc" }}>
                  <motion.li variants={childitem}>
                    81 regular faculty members are having specialization in
                    Industry 4.0 Technologies, e.g., Internet of Things (IOT),
                    3D Technology, Machine Learning, Data Science, Cloud
                    Computing, Cyber Security, Renewable Energy & Energy
                    Management.
                  </motion.li>
                  <motion.li variants={childitem}>
                    Average teaching experience of faculty members is 11 years 8
                    months.
                  </motion.li>
                  <motion.li variants={childitem}>
                    Faculty members of AOT have published 84 papers in various
                    International & National Journals.
                  </motion.li>
                  <motion.li variants={childitem}>
                    Existing faculty members of AOT have authored 11 books.
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
          <div className="mt-2 rounded-2xl p-4 w-full justify-center">
            <AnimatedText
              text="Faculty Members"
              className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div>
              <div className="xl:pl-20 lg:pl-0">
                <motion.div
                  variants={childitem2}
                  initial="hidden"
                  whileInView="show"
                  className="rounded-2xl lg:w-full w-[80vw] shadow-news-shadow md:hidden"
                >
                  <table className="table rounded-2xl w-full text-center">
                    <thead className="border-b llg:text-2xl rounded-t-2xl shadow-inside-shadow">
                      <tr className="rounded-2xl bg-blue-950/20">
                        <th
                          scope="col"
                          className="px-2 py-4 rounded-tl-2xl shadow-inside-shadow border-r"
                        >
                          Name of the Faculty
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-4 shadow-inside-shadow border-r"
                        >
                          Designation
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-4 shadow-inside-shadow border-r"
                        >
                          Highest Qualification
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-4 rounded-tr-2xl shadow-inside-shadow"
                        >
                          Experience
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {facultylinks.map((facultyprofile, index) => (
                        <tr key={index} className="border-b">
                          <td className="whitespace-nowrap px-2 font-bold py-4 border-r">
                            {facultyprofile.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 border-r">
                            {facultyprofile.designation}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4 border-r">
                            {facultyprofile.qualification}
                          </td>
                          <td className="whitespace-nowrap px-2 py-4">
                            {facultyprofile.joindate}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </div>

              <div className=" mt-5 mmd:hidden ">
                <div className="grid gap-6 w-full grid-cols-1 ">
                  {facultylinks.map((facultyprofile, index) => (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.75, rotateY: 180 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                        transition: {
                          ease: "easeOut",
                          delay: 0.1,
                          duration: 1.2,
                        },
                      }}
                      key={index}
                      className="  rounded-3xl p-3 justify-center cursor-pointer shadow-news-shadow"
                    >
                      <div className="font-serif xs:text-xl text-center text-2xl font-semibold">
                        {facultyprofile.name} ({facultyprofile.qualification})
                      </div>
                      <div className="text-lg font-medium text-center">
                        {facultyprofile.designation}
                      </div>
                      <div className="text-md font-medium text-center">
                        {facultyprofile.joindate} of experience
                      </div>
                      {/* <div className="flex justify-around text-lg font-medium text-center">
                        <div className="">{facultyprofile.qualification}</div>
                        <div className="">{facultyprofile.joindate} of experience</div>
                      </div> */}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Faculty;
