import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Form from "@/components/Form";
import p1 from "@/assets/images/profile/v3.png";
import {
  FaMapLocationDot,
  FaPhoneVolume,
  FaEarthAsia,
  FaEnvelope,
} from "react-icons/fa6";
import Cube from "@/components/Cube";
import Animatedparagraph from "@/components/Animatedparagraph";

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
            <div className="grid llg:grid-cols-2 grid-cols-1 gap-8">
              <div>
                <AnimatedText
                  text="Let's start a conversation."
                  className="!text-2xl sm:!text-xl"
                />

                <div className=" py-4 px-2 text-center justify-center items-center">
                  <Animatedparagraph
                    className="!text-base !font-medium"
                    text="If you'd like to know more about my work or process, feel free to get in touch."
                  />
                </div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ ease: "easeIn", delay: 0.6, duration: 1 }}
                >
                  <Form />
                </motion.div>
              </div>

              <div className="flex relative pl-2">
                <div className="pt-2">
                  <motion.div
                    className="flex py-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      ease: "easeInOut",
                      delay: 0.6,
                      duration: 1.2,
                    }}
                  >
                    <div className="pt-1 text-neutral-600 pr-3">
                      <FaMapLocationDot />
                    </div>
                    <div className="font-bold  text-neutral-600">
                      Location&nbsp;:&nbsp;&nbsp;
                    </div>
                    <div>Harisara, Birbhum, West Bengal-731234, India</div>
                  </motion.div>
                  <motion.div
                    className="flex py-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      ease: "easeInOut",
                      delay: 0.7,
                      duration: 1.4,
                    }}
                  >
                    <div className="pt-1 text-neutral-600 pr-3">
                      <FaEnvelope />
                    </div>
                    <div className="font-bold  text-neutral-600">
                      E-Mail ID&nbsp;:&nbsp;&nbsp;
                    </div>
                    <div>v.kr.sinha.99@gmail.com</div>
                  </motion.div>
                  <motion.div
                    className="flex py-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      ease: "easeInOut",
                      delay: 0.8,
                      duration: 1.5,
                    }}
                  >
                    <div className="pt-1 text-neutral-600 pr-3">
                      <FaPhoneVolume />
                    </div>
                    <div className="font-bold  text-neutral-600">
                      Phone number&nbsp;:&nbsp;&nbsp;
                    </div>
                    <div>+918145063067</div>
                  </motion.div>
                  <motion.div
                    className="flex py-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", delay: 1, duration: 1.5 }}
                  >
                    <div className="pt-1 text-neutral-600 pr-3">
                      <FaEarthAsia />
                    </div>
                    <div className="font-bold  text-neutral-600">
                      Website&nbsp;:&nbsp;&nbsp;
                    </div>
                    <div>vjhvjmhvvgvm.in</div>
                  </motion.div>
                  <motion.div
                    className=" pt-20 pl-10 xs:pl-[35%] gxl:pl-[50%]"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeInOut", delay: 1, duration: 1.7 }}
                  >
                    <Cube className="h-[80px] w-[80px] perspective-[320px]" />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", delay: 1.2, duration: 3 }}
                >
                  <Image
                    src={p1}
                    alt=""
                    className="pt-10 absolute right-0 h-full w-fit gxl:hidden"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contacts;
