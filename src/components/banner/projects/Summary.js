import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import AnimatedTextWord from "@/components/AnimatedTextWord";

//import directories
import { summerizeresearch } from "@/dictionary/Researchlinks";

const Summary = () => {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.4,
        staggerChildren: 0.2,
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
        duration: 0.6,
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
        delay: 0.2,
        duration: 1,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div variants={parent} initial="hidden" whileInView="show">
        <AnimatedText
          text="Summarize Major Projects on various SDGs:"
          className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
        />
        <div>
          <div>
            <div className="flex flex-wrap rounded-2xl p-4 w-full">
              <motion.div
                variants={childitem2}
                className="rounded-2xl w-full shadow-news-shadow md:overflow-x-scroll"
              >
                <table className="table rounded-2xl w-full text-center">
                  <thead className="border-b llg:text-2xl rounded-t-2xl shadow-inside-shadow">
                    <tr className="rounded-2xl bg-blue-950/20">
                      <th
                        scope="col"
                        colSpan={1}
                        className="px-2 py-4 whitespace-nowrap rounded-tl-2xl shadow-inside-shadow border-r"
                      >
                        SDG
                      </th>
                      <th
                        scope="col"
                        colSpan={1}
                        className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                      >
                        Project Title
                      </th>
                      <th
                        scope="col"
                        colSpan={1}
                        className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                      >
                        Areas of Projects
                      </th>
                      <th
                        scope="col"
                        colSpan={1}
                        className="px-2 py-4 whitespace-nowrap rounded-tr-2xl shadow-inside-shadow"
                      >
                        Funded by
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {summerizeresearch.map((researchitem, index) => (
                      <tr className="border-b">
                        <td className="whitespace-nowrap px-2 font-bold py-4 border-r">
                          SDG{researchitem.id}
                        </td>
                        <td className=" px-2 py-4 border-r">
                          {researchitem.title}
                        </td>
                        <td className=" px-2 py-4 border-r">
                          {researchitem.area}
                        </td>
                        <td className=" px-2 py-4 border-r">
                          {researchitem.funding}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Summary;
