import React, { useState } from "react";
import Link from "next/link";
import { FaAngleUp, FaAngleDown} from "react-icons/fa6";

const Deptlinks = ({ links }) => {
  const [heading, setHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div key={link}>
          <div className="group inline-block xl:hidden">
            {link.submenu === true ? (
              <div>
                <button
                  aria-haspopup="true"
                  aria-controls="menu"
                  className="outline-none focus:outline-none xll:pr-0 mr-5 my-6 rounded-sm flex items-center min-w-32"
                >
                  <span className="pr-1 font-semibold flex-1">{link.name}</span>
                  <span className="h-4 w-4 transform text-sm mt-1 group-hover:-mt-1 group-hover:-rotate-180 transition duration-150 ease-in-out">
                    <FaAngleDown />
                  </span>
                </button>

                <div className="bg-white z-50 border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                  <div className="mb-2">
                    <div className="w-4 h-4 left-3 absolute -mt-2 bg-white rotate-45"></div>
                  </div>
                  {link.sublinks.map((slink) => (
                    <div key={slink} className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                      <li className="text-sm font-semibold my-1.5">
                        <Link href={slink.href} className="hover:text-primary">
                          {slink.name}
                        </Link>
                      </li>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <button
                  aria-haspopup="true"
                  aria-controls="menu"
                  className="outline-none focus:outline-none xll:pr-0 mr-5 my-6 rounded-sm flex items-center min-w-32"
                >
                  <li className="pr-1 font-semibold flex-1">
                    <Link href={link.href} className="hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                </button>
              </div>
            )}
          </div>

          {/* Mobile menus */}
          <div>
            <div className="px-3 text-left xll:hidden group">
              {link.submenu === true ? (
                <div>
                  <h1
                    className="py-7 flex justify-between items-center xll:pr-0 pr-5 group"
                    onClick={() => {
                      heading !== link.name
                        ? setHeading(link.name)
                        : setHeading("");
                    }}
                  >
                    {link.name}
                    <span className="text-xl xll:hidden inline transition-all ease-in-out duration-200">
                      {heading === link.name ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                  </h1>
                  <div className={`${heading === link.name ? "xll:hidden" : "hidden"}`}>
                    {link.sublinks.map((slink) => (
                    <div key={slink}>
                      <div>
                        <li className="py-2 pl-7 font-semibold">
                          <Link href={slink.href}>{slink.name}</Link>
                        </li>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              ) : (
                <div>
                  <li className="py-4 flex justify-between items-center xll:pr-0 pr-5">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Deptlinks;
