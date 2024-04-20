import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Scard = ({ heading, description, icon, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });
  return (
    <>
      <motion.div
        ref={ref}
        style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
        }}
        className={`flex gap-4 rounded-xl shadow-outside-shadow hover:shadow-inside-shadow hover:scale-110 duration-500 p-6 ${className}`}
      >
        <div className="min-w-max">{icon}</div>
        <div className="space-y-2">
          <h3 className="text-[22px] font-semibold">{heading}</h3>
          <p className="leading-8 text-gray-500 font-normal">{description}</p>
        </div>
      </motion.div>
    </>
  );
};

export default Scard;
