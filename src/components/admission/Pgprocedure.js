import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

const Pgprocedure = () => {
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
      <motion.div variants={parent} initial="hidden" whileInView="show">
        <AnimatedText
          text="Procedure For MCA Admission"
          className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
        />
        <div className="flex flex-wrap rounded-2xl p-4 w-full">
          <motion.p
            variants={childitem}
            className="pb-1 font-sans font-medium text-lg"
          >
            &emsp;&emsp;&emsp;Candidates seeking admission in the two-year MCA
            programme are required to be Bachelor Degree holders under (10 + 2 +
            3) system with Computer or Mathematics as one of the subjects at
            Degree level.
          </motion.p>
          <motion.p
            variants={childitem}
            className="pb-1 font-sans font-medium text-lg"
          >
            &emsp;&emsp;&emsp;Admission will be made on the basis of merit
            position of the candidate in the Joint Entrance Examination for
            Admission to Master in Computer Application (JECA) conducted by the
            State Joint Entrance Board.
          </motion.p>
          <motion.p
            variants={childitem}
            className="pb-1 font-sans font-medium text-lg"
          >
            &emsp;&emsp;&emsp;Candidate should satisfy the stipulated standard
            of physical fitness with good mental and physical health.
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Pgprocedure;
