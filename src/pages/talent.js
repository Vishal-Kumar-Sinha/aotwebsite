import React, { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
//import components
import Layout from "@/components/Layout";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";
import Coaching from "@/components/talenttransformation/Coaching";
import Gate from "@/components/talenttransformation/Gate";
import Summerinternship from "@/components/talenttransformation/Summerinternship";

//import dictionaries
import { talentbanner } from "@/dictionary/Bannerlist";

const talentData = [
  {
    title: " Talent Transformation ",
    info: <Coaching />,
  },
  {
    title: "Training for GATE",
    info: <Gate />,
  },
  {
    title: "Summer Internship",
    info: <Summerinternship />,
  },
];

const Talent = () => {
  const [index, setIndex] = useState(0);
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
        <title>AOT | Career Services</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Banner sliderItems={talentbanner} />
        <Layout className="!pt-8">
          <AnimatePresence>
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              className="flex flex-wrap  mx-auto xll:mx-0 mb-10 mt-5 justify-center"
            >
              {talentData.map((item, itemIndex) => (
                  <motion.span key={itemIndex} variants={childitem}>
                    <motion.button
                      whileHover={{ scale: 0.85 }}
                      className={`${
                        index === itemIndex &&
                        "!scale-[0.85] !border-slate-600 border-2 border-transparent font-bold !text-black !bg-white !shadow-outside-shadow"
                      } bg-slate-600 rounded-full px-4 py-2 xll:mx-5 my-2 xl:mx-3 text-white shadow-inside-shadow cursor-pointer border-transparent capitalize xl:text-lg`}
                      onClick={() => setIndex(itemIndex)}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ ease: "easeIn", duration: 0.3 }}
                    >
                      {item.title}
                    </motion.button>
                  </motion.span>
                ))}
            </motion.div>
          </AnimatePresence>

          <div key={index}>{talentData[index].info}</div>
        </Layout>
      </main>
    </>
  );
};

export default Talent;
