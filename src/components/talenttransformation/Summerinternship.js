import React from "react";
import { motion, AnimatePresence } from "framer-motion";
//import components
import AnimatedTextWord from "@/components/AnimatedTextWord";

// import dictionary
import { summerinternshipcompanylinks } from "@/dictionary/Summerinternshipcompanylist";

const Summerinternship = () => {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.6,
        staggerChildren: 0.4,
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
        duration: 1,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div variants={parent} initial="hidden" whileInView="show">
        <AnimatedTextWord
          text="&ldquo;Summer  Internships  @  AOT&rdquo;"
          className="!text-4xl text-[hsl(232,47%,28%)] inline text-center font-bold font-serif italic pt-3"
        />
        <div>
          <div className="flex flex-wrap rounded-2xl p-4 w-full">
            <motion.p variants={childitem} className="pb-1 font-sans font-medium text-lg">
              &emsp;&emsp;&emsp;In AOT, seminars, industrial visits, invited
              lectures and national/ international conferences are organized on
              a regular basis to enhance professional competence of students. In
              every academic session Academy of Technology arranges summer
              training/internship for every pre-final year B. Tech student. For
              information regarding companies where our students have done their
              summer training/internship during the last three years please
              glance through the following list&nbsp;: -
            </motion.p>
            <div className="px-6 py-2 ml-10 font-sans font-[650] text-lg w-fit">
              <ul style={{ listStyleType: "disc" }}>
                {summerinternshipcompanylinks.map((companylink, index) => (
                  <motion.li variants={childitem} key={index}>{companylink}</motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Summerinternship;
