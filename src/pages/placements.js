import React from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";

import { placementbanner } from "@/dictionary/Bannerlist";
import Placementstatus from "@/components/Placementstatus";

const placements = () => {
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
  return (
    <>
      <Head>
        <title>AOT | Placements</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Banner sliderItems={placementbanner} />
        <Layout className="!pt-8">
          <motion.div variants={parent} initial="hidden" whileInView="show">
            <div className="flex flex-wrap rounded-2xl p-4 w-full ">
              <AnimatedText
                text="Consistent Performance in Campus Placement"
                className="!text-4xl text-center font-serif text-accent italic"
              />
              <div>
                <motion.p variants={childitem} className="py-1 font-sans font-normal leading-6 text-lg">
                  &emsp;&emsp;&emsp;AOT’s teaching-learning process, examination
                  system and training for improvement of placement quotient make
                  our students hardworking and motivated, and thus enable them
                  to achieve right placement by their own merit. At Academy of
                  Technology, placement assistance is not an isolated event, it
                  is a lasting commitment. Our endeavor is to provide maximum
                  possible number of campus interview opportunities to the
                  students with equal emphasis on IT and Core engineering
                  placement and prolonged placement support even after
                  graduation and we have been successful in this mission from
                  our very 1st batch.
                </motion.p>
                <motion.p variants={childitem} className="py-1 font-sans font-normal leading-6 text-lg">
                  &emsp;&emsp;&emsp;AOT has been accredited by Capgemini,
                  Cyient, Tata Consultancy Services, Tech Mahindra and Wipro
                  Technologies for campus placement. In the last 3 years, an
                  enviable percentage of AOT’s students have been recruited by
                  more than 100 renowned corporate houses during campus
                  placement. With 103.49% placement offers in 2021 and 191.49%
                  placement offers in 2022, our students have proven to be
                  consistent performers. Even in this year 2023, AOT’s students,
                  eligible for campus interview have already attained 147.36%
                  placement offers till now.
                </motion.p>
                <motion.p variants={childitem} className="pb-1 pt-3 font-sans italic font-medium text-lg">
                  &emsp;&emsp;&emsp;In 2020, Academy of Technology has received
                  Certificate of Appreciation from TATA CONSULTANCY SERVICES in
                  recognition of an exemplary partnership and collaboration –
                  and only very few institutes in India have achieved so.
                </motion.p>
              </div>
            </div>
            <div className=" rounded-2xl px-1">
              <AnimatedText
                text="Placement Status"
                className="!text-4xl text-center font-serif text-accent italic"
              />
              <motion.div variants={childitem} className="h-[70vh] scrlbr py-4 overflow-y-auto">
                <Placementstatus />
              </motion.div>
            </div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default placements;
