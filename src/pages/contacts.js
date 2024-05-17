import React from "react";
import Head from "next/head";
import { FaLocationDot, FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Contactslider from "@/components/banner/Contactslider";

import { contactbanner } from "@/dictionary/Contactlinks";

const Contacts = () => {
  const parent = {
    hidden: { opacity: 0, rotateY: 180 },
    show: {
      opacity: 1,
      rotateY: 0,
      transition: {
        ease: "easeOut",
        duration: 0.6,
        staggerChildren: 0.4,
      },
    },
  };
  const childitem = {
    hidden: { opacity: 0, rotateY: 180 },
    show: {
      opacity: 1,
      rotateY: 0,
      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  return (
    <>
      <Head>
        <title>AOT | Contacts</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Layout className="!pt-8">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  ease: "easeOut",
                  delay: 0.1,
                  duration: 0.9,
                },
              }}
            >
              <Contactslider props={contactbanner} />
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-wrap rounded-2xl p-4 w-full xss:overflow-x-auto justify-center">
            <AnimatedText
              text="Academy Of Technology (Main Campus)"
              className="!text-4xl text-center font-serif text-accent italic"
            />
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    ease: "easeOut",
                    delay: 0.2,
                    duration: 0.6,
                  },
                }}
                className="flex gap-4 my-3"
              >
                <div className="bg-transparent h-fit w-fit p-1.5 rounded-[50%]">
                  <FaLocationDot className="text-3xl sm:text-2xl " />
                </div>
                <div className="text-xl font-medium font-serif p-1">
                  <p>G.T.Road (Adisaptagram), Aedocnagar</p>
                  <p>Hooghly-712121 West Bengal, India</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence>
            <motion.div variants={parent} initial="hidden" whileInView="show">
              <div id="depts" className="flex flex-wrap w-full xss:overflow-x-auto justify-center">
                <div className="grid grid-cols-2 smmy:grid-cols-1 xll:gap-10 ">
                  <motion.div
                    variants={childitem}
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
                    <div className="flex flex-wrap rounded-2xl p-4">
                      <AnimatedText
                        text="Admission Office:"
                        className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                      />
                      <div>
                        <div className="flex gap-4 my-1">
                          <div className="bg-transparent h-fit w-fit p-1.5 rounded-[50%]">
                            <FaPhoneVolume className="text-2xl" />
                          </div>
                          <p className="text-xl font-medium font-mono p-1">
                            +91-98310-21706/ 98310-21641
                          </p>
                        </div>
                        <div className="flex gap-4 my-1">
                          <div className="bg-transparent h-fit w-fit px-1.5 py-1 rounded-[50%]">
                            <FaEnvelope className="text-2xl" />
                          </div>
                          <p className="text-xl font-medium font-serif p-1">
                            admission@aot.edu.in
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={childitem} initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      transition: {
                        ease: "easeOut",
                        duration: 0.8,
                      },
                    }}>
                    <div className="flex flex-wrap rounded-2xl p-4">
                      <AnimatedText
                        text="Director / Principal Office:"
                        className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                      />
                      <div>
                        <div className="flex gap-4 my-1">
                          <div className="bg-transparent h-fit w-fit p-1.5 rounded-[50%]">
                            <FaPhoneVolume className="text-2xl" />
                          </div>
                          <p className="text-xl font-medium font-mono p-1">
                            +91-9830196317/ +91-9073360791
                          </p>
                        </div>
                        <div className="flex gap-4 my-1">
                          <div className="bg-transparent h-fit w-fit px-1.5 py-1 rounded-[50%]">
                            <FaEnvelope className="text-2xl" />
                          </div>
                          <p className="text-xl font-medium font-serif p-1 xss:overflow-x-auto">
                            academy@aot.edu.in/ principal@aot.edu.in
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={childitem} initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      transition: {
                        ease: "easeOut",
                        duration: 0.8,
                      },
                    }}>
                    <div className="flex flex-wrap rounded-2xl p-4">
                      <AnimatedText
                        text="Academic & Exam Department:"
                        className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                      />
                      <div>
                        <div className="flex gap-4 my-1">
                          <div className="bg-transparent h-fit w-fit p-1.5 rounded-[50%]">
                            <FaPhoneVolume className="text-2xl" />
                          </div>
                          <p className="text-xl font-medium font-mono p-1">
                            +91-9073360791
                          </p>
                        </div>
                        <div className="flex gap-4 my-1">
                          <div className="bg-transparent h-fit w-fit px-1.5 py-1 rounded-[50%]">
                            <FaEnvelope className="text-2xl" />
                          </div>
                          <p className="text-xl font-medium font-serif p-1">
                            oicexam@aot.edu.in
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={childitem} initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      transition: {
                        ease: "easeOut",
                        duration: 0.8,
                      },
                    }}>
                    <div className="flex flex-wrap rounded-2xl p-4">
                      <AnimatedText
                        text="Admin Department:"
                        className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                      />
                      <div>
                        <div className="flex gap-4 my-1">
                          <div className="bg-transparent h-fit w-fit p-1.5 rounded-[50%]">
                            <FaPhoneVolume className="text-2xl" />
                          </div>
                          <p className="text-xl font-medium font-mono p-1">
                            +91-9830161441
                          </p>
                        </div>
                        <div className="flex gap-4 my-1">
                          <div className="bg-transparent h-fit w-fit px-1.5 py-1 rounded-[50%]">
                            <FaEnvelope className="text-2xl" />
                          </div>
                          <p className="text-xl font-medium font-serif p-1">
                            admin@aot.edu.in
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={childitem} initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      transition: {
                        ease: "easeOut",
                        duration: 0.8,
                      },
                    }}>
                    <div className="flex flex-wrap rounded-2xl p-4">
                      <AnimatedText
                        text="Account Section:"
                        className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                      />
                      <div>
                        <div className="flex gap-4 my-1">
                          <div className="bg-transparent h-fit w-fit p-1.5 rounded-[50%]">
                            <FaPhoneVolume className="text-2xl" />
                          </div>
                          <p className="text-xl font-medium font-mono p-1">
                            +91-9073360790
                          </p>
                        </div>
                        <div className="flex gap-4 my-1">
                          <div className="bg-transparent h-fit w-fit px-1.5 py-1 rounded-[50%]">
                            <FaEnvelope className="text-2xl" />
                          </div>
                          <p className="text-xl font-medium font-serif p-1">
                            accounts@aot.edu.in
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={childitem} initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      transition: {
                        ease: "easeOut",
                        duration: 0.8,
                      },
                    }}>
                    <div className="flex flex-wrap rounded-2xl p-4">
                      <AnimatedText
                        text="Training Department:"
                        className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
                      />
                      <div>
                        <div className="flex gap-4 my-1">
                          <div className="bg-transparent h-fit w-fit p-1.5 rounded-[50%]">
                            <FaPhoneVolume className="text-2xl" />
                          </div>
                          <p className="text-xl font-medium font-mono p-1">
                            +91-9073360792
                          </p>
                        </div>
                        <div className="flex gap-4 my-1">
                          <div className="bg-transparent h-fit w-fit px-1.5 py-1 rounded-[50%]">
                            <FaEnvelope className="text-2xl" />
                          </div>
                          <p className="text-xl font-medium font-serif p-1">
                            training@aot.edu.in
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="xss:overflow-x-auto">
                <motion.div
                  id="placementdepts"
                  variants={childitem} initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    transition: {
                      ease: "easeOut",
                      duration: 0.8,
                    },
                  }}
                  className="flex flex-wrap rounded-2xl p-4 w-full "
                >
                  <AnimatedText
                    text="CORPORATE RELATION OFFICE"
                    className="!text-4xl text-center font-serif text-accent italic"
                  />
                  <div>
                    <div className="flex gap-4 my-2">
                      <div className="bg-transparent h-fit w-fit p-1.5 rounded-[50%]">
                        <FaLocationDot className="text-2xl" />
                      </div>
                      <p className="text-xl font-medium font-serif p-1">
                        CA-150, Salt Lake, Sector-1, Kolkata-700064
                      </p>
                    </div>
                    <div className="flex gap-4 my-2">
                      <div className="bg-transparent h-fit w-fit p-1.5 rounded-[50%]">
                        <FaPhoneVolume className="text-2xl" />
                      </div>
                      <p className="text-xl font-medium font-mono p-1">
                        +91-9830156906/ 9830156907
                      </p>
                    </div>
                    <div className="flex gap-4 my-2">
                      <div className="bg-transparent h-fit w-fit px-1.5 py-1 rounded-[50%]">
                        <FaEnvelope className="text-2xl" />
                      </div>
                      <p className="text-xl font-medium font-serif p-1">
                        placement@aot.edu.in, corporaterelations@aot.edu.in
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                id="ionzone"
                  variants={childitem} initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    transition: {
                      ease: "easeOut",
                      duration: 0.8,
                    },
                  }}
                  className="flex flex-wrap rounded-2xl p-4 w-full "
                >
                  <AnimatedText
                    text="iON DIGITAL ZONE"
                    className="!text-4xl text-center font-serif normal-case text-accent italic"
                  />
                  <div>
                    <div className="flex gap-4 my-2">
                      <div className="bg-transparent h-fit w-fit p-1.5 rounded-[50%]">
                        <FaLocationDot className="text-2xl" />
                      </div>
                      <div className="text-xl font-medium font-serif p-1">
                        <p>G.T.Road (Adisaptagram), Aedocnagar</p>
                        <p>Hooghly-712121 West Bengal, India</p>
                      </div>
                    </div>
                    <div className="flex gap-4 my-1">
                      <div className="bg-transparent h-fit w-fit p-1.5 rounded-[50%]">
                        <FaPhoneVolume className="text-2xl" />
                      </div>
                      <p className="text-xl font-medium font-mono p-1">
                        +91-9007556186/ 9830210962
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Layout>
      </main>
    </>
  );
};

export default Contacts;
