import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Announcementcard from "@/components/banner/Announcementcard";

import { announcementlinks } from "@/dictionary/Announcementlinks";

const Announcements = () => {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        delay: 0.1,
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
        duration: 1,
      },
    },
  };
  return (
    <>
      <Head>
        <title>AOT | Announcements</title>
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
            className="flex flex-wrap rounded-2xl p-4 w-full"
          >
            {announcementlinks.map((link,i) => (
              <motion.div key={i} variants={childitem} className="m-2 w-full">
                <Announcementcard props={link} />
              </motion.div>
            ))}
          </motion.div>
        </Layout>
      </main>
    </>
  );
};

export default Announcements;
