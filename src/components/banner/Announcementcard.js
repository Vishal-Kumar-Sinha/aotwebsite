import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Announcementcard = ({ props }) => {
  const [showNewbox, setShowNewbox] = useState(false);
  const [day, setday] = useState(0);
  const [month, setmonth] = useState(0);
  const [yr, setyr] = useState(0);
  useEffect(() => {
    const date = new Date(props.date);
    setmonth(date.toLocaleString("default", { month: "short" }));
    setyr(date.getFullYear());
    setday(date.getDate());
    Date.prototype.isValid = function () {
      return this.getTime() === this.getTime();
    };
    const today = new Date();
    const checkday = today.setMonth(today.getMonth() - 6);
    if (!date.isValid()) {
      setShowNewbox(true);
    }
    if (date.isValid() && date >= checkday) {
      setShowNewbox(true);
    }
  });
  return (
    <>
      <div className="my-3">
        <Link href={props.href} target="_blank">
          <div className="w-full min-h-[4rem] h-auto flow-root relative shadow-news-shadow bg-white/70 hover:bg-slate-400/60 hover:scale-95 transition-all duration-300 rounded-2xl px-2 py-1">
            <div className="w-4 h-4 left-2 top-2 relative bg-black rounded-[50%]">
              <span className="absolute w-[12rem] h-1 bg-gradient-to-r from-black left-2 top-[5px]"></span>
              <span className="absolute w-[4rem] h-1 bg-gradient-to-r from-black -left-6 top-10 rotate-90"></span>
            </div>
            <div className="flex justify-between">
              <div className="ml-7 h-full mt-1 w-fit mr-1 font-medium text-lg">
                <span className="text-[2rem] font-serif font-extrabold ">
                  {day}
                  <span className="font-serif text-[1rem] font-extrabold align-text-top">
                    {month},&nbsp;{yr}
                  </span>
                </span>
              </div>
              <div className=" content-center mx-3">
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
                    className="max-w-fit px-1 py-[2px] rounded-2xl content-center items-center shadow-inside-shadow text-white text-sm "
                  >
                    New
                  </motion.div>
                ) : null}
              </div>
            </div>
            <div className="mx-2 h-full my-2 w-[96%] font-sans font-medium text-base text-center">
                {props.name}
              </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Announcementcard;
