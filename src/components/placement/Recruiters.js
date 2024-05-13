import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import { placementlist } from "@/dictionary/Placementlinks";

const Recruiters = ({ plyear }) => {
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
  let txt = "Valued Recruiters " + plyear + " Pass Out Batch";
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
                                Company
                              </th>
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                              >
                                Interview Date
                              </th>
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                              >
                                MCA
                              </th>
                              {plyear === "2022" ? (
                                <th
                                  scope="col"
                                  colSpan={1}
                                  className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                                >
                                  MBA
                                </th>
                              ) : null}
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                              >
                                CSE
                              </th>
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                              >
                                ECE
                              </th>
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                              >
                                EE
                              </th>
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                              >
                                EIE
                              </th>
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-3 py-4 whitespace-nowrap shadow-inside-shadow border-r"
                              >
                                IT
                              </th>
                              <th
                                scope="col"
                                colSpan={1}
                                className="px-3 py-4 whitespace-nowrap rounded-tr-2xl shadow-inside-shadow border-r"
                              >
                                ME
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {placementitem.recruiters.map((item, index1) => (
                              <tr key={index1} className="border-b">
                                <td className=" px-3 font-bold py-4 border-r">
                                  {item.name}
                                </td>
                                <td className="px-2 py-4 border-r">
                                  {item.date}
                                </td>
                                <td className="whitespace-nowrap px-2 py-4 border-r">
                                  {item.mca && (
                                    <span className="italic font-mono font-bold text-blue-500 text-[26px]">
                                      &#x2714;
                                    </span>
                                  )}
                                </td>
                                {plyear === "2022" ? (
                                  <td className="whitespace-nowrap px-2 py-4 border-r">
                                    {item.mba && (
                                      <span className="italic font-mono font-bold text-blue-500 text-[26px]">
                                        &#x2714;
                                      </span>
                                    )}
                                  </td>
                                ) : null}
                                <td className="whitespace-nowrap px-3 py-4 border-r">
                                  {item.cse && (
                                    <span className="italic font-mono font-bold text-blue-500 text-[26px]">
                                      &#x2714;
                                    </span>
                                  )}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 border-r">
                                  {item.ece && (
                                    <span className="italic font-mono font-bold text-blue-500 text-[26px]">
                                      &#x2714;
                                    </span>
                                  )}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 border-r">
                                  {item.ee && (
                                    <span className="italic font-mono font-bold text-blue-500 text-[26px]">
                                      &#x2714;
                                    </span>
                                  )}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 border-r">
                                  {item.eie && (
                                    <span className="italic font-mono font-bold text-blue-500 text-[26px]">
                                      &#x2714;
                                    </span>
                                  )}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 border-r">
                                  {item.it && (
                                    <span className="italic font-mono font-bold text-blue-500 text-[26px]">
                                      &#x2714;
                                    </span>
                                  )}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 border-r">
                                  {item.me && (
                                    <span className="italic font-mono font-bold text-blue-500 text-[26px]">
                                      &#x2714;
                                    </span>
                                  )}
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

export default Recruiters;
