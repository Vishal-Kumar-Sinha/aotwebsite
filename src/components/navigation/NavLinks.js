import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/dictionary/AOTLinks";
import { FaAngleUp, FaAngleDown, FaAngleRight } from "react-icons/fa6";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="group inline-block lg:hidden">
            <button
              aria-haspopup="true"
              aria-controls="menu"
              className="outline-none focus:outline-none llg:pr-0 mr-5 my-6 rounded-sm flex items-center min-w-32"
            >
              <span className="pr-1 font-semibold flex-1">{link.name}</span>
              <span className="h-4 w-4 transform text-sm mt-1 group-hover:-mt-1 group-hover:-rotate-180 transition duration-150 ease-in-out">
                <FaAngleDown />
              </span>
            </button>
            {link.submenu === true ? (
              <ul
                id="menu"
                aria-hidden="true"
                className="bg-white z-50 tail border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
              >
                <div className="mb-2">
                  <div className="w-4 h-4 left-3 absolute -mt-2 bg-white rotate-45"></div>
                </div>
                {link.sublinks.map((mysublinks, indexinner1) => (
                  <>
                    {mysublinks.sub === true ? (
                      <li
                        key={indexinner1}
                        className="rounded-sm relative m-1 nvli head px-3 py-1"
                      >
                        <button
                          aria-haspopup="true"
                          aria-controls="menu-lang"
                          className="w-full text-left nvbtn flex items-center outline-none focus:outline-none head"
                        >
                          <span className="pr-1 flex-1">{mysublinks.Head}</span>
                          <span className="text-sm nvlogo llg:mt-1 llg:ml-2  llg:block hidden duration-150">
                            <FaAngleRight />
                          </span>
                        </button>
                        <ul
                          id="menu-lang"
                          aria-hidden="true"
                          className="bg-white w-[25vw] tail border absolute rounded-sm top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
                        >
                          {mysublinks.sublink.map((slink, i) => (
                            <Link
                              key={i}
                              href={slink.link}
                              target={slink.target}
                            >
                              <li
                                key={slink.name}
                                className="px-3 head py-1 hover:text-primary m-1 text-sm text-gray-600 hover:bg-gray-200"
                              >
                                {slink.name}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <Link href={mysublinks.link} target={mysublinks.target}>
                        <li
                          key={indexinner1}
                          className="rounded-sm m-1 relative hover:text-primary hover:bg-gray-200 head px-3 py-1"
                        >
                          <button
                            aria-haspopup="false"
                            aria-controls="menu-lang"
                            className="w-full text-left  flex pr-1 flex-1 items-center outline-none focus:outline-none head"
                          >
                            {mysublinks.Head}
                          </button>
                        </li>
                      </Link>
                    )}
                  </>
                ))}
              </ul>
            ) : (
              <div className="bg-white z-50 border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                <div className="mb-2">
                  <div className="w-4 h-4 left-3 absolute -mt-2 bg-white rotate-45"></div>
                </div>
                <div className="pt-1">
                  {link.sublinks.map((slink, i) => (
                    <Link key={i} href={slink.link}>
                      <li
                        key={slink.name}
                        className="font-semibold m-1 hover:text-primary px-3 py-1 hover:bg-gray-200"
                      >
                        {slink.name}
                      </li>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile menus */}
          <div>
            <div
              key={link.name}
              className="px-3 text-left llg:hidden z-40 group"
            >
              <h1
                className="py-7 flex justify-between items-center llg:pr-0 pr-5 group"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
                {link.name}
                <span className="text-xl llg:hidden inline transition-all ease-in-out duration-200">
                  {heading === link.name ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </h1>
            </div>
            <div
              className={`${heading === link.name ? "llg:hidden" : "hidden"}`}
            >
              {/* sublinks */}
              {link.submenu === true
                ? link.sublinks.map((slinks) => (
                    <div key={slinks.Head}>
                      {slinks.sub === true ? (
                        <div>
                          <h1
                            onClick={() =>
                              subHeading !== slinks.Head
                                ? setSubHeading(slinks.Head)
                                : setSubHeading("")
                            }
                            className="py-3 pl-7 font-semibold llg:pr-0 pr-5 flex justify-between items-center"
                          >
                            {slinks.Head}

                            <span className="text-xl llg:mt-1 llg:ml-2 inline">
                              {subHeading === slinks.Head ? (
                                <FaAngleUp />
                              ) : (
                                <FaAngleDown />
                              )}
                            </span>
                          </h1>
                          <div
                            className={`${
                              subHeading === slinks.Head
                                ? "llg:hidden"
                                : "hidden"
                            }`}
                          >
                            {slinks.sublink.map((slink, i) => (
                              <Link
                                key={i}
                                href={slink.link}
                                target={slink.target}
                              >
                                <li
                                  key={slink.name}
                                  className="py-2 pl-14 pr-4"
                                >
                                  {slink.name}
                                </li>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          onClick={() =>
                            subHeading !== slinks.Head
                              ? setSubHeading(slinks.Head)
                              : setSubHeading("")
                          }
                          href={slinks.link}
                          target={slinks.target}
                        >
                          <h1 className="py-3 pl-7 font-semibold llg:pr-0 pr-5 flex justify-between items-center">
                            {slinks.Head}
                          </h1>
                        </Link>
                      )}
                    </div>
                  ))
                : link.sublinks.map((slink) => (
                    <Link key={slink.name} href={slink.link}>
                      <li className="py-2 pl-7 font-semibold">{slink.name}</li>
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
