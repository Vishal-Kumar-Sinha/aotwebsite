import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

const Wmtlc = () => {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.45,
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
        duration: 0.8,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div variants={parent} initial="hidden" whileInView="show">
        <AnimatedText
          text="Wipro Mission10x Technology Centre @ AOT"
          className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
        />
        <div className="flex flex-wrap rounded-2xl p-4 w-full">
          <motion.p
            variants={childitem}
            className="pb-1 font-sans font-medium my-2 text-lg"
          >
            &emsp;&emsp;&emsp;Mission10X Technology Learning Center (MTLC) is a
            Wipro initiative that addresses the issue of employability of
            engineering graduates in India through improved laboratory practices
            in colleges. It is a partnership programme involving leading
            Engineering Colleges across India and Academy of Technology is proud
            to be the one and only nodal centre of the Wipro MTLC initiative in
            Eastern India.
          </motion.p>
          <motion.p
            variants={childitem}
            className="pb-1 my-2 font-sans font-medium text-lg"
          >
            &emsp;&emsp;&emsp;Wipro MTLC helps engineering students of AOT gain
            hands-on exposure in advanced technologies and gives them the
            experience of working in real time to make them industry-ready.
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Wmtlc;
