import React, { useState } from "react";
import Logo from "../Logo";
import Deptlinks from "./Deptlinks";
import { FaXmark, FaBars, FaSun, FaMagnifyingGlass } from "react-icons/fa6";

const Deptnav = ({links}) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-slate-400/30 z-40 w-full">
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
          <div className=" p-1.5 rounded-[50%] content-center cursor-pointer transition-all ease-in-out duration-150 hover:scale-110 active:scale-75"><FaMagnifyingGlass /></div>
            <FaSun />
            <div onClick={() => setOpen(!open)}>
              {open ? <FaXmark /> : <FaBars />}
            </div>
          </div>
        </div>
        <ul className="xll:flex hidden items-center gap-10">
        <div className=" p-1.5 rounded-[50%] content-center cursor-pointer transition-all ease-in-out duration-150 hover:scale-110 active:scale-75"><FaMagnifyingGlass /></div>
          <Deptlinks links={links} />
          <FaSun />
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        xll:hidden bg-white z-30 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <Deptlinks links={links} />
        </ul>
      </div>
    </nav>
  );
};

export default Deptnav;