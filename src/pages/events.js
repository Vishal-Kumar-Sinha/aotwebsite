import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";

import { eventlinks } from "@/dictionary/EventLinks";
import Eventcard from "@/components/banner/Eventcard";

const events = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        delay: 0.1,
        duration: 1,
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
        duration: 1,
      },
    },
  };
  return (
    <>
      <Head>
        <title>AOT | Events</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-16 flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Layout className="!pt-8">
          <AnimatedText text="Imagination Trumps Knowledge!" />
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            className="grid gap-8 grid-cols-4 sm:grid-cols-1 md:grid-cols-2 p-3 sm:p-8"
          >
            {eventlinks.map((link, index) => (
              <motion.div variants={childitem} key={index}>
                <Eventcard props={link} />
              </motion.div>
            ))}
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default events;
