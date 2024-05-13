import React, { useRef } from "react";
import Image from "next/image";
import Eventmodal from "./Eventmodal";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

const Eventcard = ({ props, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.05 1"],
  });
  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className={`rounded-lg w-fit h-fit p-6 shadow-outside-shadow cursor-pointer transition bg-white duration-200 ease-in-out hover:shadow-inside-shadow ${className}`}
      >
        <div className="overflow-hidden transform rounded-lg shadow-outside-shadow">
          <Image
            className=" w-full h-auto"
            width={1280}
            height={720}
            src={props.imgUrl}
            alt=""
          />
        </div>
        <h3 className="pt-5 text-lg font-normal text-gray-600 block">
          {props.name}
        </h3>
        <div className="font-normal text-gray-500 text-[14px] ">
          <div>Date: {props.date}</div>
          <div>Venue: {props.location}</div>
        </div>
        <div className="font-normal text-gray-500 cursor-pointer text-[14px] duration-300 transition hover:text-[#FA5252] mt-2">
          {props.submenu === true ? (
            <div>
              <Eventmodal props={props} />
            </div>
          ) : (
            <div className="active:scale-90 duration-300 ease-in-out">
              <Link
                className=" hover:bg-black/20 py-1 hover:text-white duration-300 transition max-w-fit px-2 rounded-2xl"
                href={props.href}
                target="_blank"
              >
                Visit here
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Eventcard;
