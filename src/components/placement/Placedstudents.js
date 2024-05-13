import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

import { placementlist } from "@/dictionary/Placementlinks";

const Placedstudents = ({ plyear }) => {
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
  let txt = "Placed Students Details " + plyear + " Pass Out Batch";
  return (
    <AnimatePresence>
      <motion.div variants={parent} initial="hidden" whileInView="show">
        <div className="mt-2">
          <div className="flex flex-wrap rounded-2xl p-4 w-full">
            <div className="w-full">
              {placementlist.map((placementitem, index) => (
                <>
                  {placementitem.year === plyear && (
                    <div>
                      <AnimatedText
                        text={txt}
                        className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
                      />
                      <motion.div variants={childitem2} className="rounded-2xl mt-6 w-full shadow-news-shadow md:overflow-x-scroll">
                        <table className="table rounded-2xl w-full text-center">
                          <thead className="border-b llg:text-2xl rounded-t-2xl shadow-inside-shadow">
                            <tr className="rounded-t-2xl bg-blue-950/20">
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-2 py-4 rounded-tl-2xl shadow-inside-shadow border-r"
                              >
                                Sl. No.
                              </th>
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-3 py-4 shadow-inside-shadow border-r"
                              >
                                University Roll
                              </th>
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-3 py-4 shadow-inside-shadow border-r"
                              >
                                Student Name
                              </th>
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                              >
                                Stream
                              </th>
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-3 py-4 rounded-tr-2xl shadow-inside-shadow border-r"
                              >
                                Company
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {placementitem.placed.map((item, index1) => (
                              <tr key={index1} className="border-b">
                                <td className=" px-3 font-bold py-4 border-r">
                                  {index1 + 1}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 border-r">
                                  {item.roll}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 border-r">
                                  {item.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 border-r">
                                  {item.stream}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 border-r">
                                  {item.company}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </motion.div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Placedstudents;
