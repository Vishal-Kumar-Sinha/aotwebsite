import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

const Admissiondocs = () => {
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
      <motion.div variants={parent} initial="hidden" whileInView="show" className="mt-4">
        <AnimatedText
          text="Documents Required at the time of Admission"
          className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
        />
        <div>
          <div className="px-6 py-2 ml-10 font-serif text-lg w-fit">
            <ul style={{ listStyleType: "disc" }}>
              <motion.li variants={childitem} className="my-2">
                Original and one photocopy Admit card of respective Joint
                Entrance Examination (WBJEE/ JEE MAIN/ JECA/ JELET).
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Original Allotment Letter received from respective Reporting
                Centre issued by WBJEE Board with Photocopy (An extra copy of
                this letter should be retained by the candidate for future use).
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Rank Card of respective Joint Entrance Examination.
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Self-attested photocopies of 10th admit card/ certificate of
                respective Board as proof of age along with original for
                verification (two copies).
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Self-attested photocopies of 10th & 12th mark sheets along with
                original for verification (Two copies).
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Self-attested photocopies of Diploma marksheet (for Lateral
                Entry Students) along with original for verification (two
                copies).
              </motion.li>
              <li className="my-2">
                Self-attested photocopies of Graduation marksheet (for MCA
                Students) along with original for verification (two copies).
              </li>
              <motion.li variants={childitem} className="my-2">
                Self-attested school leaving/character certificate from the Head
                of the Institute last attended (one copy).
              </motion.li>
              <motion.li variants={childitem} className="my-2">Photocopy of student Aadhaar Card.</motion.li>
              <motion.li variants={childitem} className="my-2">
                University Migration/ Registration Certificate for MCA students.
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Documentary evidence of gurdian in support of address proof
                (i.e. Aadhar Card or Voter Card, Ration Card, Passport etc.).
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Documentary evidence in support of address and family income.
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Two stamp size (2.5 cm X 2 cm) and one passport size color
                photograph.
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Medical Certificate in the prescribed format of Academy of
                Technology (will be given by the institution at the time of
                ‘Physical Reporting/Admission’).
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Eye Specialist Certificate in the prescribed format of Academy
                of Technology (will be given by the institution at the time of
                ‘Physical Reporting/Admission’).
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                Domicile Certificate duly signed by the Head of the institute
                last attended
                <p className="text-blue-600 font-extrabold font-sans px-2 py-1 rounded-2xl w-fit hover:bg-accent/40 hover:text-white transition-all ease-in-out duration-300 text-lg">
                  (
                  <Link href="/Proforma-A2.pdf" target="_blank">
                    DOWNLOAD PERFORMA A2
                  </Link>
                  )
                </p>
              </motion.li>
              <motion.li variants={childitem} className="my-2">
                <Link
                  className="text-blue-600 font-extrabold font-sans px-2 py-1 rounded-2xl hover:bg-accent/40 hover:text-white transition-all ease-in-out duration-300 text-lg"
                  href="/Physical-Reporting-mop-up-round-BTech.pdf"
                  target="_blank"
                >
                  Documents for Physical Reporting
                </Link>
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
                <motion.li variants={childitem} className="mt-2 font-semibold italic">
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

export default Admissiondocs;
