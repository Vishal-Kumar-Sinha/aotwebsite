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
                  <motion.div
                    variants={childitem2}
                    className="rounded-2xl mt-6 w-full shadow-news-shadow overflow-x-auto"
                  >
                    <table className="table rounded-2xl w-full text-center">
                      <thead className="border-b llg:text-2xl rounded-t-2xl shadow-inside-shadow">
                        <tr className="rounded-t-2xl bg-blue-950/20">
                          <th
                            scope="col"
                            colSpan={1}
                            className="px-2 py-4 rounded-tl-2xl shadow-inside-shadow border-r"
                          >
                            Placement @ {plyear}
                          </th>
                          <th
                            scope="col"
                            colSpan={1}
                            className="px-3 py-4 shadow-inside-shadow border-r"
                          >
                            CSE
                          </th>
                          <th
                            scope="col"
                            colSpan={1}
                            className="px-3 py-4 shadow-inside-shadow border-r"
                          >
                            ECE
                          </th>
                          <th
                            scope="col"
                            colSpan={1}
                            className="px-3 py-4 shadow-inside-shadow border-r"
                          >
                            EE
                          </th>
                          <th
                            scope="col"
                            colSpan={1}
                            className="px-3 py-4 shadow-inside-shadow border-r"
                          >
                            EIE
                          </th>
                          <th
                            scope="col"
                            colSpan={1}
                            className="px-3 py-4 shadow-inside-shadow border-r"
                          >
                            IT
                          </th>
                          <th
                            scope="col"
                            colSpan={1}
                            className="px-3 py-4 shadow-inside-shadow border-r"
                          >
                            ME
                          </th>
                          <th
                            scope="col"
                            colSpan={1}
                            className="px-3 py-4 shadow-inside-shadow border-r"
                          >
                            MCA
                          </th>
                          {plyear === "2022" ? (
                            <th
                              scope="col"
                              colSpan={1}
                              className="px-3 py-4 shadow-inside-shadow border-r"
                            >
                              MBA
                            </th>
                          ) : null}
                          <th
                            scope="col"
                            colSpan={1}
                            className="px-3 py-4 rounded-tr-2xl shadow-inside-shadow border-r"
                          >
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {placementitem.statistics.map((item, index1) => (
                          <tr key={index1} className="border-b">
                            <td className=" px-3 font-bold py-4 border-r">
                              {item.heading}
                            </td>
                            <td className=" px-3 py-4 border-r">
                              {item.cse}
                            </td>
                            <td className=" px-3 py-4 border-r">
                              {item.ece}
                            </td>
                            <td className=" px-3 py-4 border-r">
                              {item.ee}
                            </td>
                            <td className=" px-3 py-4 border-r">
                              {item.eie}
                            </td>
                            <td className=" px-3 py-4 border-r">
                              {item.it}
                            </td>
                            <td className=" px-3 py-4 border-r">
                              {item.me}
                            </td>
                            <td className=" px-2 py-4 border-r">
                              {item.mca}
                            </td>
                            {plyear === "2022" ? (
                              <td className=" px-2 py-4 border-r">
                                {item.mba}
                              </td>
                            ) : null}
                            <td className=" px-2 py-4 border-r">
                              {item.total}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
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
