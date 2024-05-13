import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";

const Icentres = () => {
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
          text="Industry 4.0 Centres @ AOT"
          className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
        />
        <div className="flex flex-wrap rounded-2xl p-4 w-full">
          <AnimatePresence>
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              className="flex flex-wrap rounded-2xl w-full px-6 py-2 ml-10 font-sans font-medium text-lg "
            >
              <ul style={{ listStyleType: "circle" }}>
                <motion.li variants={childitem} className="mb-2">
                  <Link href="/job_pdf/Telegraph_05_05_23.pdf" target="_blank">
                    <span className=" text-blue-600 font-extrabold">
                      Centre for Embedded System & IoT (Internet of Things)
                    </span>
                  </Link>
                </motion.li>
                <motion.li variants={childitem} className="my-2">
                  <Link
                    href="/job_pdf/AOT-Recruitment-Kajer-Bazar-AD-for-10.01-1.pdf"
                    target="_blank"
                  >
                    <span className=" text-blue-600 font-extrabold">
                      Centre for Soft Computing & Data Science
                    </span>
                  </Link>
                </motion.li>
                <motion.li variants={childitem} className="my-2">
                  <Link
                    href="/job_pdf/AOT-Recruitment-Kajer-Bazar-AD-for-10.01-1.pdf"
                    target="_blank"
                  >
                    <span className=" text-blue-600 font-extrabold">
                      Centre for Artificial Intelligence & Machine Learning
                    </span>
                  </Link>
                </motion.li>
                <motion.li variants={childitem} className="my-2">
                  <Link
                    href="/job_pdf/AOT-Recruitment-Kajer-Bazar-AD-for-10.01-1.pdf"
                    target="_blank"
                  >
                    <span className=" text-blue-600 font-extrabold">
                      Centre for Cyber Security & Cloud Computing
                    </span>
                  </Link>
                </motion.li>
                <motion.li variants={childitem} className="my-2">
                  <Link
                    href="/job_pdf/AOT-Recruitment-Kajer-Bazar-AD-for-10.01-1.pdf"
                    target="_blank"
                  >
                    <span className=" text-blue-600 font-extrabold">
                      Centre for Energy Management & Optimization
                    </span>
                  </Link>
                </motion.li>
                <motion.li variants={childitem} className="my-2">
                  <Link
                    href="/job_pdf/AOT-Recruitment-Kajer-Bazar-AD-for-10.01-1.pdf"
                    target="_blank"
                  >
                    <span className=" text-blue-600 font-extrabold">
                      Centre for Adaptive Manufacturing or 3D Technologies
                    </span>
                  </Link>
                </motion.li>
                <motion.li variants={childitem} className="my-2">
                  <Link
                    href="/job_pdf/AOT-Recruitment-Kajer-Bazar-AD-for-10.01-1.pdf"
                    target="_blank"
                  >
                    <span className=" text-blue-600 font-extrabold">
                      Centre for Engg. Science Management & Social Studies
                    </span>
                  </Link>
                </motion.li>
              </ul>
              <motion.p
                variants={childitem}
                className="py-2 font-sans font-semibold text-gray-700 italic text-lg"
              >
                &emsp;&emsp;&emsp;We are envisioned to continuous up-gradations
                of the state-of-the art infrastructure and teaching-learning
                process in collaboration with industry giants e.g. Google, TCS,
                Wipro etc. for skilling each student of AOT in Industry 4.0
                Technology.
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Icentres;
