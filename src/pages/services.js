import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Scard from "@/components/Scard";
import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaBullhorn,
  FaPalette,
  FaMobileScreen,
  FaFolderTree,
  FaCode,
} from "react-icons/fa6";

const services = () => {
  return (
    <>
      <Head>
        <title>Services Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="!pt-8">
          <AnimatedText text="Imagination Trumps Knowledge!" />
          <div className="flex flex-wrap  mx-auto xll:mx-0 mb-10 mt-5 justify-center">
            <div className="grid gap-8 grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 p-3 ">
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: 'easeIn', delay: 0.2, duration: 0.8 }}>
                <Scard
                  className="bg-[#fcf4ff]"
                  heading="Heading"
                  description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
                  icon={<FaCode size="2.5rem" className="text-[#D566FF]" />}
                />
              </motion.div>
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: 'easeIn', delay: 0.4, duration: 1 }}>
                <Scard
                  className="bg-[#fefaf0]"
                  heading="Heading"
                  description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
                  icon={<FaLaptopCode size="2.5rem" className="text-[#DDA10C]" />}
                />
              </motion.div>
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: 'easeIn', delay: 0.6, duration: 1.2 }}>
                <Scard
                  className="bg-[#fff4f4]"
                  heading="Heading"
                  description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
                  icon={
                    <FaMobileScreen size="2.5rem" className="text-[#FF6080]" />
                  }
                />
              </motion.div>
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: 'easeIn', delay: 0.8, duration: 1.4 }}>
                <Scard
                  className="bg-[#f3faff]"
                  heading="Heading"
                  description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
                  icon={<FaPalette size="2.5rem" className="text-[#269FFF]" />}
                />
              </motion.div>
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: 'easeIn', delay: 1, duration: 1.6 }}>
                <Scard
                  className="bg-[#fefaf0]"
                  heading="Heading"
                  description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
                  icon={<FaFolderTree size="2.5rem" className="text-[#DDA10C]" />}
                />
              </motion.div>
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: 'easeIn', delay: 1.2, duration: 1.8 }}>
                <Scard
                  className="bg-[#fcf4ff]"
                  heading="Heading"
                  description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
                  icon={<FaBullhorn size="2.5rem" className="text-[#D566FF]" />}
                />
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default services;
