import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

const Industry4 = () => {
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
          text="Industry 4.0 @ AOT"
          className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
        />
        <div className="flex flex-wrap rounded-2xl p-4 w-full">
          <motion.p
            variants={childitem}
            className="pb-1 font-sans font-medium my-2 text-lg"
          >
            &emsp;&emsp;&emsp;Industry 4.0 has been spurring 360 degree change
            in the global industries scenario – be it IT or manufacturing
            sector. Unparalleled opportunities are there for the engineers who
            have proficiency in Industry 4.0 Technology skills.
          </motion.p>
          <motion.p
            variants={childitem}
            className="pb-1 my-2 font-sans font-medium text-lg"
          >
            &emsp;&emsp;&emsp;Keeping in pace with the industries requirement at
            present the principal focus of AOT’s{" "}
            <Link href="/talent" className=" font-extrabold italic hover:underline">“Talent Transformation Programme”</Link> is to emphasize
            Industry 4.0 Technologies.
          </motion.p>
          <motion.p
            variants={childitem}
            className="pb-1 my-2 font-sans font-medium text-lg"
          >
            &emsp;&emsp;&emsp;AOT has already taken steps to establish following
            ‘Interdisciplinary Industry 4.0 Technology Centre’ not only in
            accordance with AICTE and affiliating University’s guideline,
            curriculum & syllabus but also beyond curriculum teaching and
            training where every student may acquire requisite Industry 4.0
            skills along with Honours Degree in 4 years B. Tech programme and/or
            International Certification.
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Industry4;
