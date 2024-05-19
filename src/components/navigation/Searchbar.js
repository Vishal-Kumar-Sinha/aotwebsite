import React, { useState } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import FuzzySearch from "fuzzy-search";
import Link from "next/link";

import { searchlink } from "@/dictionary/SearchLink";

const Searchbar = () => {
  const [showSModal, setShowSModal] = useState(false);
  const [anslen, setanslen] = useState(1);
  const [ans, setans] = useState(null);
  const submitSearch = (event) => {
    const searcher = new FuzzySearch(searchlink, ["name", "details"], {
      caseSensitive: false,
      sort: true,
    });
    let item = event.target.value;
    //console.log(item);
    while (item === null || item === "") {
      setans(null);
      return;
    }
    const result = searcher.search(item);
    setanslen(result.length);
    setans(result);
    //console.log(result);
  };
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.45,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <>
      <button
        className=" p-1.5 rounded-[50%] content-center cursor-pointer transition-all ease-in-out duration-150 hover:scale-110 active:scale-75"
        onClick={() => {
          showSModal === false ? setShowSModal(true) : setShowSModal(false);
        }}
      >
        <FaMagnifyingGlass />
      </button>
      {showSModal ? (
        <>
          <div
            onClick={() => {
              setShowSModal(false);
              setans(null);
              setanslen(1);
            }}
            className="smmy:top-[4.2rem] lg:top-[4.7rem] llg:top-[4.5rem] bg-black bg-opacity-25 backdrop-blur-md flex fixed inset-0 z-40 overflow-hidden outline-none focus:outline-none"
          ></div>
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            className="fixed z-50 justify-self-center shadow-outside-shadow rounded-3xl bg-white top-[5.2rem] inset-0 h-1/2 sm:w-[95%] w-4/5 ggxl:w-3/5"
          >
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <motion.div
                variants={parent}
                className="relative z-0 w-3/4 group"
              >
                <input
                  type="text"
                  name="floating_search"
                  id="floating_search"
                  className="block pt-2.5 px-0 w-full text-md text-dark bg-transparent border-0 border-b-2 border-dark appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
                  placeholder=" "
				  autoFocus
                  onChange={submitSearch}
                />
                <label className="peer-focus:font-bold absolute font-medium text-md text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Search
                </label>
              </motion.div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    ease: "easeOut",
                    delay: 0.1,
                    duration: 0.4,
                  },
                }}
                className="p-1 rounded-[50%] ml-auto bg-transparent border-0 text-red-500 opacity-100 float-right text-3xl leading-none font-bold shadow-inside-shadow hover:shadow-outside-shadow hover:scale-110 transition-all duration-100 ease-in-out outline-none focus:outline-none"
                onClick={() => {
                  setShowSModal(false);
                  setans(null);
                  setanslen(1);
                }}
              >
                <FaXmark />
              </motion.button>
            </div>
            {/*body*/}
            <div className="overflow-y-auto h-[70%] scrlbr ml-4 p-2 mr-[10%] ">
              {ans !== null ? (
                <div>
                  {anslen !== 0 ? (
                    ans.map((r, i) => (
                      <Link
						onClick={() => {
						  setShowSModal(false);
						  setans(null);
						  setanslen(1);
						}}
						key={i} href={r.link} target={r.target}>
                        <p className="my-2 pl-2 font-medium text-lg rounded-md hover:bg-gray-300/50 hover:text-accent transition-all duration-200 ease-in-out">
                          {r.name}
                        </p>
                      </Link>
                    ))
                  ) : (
                    <p className="text-2xl font-serif text-accent italic text-center">
                      No Result Found... !
                    </p>
                  )}
                </div>
              ) : (
                <div>Search Here</div>
              )}
            </div>
          </motion.div>
        </>
      ) : null}
    </>
  );
};

export default Searchbar;
