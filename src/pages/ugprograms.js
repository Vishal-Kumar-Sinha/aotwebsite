import React from "react";
import Head from "next/head";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";

import { ugcourses } from "@/dictionary/Courseslinks";

const ugprograms = () => {
  return (
    <>
      <Head>
        <title>AOT | UG Programs</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Layout className="!pt-8">
          <div>
            <div className="flex flex-wrap rounded-2xl p-4 w-full">
              <AnimatedText
                text="Under Graduate Programmes (B. Tech)"
                className="!text-4xl text-center font-serif text-accent italic"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0, rotateY: 270 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  transition: {
                    ease: "easeOut",
                    delay: 0.2,
                    duration: 0.8,
                  },
                }}
                className="rounded-2xl w-full shadow-news-shadow md:overflow-x-scroll"
              >
                <table className="table rounded-2xl w-full text-center">
                  <thead className="border-b llg:text-2xl rounded-t-2xl shadow-inside-shadow">
                    <tr className="rounded-2xl bg-blue-950/20">
                      <th
                        scope="col"
                        colSpan={1}
                        className="px-2 py-4 rounded-tl-2xl shadow-inside-shadow border-r"
                      >
                        4Year B. Tech Courses
                      </th>
                      <th
                        scope="col"
                        colSpan={1}
                        className="px-3 py-4 shadow-inside-shadow border-r"
                      >
                        Approved Intake
                      </th>
                      <th
                        scope="col"
                        colSpan={8}
                        className="px-2 py-4 rounded-tr-2xl shadow-inside-shadow"
                      >
                        Syllabus per Semester
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
                      <th
                        scope="col"
                        className="px-2 shadow-inside-shadow py-4"
                      >
                        8th
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ugcourses.map((ugcourse, index1) => (
                      <tr key={index1} className="border-b">
                        <td className=" px-3 font-bold py-3 border-r">
                          {ugcourse.name}
                        </td>
                        <td className=" px-3 py-3 border-r">{ugcourse.seat}</td>
                        <td className="whitespace-nowrap border-r hover:bg-slate-200 hover:text-primary transition-all ease-in-out duration-200">
                          <Link
                            className="px-3 py-3"
                            href={ugcourse.sem1}
                            target="_blank"
                          >
                            {ugcourse.sname}1
                          </Link>
                        </td>
                        <td className="whitespace-nowrap border-r hover:bg-slate-200 hover:text-primary transition-all ease-in-out duration-200">
                          <Link
                            className="px-3 py-3"
                            href={ugcourse.sem2}
                            target="_blank"
                          >
                            {ugcourse.sname}2
                          </Link>
                        </td>
                        <td className="whitespace-nowrap border-r hover:bg-slate-200 hover:text-primary transition-all ease-in-out duration-200">
                          <Link
                            className="px-3 py-3"
                            href={ugcourse.sem3}
                            target="_blank"
                          >
                            {ugcourse.sname}3
                          </Link>
                        </td>
                        <td className="whitespace-nowrap border-r hover:bg-slate-200 hover:text-primary transition-all ease-in-out duration-200">
                          <Link
                            className="px-3 py-3"
                            href={ugcourse.sem4}
                            target="_blank"
                          >
                            {ugcourse.sname}4
                          </Link>
                        </td>
                        <td className="whitespace-nowrap border-r hover:bg-slate-200 hover:text-primary transition-all ease-in-out duration-200">
                          <Link
                            className="px-3 py-3"
                            href={ugcourse.sem5}
                            target="_blank"
                          >
                            {ugcourse.sname}5
                          </Link>
                        </td>
                        <td className="whitespace-nowrap border-r hover:bg-slate-200 hover:text-primary transition-all ease-in-out duration-200">
                          <Link
                            className="px-3 py-3"
                            href={ugcourse.sem6}
                            target="_blank"
                          >
                            {ugcourse.sname}6
                          </Link>
                        </td>
                        <td className="whitespace-nowrap border-r hover:bg-slate-200 hover:text-primary transition-all ease-in-out duration-200">
                          <Link
                            className=" py-3"
                            href={ugcourse.sem7}
                            target="_blank"
                          >
                            {ugcourse.sname}7
                          </Link>
                        </td>
                        <td className="whitespace-nowrap border-r hover:bg-slate-200 hover:text-primary transition-all ease-in-out duration-200">
                          <Link
                            className="px-3 py-3"
                            href={ugcourse.sem8}
                            target="_blank"
                          >
                            {ugcourse.sname}8
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      ease: "easeOut",
                      delay: 0.25,
                      duration: 1,
                    },
                  }}
                  className="mt-4 mx-5 text-xl italic font-serif text-center font-bold text-gray-600"
                >
                  [Affiliated by Maulana Abul Kalam Azad University of
                  Technology, West Bengal (formerly West Bengal University of
                  Technology) for the Academic Year 2021-2022]
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ugprograms;
