import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
//import components
import Layout from "@/components/Layout";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";
import Coaching from "@/components/talenttransformation/Coaching";
import Gate from "@/components/talenttransformation/Gate";
import Summerinternship from "@/components/talenttransformation/Summerinternship";

//import dictionaries
import { careerbanner } from "@/dictionary/Bannerlist";

const talentData = [
  {
    title: " Talent Transformation ",
    info: [<Coaching />],
  },
  {
    title: "Training for GATE",
    info: [<Gate />],
  },
  {
    title: "Summer Internship",
    info: [<Summerinternship />],
  },
];

const talent = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Head>
        <title>AOT | Career Services</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center">
        {/* <Banner sliderItems={careerbanner} /> */}
        <Layout className="!pt-8">
          <div className="flex flex-wrap  mx-auto xll:mx-0 mb-10 mt-5 justify-center">
            {talentData.map((item, itemIndex) => {
              return (
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
              );
            })}
          </div>
          <div key={index}>
            {talentData[index].info}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default talent;
