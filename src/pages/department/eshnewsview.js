import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Deptnav from "@/components/navigation/Deptnav";

import { eshlinks } from "@/dictionary/ESHLinks";

const eshnewsview = () => {
  const [ntitle, setntitle] = useState("");
  const [imgLink, setimgLink] = useState("");
  const [ndesc, setndesc] = useState("");
  useEffect(() => {
    try {
      if(typeof window !== 'undefined' || typeof localStorage !== 'undefined') {
        setntitle(localStorage.getItem("aot-news-ntitle"));
        setimgLink(localStorage.getItem("aot-news-imgLink"));
        setndesc(localStorage.getItem("aot-news-ndesc"));
      }
    } catch (error) {
      //error
    }
  },[ntitle,imgLink,ndesc]);
  
  return (
    <>
      <Head>
        <title>View News</title>
        <meta name="description" content="any description" />
      </Head>
      <Deptnav links={eshlinks} />
      <main className="w-full mb-16 flex flex-col items-center justify-center smmy:pt-[4.2rem] xl:pt-[4.7rem] xll:pt-[4.5rem]">
        <Layout className="!pt-8">
        <AnimatePresence>
            <AnimatedText text={ntitle} />
            <div className="grid gap-8 grid-cols-2 md:grid-cols-1 p-3 sm:p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  transition: {
                    ease: "easeOut",
                    duration: 0.8,
                  },
                }}
              >
                <Image width={1280} height={720} src={imgLink} alt="" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  transition: {
                    ease: "easeOut",
                    delay: 0.2,
                    duration: 0.8,
                  },
                }}
              >
                {ndesc}
              </motion.div>
            </div>
          </AnimatePresence>
        </Layout>
      </main>
    </>
  );
};

export default eshnewsview;
