import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaXmark,
  FaGear,
  FaToolbox,
  FaWrench,
  FaClock,
  FaLink,
  FaFolderTree,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

const Event = ({ links }) => {
  let [currentPosition, setCurrentPosition] = useState(0);
  const [showModal, setShowModal] = useState(false);
  let interval;
  useEffect(() => {
    // use setTimeOut instead of setInterval
    //console.log(showModal);
    interval = setTimeout(() => {
      setCurrentPosition(
        currentPosition === links.length - 1 ? 0 : currentPosition + 1
      );
    }, 6000);
    //console.log(currentPosition);
    //use if condition to checkout value of autoPlay
    if (showModal === true) {
      clearTimeout(interval);
    }
    return () => clearTimeout(interval);
  });

  const previous = () => {
    setCurrentPosition(
      currentPosition === 0 ? links.length - 1 : currentPosition - 1
    );
  };
  const next = () => {
    setCurrentPosition(
      currentPosition === links.length - 1 ? 0 : currentPosition + 1
    );
  };
  const pause = () => {
    clearTimeout(interval);
  };
  const resume = () => {
    interval = setTimeout(next, 6000);
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-hidden">
        {links.map(
          (props, index) =>
            index === currentPosition && (
              <div key={index} className="h-[31rem] pt-2 w-[36rem]">
                <motion.div
                  className="transition-all mx-6 ease-out duration-500 justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeIn", delay: 0, duration: 2 }}
                  onMouseEnter={pause}
                  onMouseLeave={resume}
                >
                  {/**start event card */}
                  <div className="rounded-lg w-fit h-fit p-6 shadow-news-shadow cursor-pointer transition bg-white duration-200 ease-in-out hover:shadow-inside-shadow">
                    <motion.div
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
                      whileHover={{ y: -4 }}
                      className="overflow-hidden transform rounded-lg shadow-outside-shadow"
                    >
                      <Image
                        className=" w-full h-auto"
                        src={props.imgUrl}
                        width={1280}
                        height={720}
                        alt=""
                      />
                    </motion.div>
                    <motion.h3
                      initial={{ x: 100, y: 100, scale: 0, opacity: 0 }}
                      animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        transition: {
                          ease: "easeOut",
                          delay: 0.6,
                          duration: 0.8,
                        },
                      }}
                      className="pt-5 text-lg font-semibold text-gray-600 block"
                    >
                      {props.name}
                    </motion.h3>
                    <motion.div
                      initial={{ x: 100, y: 100, opacity: 0 }}
                      animate={{
                        x: 0,
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        transition: {
                          ease: "easeOut",
                          delay: 0.8,
                          duration: 0.8,
                        },
                      }}
                      className="font-normal text-gray-500 text-[14px] "
                    >
                      <div>Date: {props.date}</div>
                      <div>Venue: {props.location}</div>
                    </motion.div>
                    <div>
                      {props.submenu === true ? (
                        <div>
                          {/**event modal start */}
                          {/* <Eventmodal props={props} /> */}

                          <div>
                            <motion.button
                              initial={{ x: 10, y: 10, scale: 0, opacity: 0 }}
                              animate={{
                                x: 0,
                                y: 0,
                                scale: 1,
                                opacity: 1,
                                transition: {
                                  ease: "easeOut",
                                  delay: 0.8,
                                  duration: 0.8,
                                },
                              }}
                              whileHover={{ x: 5 }}
                              className="font-bold text-[#FA5252] cursor-pointer inline-flex text-[14px] duration-100 transition-all mt-2"
                              type="button"
                              onClick={() => {
                                // {pause};
                                setShowModal(true);
                              }}
                            >
                              View&nbsp;More&nbsp;
                              <FaArrowRight className="mt-1" />
                            </motion.button>
                            {showModal ? (
                              <>
                                <motion.div
                                  className="justify-center bg-black bg-opacity-25 backdrop-blur-sm items-center flex fixed inset-0 z-50 overflow-hidden outline-none focus:outline-none"
                                  initial={{ opacity: 0 }}
                                  animate={{
                                    opacity: 1,
                                    transition: {
                                      ease: "easeOut",
                                      duration: 0.2,
                                    },
                                  }}
                                  exit={{
                                    opacity: 0,
                                    transition: {
                                      ease: "easeIn",
                                      duration: 1.1,
                                    },
                                  }}
                                >
                                  {/* <div className="relative shadow-outside-shadow rounded-lg w-auto my-6 mx-auto max-w-6xl"> */}
                                  <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                      scale: 1,
                                      opacity: 1,
                                      transition: {
                                        ease: "easeOut",
                                        duration: 1,
                                      },
                                    }}
                                    exit={{
                                      scale: 0,
                                      opacity: 0,
                                      transition: {
                                        ease: "easeIn",
                                        duration: 1.1,
                                      },
                                    }}
                                    className="relative shadow-outside-shadow rounded-lg w-auto my-6 mx-auto max-w-6xl h-[90%] sm:h-full overflow-hidden"
                                  >
                                    {/*content*/}
                                    {/* <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"> */}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full">
                                      {/*header*/}
                                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <motion.h3
                                          initial={{
                                            x: 100,
                                            y: 100,
                                            scale: 0,
                                            opacity: 0,
                                          }}
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
                                          onClick={() => {
                                            // {resume};
                                            setShowModal(false);
                                          }}
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
                                            <Image
                                              src={props.imgUrl}
                                              width={1280}
                                              height={720}
                                              alt=""
                                            />
                                            {/* <Carousal autoSlide={true}>
                                              {[props.imgUrl.map((s) => <Image src={s} width={1280} height={720} alt="" />)]}
                                            </Carousal> */}
                                          </motion.div>
                                          <div>
                                            <motion.div
                                              initial={{
                                                x: 100,
                                                scale: 0,
                                                opacity: 0,
                                              }}
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
                                                initial={{
                                                  x: 100,
                                                  scale: 0,
                                                  opacity: 0,
                                                }}
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
                                                initial={{
                                                  x: 100,
                                                  scale: 0,
                                                  opacity: 0,
                                                }}
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
                                                initial={{
                                                  x: 100,
                                                  scale: 0,
                                                  opacity: 0,
                                                }}
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
                                                <div>
                                                  <Link
                                                    href={props.href}
                                                    target="_blank"
                                                  >
                                                    Visit Here
                                                  </Link>
                                                </div>
                                              </motion.div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="py-4">
                                          <motion.div
                                            initial={{
                                              x: 100,
                                              scale: 0,
                                              opacity: 0,
                                            }}
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
                                            initial={{
                                              x: 100,
                                              scale: 0,
                                              opacity: 0,
                                            }}
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
                                    </div>
                                  </motion.div>
                                </motion.div>
                              </>
                            ) : null}
                          </div>
                          {/**event modal end */}
                        </div>
                      ) : (
                        <motion.div
                          initial={{ x: 100, y: 100, scale: 0, opacity: 0 }}
                          animate={{
                            x: 0,
                            y: 0,
                            scale: 1,
                            opacity: 1,
                            transition: {
                              ease: "easeOut",
                              delay: 0.5,
                              duration: 0.8,
                            },
                          }}
                          className="font-normal text-gray-500 cursor-pointer text-[14px] transition hover:text-[#FA5252] mt-2 active:scale-90 duration-300 ease-in-out"
                        >
                          <Link
                            className=" hover:bg-black/20 py-1 hover:text-white duration-300 transition max-w-fit px-2 rounded-2xl"
                            href={props.href}
                            target="_blank"
                          >
                            Visit here
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/**end event card */}
                </motion.div>
                <div className="inset-0 flex items-center justify-between px-6 py-2">
                  <button
                    onClick={previous}
                    className=" bg-white rounded-[50%] active:scale-75 p-2 shadow-inside-shadow hover:scale-125 duration-300 ease-in-out transition-all"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={next}
                    className=" bg-white rounded-[50%] active:scale-75 p-2 shadow-inside-shadow hover:scale-125 duration-300 ease-in-out transition-all"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default Event;
