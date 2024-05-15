import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import { FaXmark, FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import Searchbar from "./Searchbar";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      initial={{ scale: 0.7, rotateX: 360, opacity: 0.2 }}
      animate={{
        scale: 1,
        opacity: 1,
        rotateX: 0,
        transition: { ease: "easeOut", duration: 0.6 },
      }}
      className="bg-slate-300 z-40 justify-center fixed w-screen"
    >
      <div className="flex items-start font-medium justify-around  ">
        <div className="z-50 p-2 llg:w-auto w-full flex justify-between">
          <Logo />
          <div className="llg:hidden smmy:hidden pointer-events-none">
            <div className="uppercase font-[serif] text-center pt-2 text-2xl text-[hsl(232,47%,28%)] font-semibold">
              Academy of Technology
            </div>
            <div className=" italic text-right text-sm font-sans text-[hsl(232,47%,28%)] font-normal">
              … translate your vision into reality
            </div>
          </div>
          <div className="text-2xl md:text-2xl flex xs:gap-14 md:gap-10 gap-20 smm:pl-2 pl-6 items-center pr-3 justify-between llg:hidden">
            <Searchbar />
            {/* <FaSun /> */}
            <div onClick={() => setOpen(!open)}>
              {open ? <FaXmark /> : <FaBars />}
            </div>
          </div>
        </div>
        <div className="xl:hidden pointer-events-none">
          <div className="uppercase font-[serif] text-center pt-2 text-3xl text-[hsl(232,47%,28%)] font-semibold">
            Academy of Technology
          </div>
          <div className=" italic text-right text-sm font-sans text-[hsl(232,47%,28%)] font-normal">
            … translate your vision into reality
          </div>
        </div>
        <ul className="llg:flex hidden items-center gap-10">
          <Searchbar />
          <NavLinks />
          {/* <FaSun /> */}
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        llg:hidden bg-white z-30 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
