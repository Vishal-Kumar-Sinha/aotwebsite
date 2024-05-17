import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../Logo";
import Deptlinks from "./Deptlinks";
import Searchbar from "./Searchbar";
import { FaXmark, FaBars } from "react-icons/fa6";

const Deptnav = ({ links }) => {
  const [open, setOpen] = useState(false);
  const sclick = () => {
    setOpen(false);
  }
  return (
    <motion.nav
      initial={{ scale: 0.7, rotateX: 360, opacity: 0.2 }}
      animate={{
        scale: 1,
        opacity: 1,
        rotateX: 0,
        transition: { ease: "easeOut", duration: 0.6 },
      }}
      className="bg-slate-200 z-40 w-screen fixed"
    >
      <div className="flex items-start font-medium justify-around">
        <div className="z-50 p-2 xll:w-auto w-full flex justify-between">
          <Logo />
          <div className="xll:hidden smmy:hidden pointer-events-none">
            <div className="uppercase font-[serif] text-center pt-2 text-2xl text-[hsl(232,47%,28%)] font-semibold">
              Academy of Technology
            </div>
            <div className=" italic text-right text-sm font-sans text-[hsl(232,47%,28%)] font-normal">
              … translate your vision into reality
            </div>
          </div>
          <div className="text-2xl md:text-2xl flex xs:gap-14 md:gap-10 gap-20 smm:pl-2 pl-6 items-center pr-3 justify-between xll:hidden">
            <Searchbar />
            {/* <FaSun /> */}
            <div onClick={() => setOpen(!open)}>
              {open ? <FaXmark /> : <FaBars />}
            </div>
          </div>
        </div>
        <ul className="xll:flex hidden items-center gap-10">
          <Searchbar />
          <Deptlinks links={links} />
          {/* <FaSun /> */}
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        xll:hidden bg-white z-30 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <Deptlinks sclick={sclick} links={links} />
        </ul>
      </div>
    </motion.nav>
  );
};

export default Deptnav;
