import React, { useState } from "react";
import {
  FaXmark,
  FaGear,
  FaToolbox,
  FaWrench,
  FaClock,
  FaLink,
  FaFolderTree,
  FaArrowRight,
} from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Eventmodal = ({ props }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <motion.button
        whileHover={{ x: 5 }}
        className="font-bold text-[#FA5252] cursor-pointer text-[14px] duration-100 transition-all mt-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FaArrowRight />
      </motion.button>
        {showModal ? (
          <>
            <motion.div
              className="justify-center bg-black bg-opacity-25 backdrop-blur-sm items-center flex fixed inset-0 z-50 overflow-hidden outline-none focus:outline-none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { ease: "easeOut", duration: 0.2 },
              }}
              exit={{
                opacity: 0,
                transition: { ease: "easeIn", duration: 1.1 },
              }}
            >
              {/* <div className="relative shadow-outside-shadow rounded-lg w-auto my-6 mx-auto max-w-6xl"> */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { ease: "easeOut", duration: 1 },
                }}
                exit={{
                  scale: 0,
                  opacity: 0,
                  transition: { ease: "easeIn", duration: 1.1 },
                }}
                className="relative shadow-outside-shadow rounded-lg w-auto my-6 mx-auto max-w-6xl h-[90%] sm:h-full overflow-hidden lg:pb-[70px]"
              >
                {/*content*/}
                {/* <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"> */}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <motion.h3
                      initial={{ x: 100, y: 100, scale: 0, opacity: 0 }}
                      animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        transition: {
                          ease: "easeOut",
                          delay: 0.4,
                          duration: 0.8,
                        },
                      }}
                      className="text-3xl sm:text-2xl text-accent font-bold"
                    >
                      {props.name}
                    </motion.h3>
                    <motion.button
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                          ease: "easeOut",
                          delay: 0.5,
                          duration: 0.8,
                        },
                      }}
                      className="p-1 rounded-[50%] ml-auto bg-transparent border-0 text-red-500 opacity-100 float-right text-3xl leading-none font-bold shadow-inside-shadow hover:shadow-outside-shadow hover:scale-110 transition-all duration-100 ease-in-out outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <FaXmark />
                    </motion.button>
                  </div>
                  {/*body*/}
                  <div className="overflow-y-auto px-4">
                    <div className="grid gap-9 grid-cols-2 lg:grid-cols-1 p-3 sm:p-8">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{
                          scale: 1,
                          opacity: 1,
                          transition: {
                            ease: "easeOut",
                            delay: 0.6,
                            duration: 0.8,
                          },
                        }}
                      >
                        <Image src={props.imgUrl} alt="" />
                        {/* <Carousal autoSlide={true}>
                          {[props.imgUrl.map((s) => <Image src={s} alt="" />)]}
                        </Carousal> */}
                      </motion.div>
                      <div>
                        <motion.div
                          initial={{ x: 100, scale: 0, opacity: 0 }}
                          whileInView={{
                            x: 0,
                            scale: 1,
                            opacity: 1,
                            transition: {
                              ease: "easeOut",
                              delay: 0.9,
                              duration: 1,
                            },
                          }}
                          className="flex py-2 text-accent"
                        >
                          <div className="pt-1 text-xl pr-5">
                            <FaToolbox />
                          </div>
                          <div className="font-extrabold text-xl">
                            Event Details
                          </div>
                        </motion.div>
                        <div className=" pl-4">
                          <motion.div
                            initial={{ x: 100, scale: 0, opacity: 0 }}
                            whileInView={{
                              x: 0,
                              scale: 1,
                              opacity: 1,
                              transition: {
                                ease: "easeOut",
                                delay: 1,
                                duration: 1,
                              },
                            }}
                            className="flex llg:py-2"
                          >
                            <div className="pt-1 text-neutral-600 pr-3">
                              <FaFolderTree />
                            </div>
                            <div className="font-bold  text-neutral-600">
                              Date&nbsp;:&nbsp;&nbsp;
                            </div>
                            <div>{props.date}</div>
                          </motion.div>
                          <motion.div
                            initial={{ x: 100, scale: 0, opacity: 0 }}
                            whileInView={{
                              x: 0,
                              scale: 1,
                              opacity: 1,
                              transition: {
                                ease: "easeOut",
                                delay: 1.15,
                                duration: 1,
                              },
                            }}
                            className="flex llg:py-2"
                          >
                            <div className="pt-1 text-neutral-600 pr-3">
                              <FaClock />
                            </div>
                            <div className="font-bold text-neutral-600">
                              Location&nbsp;:&nbsp;&nbsp;
                            </div>
                            <div>{props.location}</div>
                          </motion.div>
                          <motion.div
                            initial={{ x: 100, scale: 0, opacity: 0 }}
                            whileInView={{
                              x: 0,
                              scale: 1,
                              opacity: 1,
                              transition: {
                                ease: "easeOut",
                                delay: 1.3,
                                duration: 1,
                              },
                            }}
                            className="flex llg:py-2"
                          >
                            <div className="pt-1 text-neutral-600 pr-3">
                              <FaLink />
                            </div>
                            <div className="font-bold text-neutral-600">
                              Link&nbsp;:&nbsp;&nbsp;
                            </div>
                            <div><Link href={props.href} target="_blank" >Visit Here</Link></div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    <div className="py-4">
                      <motion.div
                        initial={{ x: 100, scale: 0, opacity: 0 }}
                        whileInView={{
                          x: 0,
                          scale: 1,
                          opacity: 1,
                          transition: {
                            ease: "easeOut",
                            delay: 1.65,
                            duration: 1,
                          },
                        }}
                        className="flex text-accent"
                      >
                        <div className="pt-1 text-xl pr-5">
                          <FaGear />
                        </div>
                        <div className="font-extrabold text-xl">
                          Event Description
                        </div>
                      </motion.div>
                      <motion.p
                        initial={{ x: 100, scale: 0, opacity: 0 }}
                        whileInView={{
                          x: 0,
                          scale: 1,
                          opacity: 1,
                          transition: {
                            ease: "easeOut",
                            delay: 1.8,
                            duration: 1,
                          },
                        }}
                        className="pl-5 pb-4 pt-2 text-neutral-600"
                      >
                        {props.description}
                      </motion.p>
                    </div>
                  </div>
                  {/* footer */}
                  {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  
                  </div> */}
                </div>
              </motion.div>
            </motion.div>
          </>
        ) : null}
    </>
  );
};

export default Eventmodal;
