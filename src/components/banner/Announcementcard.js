import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Announcementcard = ({ props }) => {
  const [showNewbox, setShowNewbox] = useState(false);
  useEffect(() => {
    const date = new Date(props.date);
    Date.prototype.isValid = function () {
      return this.getTime() === this.getTime();
    };
    const today = new Date();
    const checkday = today.setMonth(today.getMonth() - 6);
    if(!date.isValid()) {
      setShowNewbox(true);
    };
    if(date.isValid() && (date >= checkday)) {
      setShowNewbox(true);
    }
  });
  return (
    <>
      <div className="my-4">
        <Link href={props.href} target="_blank">
          <div className="w-full h-auto flow-root shadow-news-shadow bg-slate-400 hover:bg-slate-400/60 hover:scale-95 transition-all duration-300 rounded-2xl px-2 py-1">
            <div className="ml-5 font-medium text-lg float-left">
              {props.date}{props.name}
            </div>
            {showNewbox === true ? (
              <motion.div
                animate={{
                  backgroundColor: [
                    "#121212",
                    "rgba(131,58,180,1)",
                    "rgba(253,29,29,1)",
                    "rgba(252,176,69,1)",
                    "rgba(131,58,180,1)",
                    "#121212",
                  ],
                  transition: { duration: 1, repeat: Infinity },
                }}
                className="max-w-fit px-2 py-1 mr-5 float-right rounded-2xl content-center items-center text-white "
              >
                New
              </motion.div>
            ) : null}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Announcementcard;
