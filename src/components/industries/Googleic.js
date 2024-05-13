import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

const Googleic = () => {
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
            &emsp;&emsp;&emsp;Academy of Technology is the only engineering
            college in Eastern India to establish a Innovation Centre in
            collaboration with Google. With this initiative AOT has surged ahead
            of peer institutes by providing its students a platform where they
            can ignite the spark of innovation within them and design
            cutting-edge web and mobile apps under the mentorship of experts
            from Google.
          </motion.p>
          <motion.div
            variants={childitem}
            className="font-sans my-4 font-medium text-lg"
          >
            Link to Google Innovation Centre :&emsp;
            <Link
              href="https://gic.aot.edu.in/index.html"
              target="_blank"
              className="italic font-bold text-accent hover:bg-accent/50 hover:text-white transition-all ease-in-out duration-300 px-2 rounded-3xl"
            >
              Click&nbsp;Here
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Googleic;
