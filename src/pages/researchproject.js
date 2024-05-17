import React, { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Ongoing from "@/components/banner/projects/Ongoing";
import Summary from "@/components/banner/projects/Summary";


const researchprojectData = [
  {
    title: " Ongoing Projects ",
    info: [<Ongoing />],
  },
  {
    title: "Summary",
    info: [<Summary />],
  },
];

const researchproject = () => {
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
  const [index, setIndex] = useState(0);
  return (
    <>
      <Head>
        <title>AOT | Ongoing Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Layout className="!pt-8">
          <Layout className="!pt-8">
          <AnimatedText
            text="Ongoing Projects and Consultancy"
            className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)]"
          />
            <AnimatePresence>
              <motion.div
                variants={parent}
                initial="hidden"
                whileInView="show"
                className="flex flex-wrap  mx-auto xll:mx-0 mb-10 mt-5 justify-center"
              >
                {researchprojectData.map((item, itemIndex) => {
                  return (
                    <motion.span variants={childitem}>
                      <motion.button
                        key={itemIndex}
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
                  );
                })}
              </motion.div>
            </AnimatePresence>

            <div key={index}>{researchprojectData[index].info}</div>
          </Layout>
        </Layout>
      </main>
    </>
  );
};

export default researchproject;
