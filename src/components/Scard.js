import React from "react";
import Mylink from "./Mylink";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const Scard = ({ props }) => {//heading, description, icon, className
  return (
    <>
      <motion.div
        className={`flex relative flex-wrap justify-center gap-4 rounded-tl-[2rem] rounded-br-[2rem] h-[22rem] w-[20rem] shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 duration-200 p-6 ${props.className}`}
      >
        <div className="align-middle shadow-outside-shadow content-center text-[hsl(232,47%,28%)] text-5xl p-2 rounded-full h-20 w-20">{props.icon}</div>
        <div className=" absolute mx-3 top-[31%] space-y-2 p-2">
          <h3 className="text-xl font-semibold">{props.heading}</h3>
          <p className="text-gray-500 font-normal leading-5">{props.description}</p>
          <Mylink href={props.link} textcolor="text-accent" title="Learn&nbsp;More" color="bg-white" target="" ><FaArrowRight className="mx-1" /></Mylink>
        </div>
      </motion.div>
    </>
  );
};

export default Scard;
