import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

const Rulesfees = () => {
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
      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="show"
        className="mt-4"
      >
        <AnimatedText
          text="Rules for Fees (applicable for B. Tech, B. Tech [Lateral] & MCA)"
          className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
        />
        <div>
          <div className="px-6 py-2 ml-10 font-serif text-lg w-fit">
            <ul style={{ listStyleType: "number" }}>
              <motion.li variants={childitem} className="my-2">
                Hostel accommodation will be provided subject to availability of
                seats on first come first serve basis.
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                No student will be allowed to take admission or leave the Hostel
                in mid-session of any semester unless otherwise directed.
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Admission to Hostel will be made only in the month of December &
                June every year, subject to availability of seats and the
                Institute reserves the right to accept or reject any application
                without assigning any reason.
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Hostel seat rents are payable on 6 months basis in cash or by
                Bank Draft of ₹15000/- favouring Academy of Technology payable
                at Kolkata.
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Except Caution Deposit no other fees will be refunded.
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Caution Deposit will be refunded only after the student passes
                the Final Examination or discontinues study mid-way.
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                * B. Tech (4 years) Students should register themselves for
                “Employbility skill Developement Tutorial” on cost basis. Tution
                fees of Rs.36,000/- have to be deposited as per following
                schedule for B. Tech 2022-23 admission batch students:
                <motion.p
                  variants={childitem}
                  className="mt-2 mx-4 font-semibold"
                >
                  ₹ 12,000/- (First Year)
                </motion.p>
                <motion.p
                  variants={childitem}
                  className="my-1 mx-4 font-semibold"
                >
                  ₹ 12,000/- (Second Year)
                </motion.p>
                <motion.p
                  variants={childitem}
                  className="mb-2 mx-4 font-semibold"
                >
                  ₹ 12,000/- (Third Year)
                </motion.p>
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                * B. Tech Lateral Students should register themselves for
                “Employbility skill Developement Tutorial” on cost basis. Tution
                fees of Rs.24,000/- have to be deposited as per following
                schedule for B. Tech Lateral & MCA 2022-23 admission batch
                students:
                <motion.p
                  variants={childitem}
                  className="mt-2 mx-4 font-semibold"
                >
                  ₹ 12,000/- (Second Year)
                </motion.p>
                <motion.p
                  variants={childitem}
                  className="mb-2 mx-4 font-semibold"
                >
                  ₹ 12,000/- (Third Year)
                </motion.p>
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                * MCA Students should register themselves for “Employbility
                skill Developement Tutorial” on cost basis. Tution fees of
                Rs.12,000/- have to be deposited as per following schedule for
                B. Tech Lateral & MCA 2022-23 admission batch students:
                <motion.p
                  variants={childitem}
                  className="my-2 mx-4 font-semibold"
                >
                  ₹ 12,000/- (First Year)
                </motion.p>
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Students fees for Arcadia, the annual cultural event of the
                institute, are payable separately and to be paid with the
                semester fees of 2nd, 4th, 6th and 8th semesters.
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Structure of fees and deposits may change based on the decision
                of the State Government.
              </motion.li>
            </ul>
          </div>
          <div>
            <AnimatedText
              text="Note:"
              className="!text-2xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div className="px-6 ml-10 font-serif text-lg w-fit">
              <ul style={{ listStyleType: "circle" }}>
                <motion.li variants={childitem}>
                  Semester Fees are payable in accordance with the notification
                  of the institute. Delayed payment of Semester Fees will
                  attract fine as per norms of the Institute.
                </motion.li>
                <motion.li
                  variants={childitem}
                  className="mt-2 font-semibold italic"
                >
                  * GST may be applicable as per norms of Govt. of India.
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Rulesfees;
