import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

import { placementlist } from "@/dictionary/Placementlinks";

const Batch = ({ plyear }) => {
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
  const childitem2 = {
    hidden: { opacity: 0, scale: 0.75, rotateY: 180 },
    show: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  let txt = "Placement " + plyear + " Pass Out Batch";
  return (
    <AnimatePresence>
      <motion.div variants={parent} initial="hidden" whileInView="show">
        <AnimatedText
          text={txt}
          className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
        />
        <div className="flex flex-wrap rounded-2xl p-4 w-full">
          {placementlist.map((placementitem, index) => (
            <div key={index}>
              {placementitem.year === plyear && (
                <div className="w-full">
                  <motion.p
                    variants={childitem}
                    className="py-1 font-sans font-normal leading-6 text-lg"
                  >
                    &emsp;&emsp;&emsp;AOT continues to redefine success. This
                    year our students have already achieved{" "}
                    {placementitem.final} % placement offer (till date) and the
                    placement graph is expected to rise since many more
                    companies are scheduled to visit the campus in forthcoming
                    months.
                  </motion.p>
                  <motion.p
                    variants={childitem}
                    className="py-1 font-sans font-normal leading-6 text-lg"
                  >
                    &emsp;&emsp;&emsp;And this is not a one-time fluke, but an
                    achievement that occurs consistently year after year.
                    Equipped with comprehensive training right from the first
                    semester and well-versed in adequate technologies, our
                    students are ready to face any and every challenge thrown at
                    them and their performance in recruitment drives amply
                    demonstrate that.
                  </motion.p>
                  
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Batch;
