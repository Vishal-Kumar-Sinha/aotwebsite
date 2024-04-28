import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = ({ text, className }) => {
  const words = text.split(" ");
  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full mx-autoflex items-start text-left overflow-hidden">
      <motion.div
        className={`inline-block w-full ${className}`}
        style={{
          overflow: "hidden",
          display: "inline-block",
          fontSize: "2rem",
        }}
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        {words.map((word, index) => (
          <motion.span
            className="inline-block"
            variants={child}
            style={{ marginRight: "5px" }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedTextWord;
