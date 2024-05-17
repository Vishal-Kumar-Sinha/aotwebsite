import React from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";

import { homebanner } from "@/dictionary/Bannerlist";

const Campus = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 1,
        staggerChildren: 0.4,
      },
    },
  };
  const childitem = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };
  return (
    <>
      <Head>
        <title>AOT | Campus</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center  smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Banner sliderItems={homebanner} />
        <Layout className="!pt-8">
          <div>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0, y: -100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    ease: "easeOut",
                    delay: 0.3,
                    duration: 0.6,
                  },
                }}
                className="flex flex-wrap rounded-2xl px-4 w-full "
              >
                <AnimatedText
                  text="Campus Life"
                  className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)]"
                />
                <div>
                  <p className="pb-1 font-sans font-medium text-lg">
                    &emsp;&emsp;&emsp;The lush green campus of Academy of
                    Technology, spread over an area of 10.66 acres with
                    provision of water harvesting inside the campus. In order to
                    sustain and maintain a high standard in teaching, the
                    following state-of-the art infrastructure has been developed
                    as a modern piece of architecture blended with the
                    environment.
                  </p>
                  <p className="pb-1 font-sans font-medium text-lg">
                    &emsp;&emsp;&emsp;3.01 lac sq. ft. built-up space to serve
                    the curricular requirements.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0, y: -100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    ease: "easeOut",
                    delay: 0.3,
                    duration: 0.6,
                  },
                }}
                className="flex flex-wrap rounded-2xl px-4 w-full "
              >
                <AnimatedText
                  text="Classrooms & Laboratories"
                  className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                />
                <div>
                  <p className="pb-1 font-sans font-medium text-lg">
                    &emsp;&emsp;&emsp;61 spacious classrooms, tutorial rooms &
                    seminar halls with audio-video and digital teaching aids.
                    Resourceful central and digital library.
                  </p>
                  <p className="pb-1 font-sans font-medium text-lg">
                    &emsp;&emsp;&emsp;44 high end IT and Core engineering
                    laboratories adhering to the requirements of university
                    curriculum under the following eight academic departments.
                    Many higher semester core and computer laboratories are
                    equipped with industry compatible experimental setup and
                    software based simulation platform beyond university
                    curriculum to provide the students a cutting edge in campus
                    placement and professional career.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0, y: -100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    ease: "easeOut",
                    delay: 0.3,
                    duration: 0.6,
                  },
                }}
                className="flex flex-wrap rounded-2xl px-4 w-full "
              >
                <AnimatedText
                  text="Hostel"
                  className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                />
                <div>
                  <p className="pb-1 font-sans font-medium text-lg">
                    &emsp;&emsp;&emsp;In-campus Boys Hostel for 250 students and
                    completely separate in-campus Girls Hostel for 130 students,
                    with all amenities and internet connectivity for every
                    hostel resident. All resident students are required to
                    become members of the hostel mess.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0, y: -100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    ease: "easeOut",
                    delay: 0.3,
                    duration: 0.6,
                  },
                }}
                className="flex flex-wrap rounded-2xl px-4 w-full "
              >
                <AnimatedText
                  text="Connectivity"
                  className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                />
                <div>
                  <p className="pb-1 font-sans font-medium text-lg">
                    &emsp;&emsp;&emsp;Campus is Wi-fi enabled with 100 Mbps
                    internet connectivity supported by OFC for uninterrupted
                    accessibility.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0, y: -100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    ease: "easeOut",
                    delay: 0.3,
                    duration: 0.6,
                  },
                }}
                className="flex flex-wrap rounded-2xl px-4 w-full "
              >
                <AnimatedText
                  text="Auditorium"
                  className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                />
                <div>
                  <p className="pb-1 font-sans font-medium text-lg">
                    &emsp;&emsp;&emsp;A well-designed centrally air-conditioned
                    auditorium with an accommodation capacity of 350 and
                    equipped with all necessary facilities.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0, y: -100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    ease: "easeOut",
                    delay: 0.3,
                    duration: 0.6,
                  },
                }}
                className="flex flex-wrap rounded-2xl px-4 w-full "
              >
                <AnimatedText
                  text="HealthCare"
                  className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                />
                <div>
                  <p className="pb-1 font-sans font-medium text-lg">
                    &emsp;&emsp;&emsp;Round the clock medical facilities and
                    ambulance service for hostel residents and day scholars.
                    Medical help from hospitals is arranged if required for
                    serious or prolonged treatment.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0, y: -100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    ease: "easeOut",
                    delay: 0.3,
                    duration: 0.6,
                  },
                }}
                className="flex flex-wrap rounded-2xl px-4 w-full "
              >
                <AnimatedText
                  text="Cafeteria"
                  className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                />
                <div>
                  <p className="pb-1 font-sans font-medium text-lg">
                    &emsp;&emsp;&emsp;Food at administered prices is available
                    from in-campus cafeteria.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex flex-wrap rounded-2xl px-4 w-full ">
              <AnimatedText
                text="Banking"
                className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div>
                <p className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;24 hrs. ATM facilities within the campus.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap rounded-2xl p-4 w-full justify-center">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: -100 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      ease: "easeOut",
                      delay: 0.3,
                      duration: 0.6,
                    },
                  }}
                >
                  <AnimatedText
                    text="Campus Communities"
                    className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                  />
                  <div>
                    <p className="pb-1 font-sans font-medium text-lg">
                      &emsp;&emsp;&emsp;AOT – where the zeal of co and extra
                      curricular activities are limitless and a deep sense of
                      belonging prevails. One can get into everything with the
                      five communities of AOT campus.
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <motion.div
                  variants={parent}
                  initial="hidden"
                  whileInView="show"
                  className="flex flex-wrap mx-auto xll:mx-0 mb-10 mt-5 justify-center"
                >
                  <motion.a
                    variants={childitem}
                    className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                    href="/communities/ardour"
                  >
                    Ardour
                  </motion.a>
                  <motion.a
                    variants={childitem}
                    className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                    href="/communities/agile"
                  >
                    Agile
                  </motion.a>
                  <motion.a
                    variants={childitem}
                    className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                    href="/communities/acuity"
                  >
                    Acuity
                  </motion.a>
                  <motion.a
                    variants={childitem}
                    className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                    href="/communities/analects"
                  >
                    Analects
                  </motion.a>
                  <motion.a
                    variants={childitem}
                    className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                    href="/communities/accilivities"
                  >
                    Accilivities
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Campus;
