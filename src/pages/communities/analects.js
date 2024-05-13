import React from "react";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";

import { analectsbanner } from "@/dictionary/Bannerlist";

const Analects = () => {
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
        duration: 1.2,
      },
    },
  };
  return (
    <>
      <Head>
        <title>AOT | Analects</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Banner sliderItems={analectsbanner} />
        <Layout className="!pt-8">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  delay: 0.1,
                  duration: 0.6,
                },
              }}
              className="flex flex-wrap rounded-2xl pt-4 px-4 w-full "
            >
              <AnimatedText
                text="Analects"
                className="!text-4xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div>
                <p className="pb-4 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;The collective efforts of this community on
                  creative writing, painting, quiz, debating, photograph and
                  other spheres of creative performances round the year enhance
                  the students’ life manifold.
                </p>
                <p className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;‘HUMATRONICS’ — the annual talent search
                  competition and ‘WALLZINE’ — the wall magazine published by
                  ‘ANALECTS’ have been widely acclaimed through the years.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              className="flex mt-2 flex-wrap rounded-2xl p-4 w-full"
            >
              <AnimatedText
                text="A Few Achievements of our Students:"
                className="!text-4xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div>
                <div className="pb-1 font-sans font-medium text-lg">
                  <ul style={{ listStyleType: "disc" }}>
                    <motion.li variants={childitem} className="p-1.5">
                      Shuvrodeep Pal (3rd yr AEIE) was the winner of the
                      national DELL Campassador My PC My Story contest in 2017.
                    </motion.li>
                    <motion.li variants={childitem}i className="p-1.5">
                      Atriz Ray (1st yr ME) was a regular contributor to TTIS
                      and writes on various social issues in the “Your Voice”
                      Column of The Telegraph.
                    </motion.li>
                    <motion.li variants={childitem} className="p-1.5">
                      Sanjana Majumdar (AEIE 2015 Batch) was a Freelance Writer
                      associated with The Statesman & covered the International
                      Conference on Functional Materials-2014 at IIT, Kharagapur
                      for The Statesman, Campus, April 22, 2014 and the IEEE
                      sponsored International Conference at AOT for The
                      Statesman in “Laced with Humour”, 11 February, 2015.
                    </motion.li>
                    <motion.li variants={childitem} className="p-1.5">
                      Subhajit Khan (EE 2016 Batch) has been the Co-editor of a
                      Bengali literary magazine MASTUL from 2013 to the present.
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
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

export default Analects;
