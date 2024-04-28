import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";


const contacts = () => {
  return (
    <>
      <Head>
        <title>Contacts Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full sm:mb-16 flex flex-col items-center justify-center">
        <Layout className="!pt-8">
          <div className=" pb-6">
            <AnimatedText text="Get In Touch" className="!text-4xl !text-accent" />
          </div>
          <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center xl:px-4 ">
            
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contacts;
