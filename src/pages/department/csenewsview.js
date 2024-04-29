"use client"
import React from "react";
import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Deptnav from "@/components/navigation/Deptnav";

import { cselinks } from "@/dictionary/CSELinks";

const csenewsview = () => {
  const ntitle = localStorage.getItem("aot-news-ntitle");
  const imgLink = localStorage.getItem("aot-news-imgLink");
  const ndesc = localStorage.getItem("aot-news-ndesc");
  
  return (
    <>
      <Head>
        <title>View News</title>
        <meta name="description" content="any description" />
      </Head>
      <Deptnav links={cselinks} />
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

export default csenewsview;
