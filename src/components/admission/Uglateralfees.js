import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

//import directories
import {
  lateraladmissionfees,
  lateralsemfees,
} from "@/dictionary/Admissionlinks";

const Uglateralfees = () => {
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
          text="B. Tech Fees Structure for Lateral Students"
          className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
        />
        <div>
          <motion.div
            variants={childitem}
            className="flex flex-wrap rounded-2xl p-4 w-full"
          >
            <p className="pb-1 font-sans font-medium text-lg">
              &emsp;&emsp;&emsp;As per{" "}
              <span className=" font-bold underline italic">
                Government Order No.466-Edn(T)/10M-04/2004 (Part IV) Dated.
                16/10/23 Kolkata,
              </span>{" "}
              issued by the Department of Higher Education, Government of West
              Bengal, B. Tech students selected for admission in Academy of
              Technology through WBJEE/JEE (main) should pay the following fees
              and deposit at the time of admission by cash or demand draft in
              favour of ACADEMY OF TECHNOLOGY, payable at Kolkata.
            </p>
          </motion.div>
          <motion.div variants={childitem}>
            <AnimatedText
              text="Fees Payable at the time of Admission:"
              className="!text-2xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div className="flex flex-wrap rounded-2xl p-4 w-full justify-center">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.75, rotateY: 270 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    transition: {
                      ease: "easeOut",
                      delay: 0.2,
                      duration: 0.8,
                    },
                  }}
                  className="rounded-2xl w-fit shadow-news-shadow md:overflow-x-scroll"
                >
                  <table className="table rounded-2xl w-fit">
                    <thead className="border-b llg:text-2xl rounded-t-2xl shadow-inside-shadow">
                      <tr className="rounded-2xl bg-blue-950/20 rounded-t-2xl">
                        <th
                          scope="col"
                          className="px-3 py-4 rounded-tl-2xl shadow-inside-shadow border-r text-left"
                        >
                          TUITION FEES & DEPOSITS*
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-4 whitespace-nowrap rounded-tr-2xl shadow-inside-shadow border-r text-right"
                        >
                          AMOUNT (in ₹)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {lateraladmissionfees.map((fees, index) =>
                        fees.sum === false ? (
                          <tr key={index} className="border-b">
                            <td className=" px-3 py-4 border-r text-left">
                              {fees.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-right">
                              {fees.amount}
                            </td>
                          </tr>
                        ) : (
                          <tr className="border-t-[2px] border-solid border-gray-400">
                            <td className=" px-3 font-bold py-4 border-r text-left">
                              {fees.name}
                            </td>
                            <td className="whitespace-nowrap font-bold px-3 py-4 text-right">
                              {fees.amount}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-4 text-xl italic font-serif font-medium text-center text-gray-600">
              <motion.p variants={childitem} className="mb-2">
                *Payable as per amount charged by NIC.
              </motion.p>
              <motion.p variants={childitem}>
                **Payable as per amount charged by MAKAUT.
              </motion.p>
            </div>
          </motion.div>
          <motion.div variants={childitem} className="mt-6">
            <div>
              <AnimatedText
                text="Tuition Fees payable Per Semester:"
                className="!text-2xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div className="flex flex-wrap rounded-2xl p-4 w-full justify-center">
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.75, rotateY: 270 }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      transition: {
                        ease: "easeOut",
                        delay: 0.24,
                        duration: 0.8,
                      },
                    }}
                    className="rounded-2xl w-fit shadow-news-shadow md:overflow-x-scroll"
                  >
                    <table className="table rounded-2xl w-fit">
                      <thead className="border-b llg:text-2xl rounded-t-2xl shadow-inside-shadow">
                        <tr className="rounded-2xl bg-blue-950/20 rounded-t-2xl">
                          <th
                            scope="col"
                            className="px-3 py-4 rounded-tl-2xl shadow-inside-shadow border-r text-left"
                          >
                            TUITION FEES & DEPOSITS*
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-4 whitespace-nowrap rounded-tr-2xl shadow-inside-shadow border-r text-right"
                          >
                            AMOUNT (in ₹)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {lateralsemfees.map((fees, index) => (
                          <tr key={index} className="border-b">
                            <td className=" px-3 py-4 border-r text-left">
                              {fees.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-right">
                              {fees.amount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-4 text-xl italic font-serif text-center font-medium text-gray-600">
                <motion.p variants={childitem} className="mb-2">
                  *Note: may be revised based on WB Government directives.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Uglateralfees;
