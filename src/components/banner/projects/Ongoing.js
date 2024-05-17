import React from "react";
import { motion, AnimatePresence } from "framer-motion";
//import components

import AnimatedText from "@/components/AnimatedText";

//import dictionaries
import { cselabs } from "@/dictionary/CSELinks";
import { ongoingresearch } from "@/dictionary/Researchlinks";

const Ongoing = () => {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };
  const childitem = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };
  const childitem2 = {
    hidden: { opacity: 0, scale: 0.75, rotateY: 180 },
    show: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div variants={parent} initial="hidden" whileInView="show">
        <div className="flex flex-wrap rounded-2xl px-4 w-full">
          <AnimatedText
            text="Various Research Work on Social Sciences are ongoing on various SDGs:"
            className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
          />
          <div>
            {ongoingresearch.map((item, index) => (
              <div key={index} className="pb-1 mb-3 font-sans font-medium text-lg">
                <motion.span variants={childitem} className=" font-bold italic">
                  {item.title}
                </motion.span>
                <div className="px-6 pt-2 ml-10 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    {item.data.map((eachdata, i) => (
                      <motion.li key={i} variants={childitem}>
                      {eachdata}
                    </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Ongoing;
