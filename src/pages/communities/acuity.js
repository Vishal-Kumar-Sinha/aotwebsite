import React from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";

import { acuitybanner } from "@/dictionary/Bannerlist";

const acuity = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 0.6,
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
        duration: 1,
      },
    },
  };
  return (
    <>
      <Head>
        <title>AOT | Acquity</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-2 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Banner sliderItems={acuitybanner} />
        <Layout className="!pt-8">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  delay: 0.14,
                  duration: 0.6,
                },
              }}
              className="flex flex-wrap rounded-2xl p-4 w-full "
            >
              <AnimatedText
                text="Acuity"
                className="!text-4xl text-center font-serif text-accent italic"
              />
              <div>
                <p className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;The Community for technological innovations
                  provides a platform to aspiring engineers of AOT to show their
                  innovations spanning several spheres of software, hardware and
                  robotics through competitive events, modeling, publications
                  and technical quiz.
                </p>
                <p className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;Every year TECH-FIESTA – the state level
                  Tech Fest of AOT is organized by ACUITY.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  delay: 0.2,
                  duration: 0.6,
                },
              }}
              className="flex mt-2 flex-wrap rounded-2xl p-4 w-full"
            >
              <AnimatedText
                text="A Few Achievements of our Students:"
                className="!text-4xl text-center font-serif text-accent italic"
              />
              <div>
                <p className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;AOT’s students are known for their keen
                  interest in different kinds of coding and technical innovation
                  contests as well as the Techfests organized across India. The
                  college frequently features amongst the list of top ten
                  colleges participating in events like TCS Codevita and
                  EngineX.
                </p>
                <p className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;In 2017, after the initial selections, two
                  teams from AOT have secured positions among the top 25 teams
                  of the country in EngineX – Ashwini Kumar Singh, Atrik Maitra,
                  Biswa Pratim Mukherjee, Danish Kamal (3rd yr ME) for their
                  project on Smart Precision Farming and Sarbajit Paul, Sarthak
                  Bakshi, Saurabh Kanishka, Samudra Roy (3rd yr CSE) for their
                  project on Intelligent Transport System.
                </p>
                <p className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;In 2016, an overwhelming number of 1700
                  students participated in Codevita. AOT has also had the
                  maximum number of participants in Techfests organized by IIT
                  Kharagpur, NIT Duragpur, IIEST, IEM, etc.
                </p>
                <p className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;Besides these, over the past 3 years, a
                  student from AOT has been among the handful of top students
                  from across the country to be selected as Google Student
                  Ambassador (GSA): Jit Sarkar (4th yr CSE) this year, Nakshatra
                  Mukhopadhyay (IT 2016 Batch) last year & Mohonish Chakraborty
                  (CSE 2015 Batch) before that.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex mt-2 flex-wrap rounded-2xl p-4 w-full">
            <AnimatedText
              text="Robotics:"
              className="!text-4xl text-center font-serif text-accent italic"
            />
            <div>
              <AnimatePresence>
                <div className="pb-1 font-sans font-medium text-lg">
                  <motion.ul
                    variants={parent}
                    initial="hidden"
                    whileInView="show"
                    style={{ listStyleType: "disc" }}
                  >
                    <motion.li variants={childitem} className="p-1.5">
                      Nikunj Sharma (3rd yr ECE) and his team won the Best
                      Mechanical Design Award in Robotics at Kshitij 2016 (IIT
                      Kharagpur).
                    </motion.li>
                    <motion.li variants={childitem} className="p-1.5">
                      Sayak Bhar & Subhramoy Dey (3rd yr ECE) won 1st prize in
                      Sand Rover at Kshitij 2017 (IIT Kharagpur) and 2nd and 3rd
                      prizes in two Robotics events in Arohan 2017 (NIT
                      Durgapur).
                    </motion.li>
                    <motion.li variants={childitem} className="p-1.5">
                      Jaiswant Sethi, Devi Prasad Tiwari, Irshad Ali & Ivan
                      Mitra (2nd yr ME) won 1st prize in Snake and Ladder
                      Robotics & 2nd prize in Step up at Srijan 2017 (Jadavpur
                      University) and 2nd prize in Robbo Zigger (HETC) in 2017.
                    </motion.li>
                    <motion.li variants={childitem} className="p-1.5">
                      Sonu Gupta, Sidhant Gupta & Sourav Payra (3rd yr CSE) won
                      2nd prize in the Manual Robotics event Bomb Disposal at
                      IIT Kharagpur in 2017.
                    </motion.li>
                    <motion.li variants={childitem} className="p-1.5">
                      Sudip Halder, Sourav Saha, Siddhartha Paul (4th yr ECE),
                      won 1st prize in Robo-Soccer in Srijan 2017 (Jadavpur
                      University), Techtix 2017 (Kalyani Government Engineering
                      College), Vivarta 2017 (Techno India University); 2nd
                      prize in Robo-race in Karmatech 2017 (Government College
                      of Engineering and Ceramic Technology); 2nd prize in
                      Kick-o-Bot in Techtrix 2017 (RCC IIT) and many others.
                    </motion.li>
                    <motion.li variants={childitem} className="p-1.5">
                      Sudip Halder (4th yr ECE) was the Technical Representative
                      at Techniche 2016 (IIT Guwahati) & Instruo 2016 (IIEST
                      Shibpur); RSE of Technology Robotix Society (IIT
                      Kharagpur) and Campus Ambassador of Techkriti 2017 (IIT
                      Kanpur).
                    </motion.li>
                  </motion.ul>
                </div>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex mt-2 flex-wrap rounded-2xl p-4 w-full">
            <AnimatedText
              text="Presentations/ Publications:"
              className="!text-4xl text-center font-serif text-accent italic"
            />
            <div>
              <AnimatePresence>
                <div className="pb-1 font-sans font-medium text-lg">
                  <motion.ul
                    variants={parent}
                    initial="hidden"
                    whileInView="show"
                    style={{ listStyleType: "disc" }}
                  >
                    <motion.li variants={childitem} className="p-1.5">
                      Subarno Pal (4th yr CSE) published the paper “Sentiment
                      Analysis using Averaged Histogram” in IJCA – International
                      Journal of Computer Applications, Vol 162 No 12: 22-26,
                      March 2017, DOI: 10.5120/ijca2017913421.
                    </motion.li>
                    <motion.li variants={childitem} className="p-1.5">
                      Sudip Halder, Sourav Saha, Siddhartha Paul (4th yr ECE)
                      “Smart Agricultural System: Better Accuracy and
                      Productivity”, presented in Devices for Integrated
                      Circuit, on March 23-24, 2017 organized by IEEE KGEC
                      Student Branch Chapter in association with Department of
                      ECE-KGEC.
                    </motion.li>
                    <motion.li variants={childitem} className="p-1.5">
                      Sudip Halder, Sourav Saha, Siddhartha Paul (4th yr ECE)
                      “Next Generation Agricultural System”, Conference on
                      Modelling and Simulation 2017, organized by Association
                      for the Advancement of Modelling and Simulation Techniques
                      in Enterprises, in collaboration with IET-UK.
                    </motion.li>
                  </motion.ul>
                </div>
              </AnimatePresence>
            </div>
          </div>
          <AnimatePresence>
            <div>
              <AnimatedText
                text="Explore Other Communities"
                className="!text-4xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
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
            </div>
          </AnimatePresence>
        </Layout>
      </main>
    </>
  );
};

export default acuity;
