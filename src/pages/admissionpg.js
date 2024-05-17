import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";
import Pgprocedure from "@/components/admission/Pgprocedure";
import Pgfees from "@/components/admission/Pgfees";
import Support from "@/components/admission/Support";
import Rulesfees from "@/components/admission/Rulesfees";
import Admissiondocs from "@/components/admission/Admissiondocs";

import { admissionbanner } from "@/dictionary/Bannerlist";

const admissionData = [
  {
    title: "Admission Procedure",
    info: <Pgprocedure />,
  },
  {
    title: "MCA Fees Structure",
    info: <Pgfees />,
  },
  {
    title: "Fees Payment Rules",
    info: <Rulesfees />,
  },
  {
    title: "Financial Aid & Support",
    info: <Support />,
  },
  {
    title: "Documents For Admission",
    info: <Admissiondocs />,
  },
];
const Admissionpg = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Head>
        <title>AOT | Admission@AOT</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Banner sliderItems={admissionbanner} />
        <Layout className="!pt-8">
        <div className="flex flex-wrap mx-auto xll:mx-0 mb-10 mt-5 justify-center">
            {admissionData.map((item, itemIndex) => {
              return (
                <motion.button
                  key={itemIndex * 100}
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
          <div key={index}>{admissionData[index].info}</div>
        </Layout>
      </main>
    </>
  )
}

export default Admissionpg