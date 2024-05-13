import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

const Support = () => {
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
        duration: 1.2,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="show"
        className="mt=4"
      >
        <AnimatedText
          text="Financial Aid & Support"
          className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
        />
        <div>
          <div className="px-6 py-2 ml-10 font-serif text-xl w-fit">
            <ul style={{ listStyleType: "disc" }}>
              <motion.li variants={childitem} className="my-1">
                Active assistance to avail educational loans from nationalized
                banks.
              </motion.li>
              <motion.li variants={childitem} className="my-1">
                Financial assistance from various Government and Non Government
                Organizations.
              </motion.li>
              <motion.li variants={childitem} className="my-1">
                Scholarship/ Stipend from Backward Classes Welfare Department,
                Government of West Bengal for SC/ ST/ OBC students.
              </motion.li>
              <motion.li variants={childitem} className="my-1">
                Education Loan from West Bengal Minority Development and Finance
                Corporation for students from Minority Community.
              </motion.li>
              <motion.li variants={childitem} className="my-1">
                Scholarship/ Stipend from different Central Government
                Organisations.
              </motion.li>
              <motion.li variants={childitem} className="my-1">
                Railway Concession for all eligible students.
              </motion.li>
            </ul>
          </div>
          <motion.div
            variants={childitem}
            className="font-sans font-bold italic text-xl drop-shadow-xl"
          >
            &emsp;&emsp;&emsp;Full/Half Tuition Fees Waiver under West Bengal
            Freeship Scheme for economically backward meritorious students
            admitted in 4-year B. Tech courses. Such tuition fees waiver scheme
            is renewable in every semester subject to academic performance of
            concerned student.
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Support;
