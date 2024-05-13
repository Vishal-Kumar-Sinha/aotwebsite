import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Deptnav from "@/components/navigation/Deptnav";

import { eelinks } from "@/dictionary/EELinks";

const eenewsview = () => {
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
      <Deptnav links={eelinks} />
      <main className="w-full mb-16 flex flex-col items-center justify-center smmy:pt-[4.2rem] xl:pt-[4.7rem] xll:pt-[4.5rem]">
        <Layout className="!pt-8">
          <AnimatedText text={ntitle} />
          <div className="grid gap-8 grid-cols-2 md:grid-cols-1 p-3 sm:p-8">
            <div>
                <Image width={1280} height={720} src={imgLink} alt="" />
            </div>
            <div>
                {ndesc}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default eenewsview;
