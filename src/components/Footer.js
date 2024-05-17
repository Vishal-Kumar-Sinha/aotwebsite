import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LinkedInIcon, Instagramicon, YoutubeIcon } from "@/components/Icons";
import Logo from "@/components/Logo";

import { downloadlinks, quicklinks, admissionlinks, contactlinks } from "@/dictionary/Footerlinks";

const Footer = () => {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <footer className="w-full h-auto bg-gray-100 pt-2 font-medium text-lg">
      <motion.div variants={parent} initial="hidden" whileInView="show">
        <div className="mt-3">
          <div className="flex flex-wrap justify-center">
            <div
              className="absolute flex justify-center gap-10 llg:gap-20 bg-gray-100 px-10 py-2 rounded-3xl"
            >
              <Link
                className="h-fit w-fit rounded-md hover:scale-[1.2] hover:opacity-75 active:scale-[0.8] transition-all ease-in-out duration-300"
                href="/"
              >
                <LinkedInIcon className="w-[28px]" />
              </Link>
              <Link
                className="h-fit w-fit rounded-lg hover:scale-[1.2] hover:opacity-75 active:scale-[0.8] transition-all ease-in-out duration-300"
                href="/"
              >
                <Instagramicon className="w-[30px] " />
              </Link>
              <Link
                className="h-fit w-fit rounded-md hover:scale-[1.2] hover:opacity-75 active:scale-[0.8] transition-all ease-in-out duration-300"
                href="/"
              >
                <YoutubeIcon className="w-[34px] " />
              </Link>
            </div>
            <div className=" bg-[hsl(232,47%,28%)] w-full h-1 mt-[24px] rounded-2xl"></div>
          </div>
        </div>
        <section className="w-full h-full inline-block bg-light footerxll:px-32 footerxll:py-4 p-4 bg-transparent">
          <div className="flex flex-wrap w-full justify-around mt-10 lg:hidden">

            {/**Quick Links */}
            <div className=" py-3 px-2 footerxl:w-[30vw] w-[15vw]">
              <h2 className="text-start font-bold font-serif text-xl p-2 rounded-t-2xl border-b border-black">
                Quick links
              </h2>
              <ul className="text-left" style={{ listStyleType: "none" }}>
                {quicklinks.map((qlink,qindex) => (
                  <Link key={qindex} href={qlink.link} target={qlink.target}>
                  <li className="hover:bg-slate-300 px-2 py-0.5 m-0.5 cursor-pointer font-semibold transition-all duration-200 ease-in-out">
                    {qlink.name}
                  </li>
                </Link>
                ))}
              </ul>
            </div>
            
            {/**Downloads */}
            <div className="py-3 px-2 footerxl:hidden w-[16vw]">
              <h2 className="text-start font-bold font-serif text-xl p-2 rounded-t-2xl border-b border-black">
                Download Section
              </h2>
              <ul className="text-left" style={{ listStyleType: "none" }}>
                {downloadlinks.map((dlink, dindex) => (
                  <Link key={dindex} href={dlink.link} target={dlink.target}>
                  <li className="hover:bg-slate-300 px-2 py-0.5 m-0.5 cursor-pointer font-semibold transition-all duration-200 ease-in-out">
                    {dlink.name}
                  </li>
                </Link>
                ))}
              </ul>
            </div>

            {/**central logo */}
            <div className="py-3 px-2 rounded-2xl justify-self-center">
              <div>
                <Logo />
              </div>
              <div className="text-center cursor-none p-2 mt-3 font-[serif] uppercase text-3xl text-[hsl(232,47%,28%)] font-bold">
                <p>Academy</p>
                <p>Of</p>
                <p>Technology</p>
              </div>
              <div className="mt-1 whitespace-nowrap text-center font-serif text-[15px] leading-tight">
                <p>G.T.Road (Adisaptagram), Aedconagar</p>
                <p>Hooghly-712121 West Bengal, India</p>
              </div>
            </div>
            
            {/**Downloads */}
            <div className="py-3 px-2 footerxl:w-[30vw] footerxll:hidden">
              <h2 className="text-end font-bold font-serif text-xl p-2 rounded-t-2xl border-b border-black">
                Download Section
              </h2>
              <ul className="text-right" style={{ listStyleType: "none" }}>
                {downloadlinks.map((dlink, dindex) => (
                  <Link key={dindex} href={dlink.link} target={dlink.target}>
                  <li className="hover:bg-slate-300 px-2 py-0.5 m-0.5 cursor-pointer font-semibold transition-all duration-200 ease-in-out">
                    {dlink.name}
                  </li>
                </Link>
                ))}
              </ul>
            </div>

            {/**Admission Enquiry */}
            <div className="py-3 px-2 footerxl:w-[45vw] w-[16.6vw]">
              <h2 className="text-right footerxl:text-start font-bold font-serif text-xl p-2 rounded-t-2xl border-b border-black">
                Admission Enquiry
              </h2>
              <ul
                className="text-right footerxl:text-left"
                style={{ listStyleType: "none" }}
              >
                {admissionlinks.map((alink, aindex) => (
                  <Link key={aindex} href={alink.link} target={alink.target}>
                  <li className="hover:bg-slate-300 px-2 py-0.5 m-0.5 cursor-pointer font-semibold transition-all duration-200 ease-in-out">
                    {alink.name}
                  </li>
                </Link>
                ))}
              </ul>
            </div>

            {/**Contacts */}
            <div className="py-3 px-4 footerxl:w-[45vw] w-[15.5vw]">
              <h2 className="text-right footerxl:text-end font-bold font-serif text-xl p-2 rounded-t-2xl border-b border-black">
                Contacts Section
              </h2>
              <ul className="text-right" style={{ listStyleType: "none" }}>
                {contactlinks.map((clink,cindex) => (
                  <Link key={cindex} href={clink.link} target={clink.target}>
                  <li className="hover:bg-slate-300 px-2 py-0.5 my-0.5 cursor-pointer font-semibold transition-all duration-200 ease-in-out">
                    {clink.name}
                  </li>
                </Link>
                ))}
              </ul>
            </div>
          </div>

          {/* max width 1023 view */}
          <div className="flex flex-wrap w-full justify-around mt-10 llg:hidden">
            <div className="py-3 px-5 w-screen rounded-2xl justify-self-center">
              <div>
                <Logo />
              </div>
              <div className="text-center p-2 mt-3 font-[serif] uppercase text-3xl text-[hsl(232,47%,28%)] font-bold">
                <p>Academy</p>
                <p>Of</p>
                <p>Technology</p>
              </div>
              <div className="mt-1 whitespace-nowrap text-center font-serif text-[16px] leading-tight">
                <p>G.T.Road (Adisaptagram), Aedconagar</p>
                <p>Hooghly-712121 West Bengal, India</p>
              </div>
            </div>

            {/**Quick Links */}
            <div className=" py-3 px-4 sm:w-[100vw] w-[45vw]">
              <h2 className="text-start font-bold font-serif text-xl p-2 rounded-t-2xl border-b border-black">
                Quick links
              </h2>
              <ul className="text-left" style={{ listStyleType: "none" }}>
                {quicklinks.map((qlink,qindex) => (
                  <Link key={qindex} href={qlink.link} target={qlink.target}>
                  <li className="hover:bg-slate-300 px-2 py-0.5 m-0.5 cursor-pointer font-semibold transition-all duration-200 ease-in-out">
                    {qlink.name}
                  </li>
                </Link>
                ))}
              </ul>
            </div>
            
            {/**Downloads */}
            <div className="py-3 px-4 sm:w-[100vw] w-[45vw]">
              <h2 className="text-start smm:text-end font-bold font-serif text-xl p-2 rounded-t-2xl border-b border-black">
                Download Section
              </h2>
              <ul
                className="text-left smm:text-right"
                style={{ listStyleType: "none" }}
              >
                {downloadlinks.map((dlink, dindex) => (
                  <Link key={dindex} href={dlink.link} target={dlink.target}>
                  <li className="hover:bg-slate-300 px-2 py-0.5 m-0.5 cursor-pointer font-semibold transition-all duration-200 ease-in-out">
                    {dlink.name}
                  </li>
                </Link>
                ))}
              </ul>
            </div>

            {/**Admission */}
            <div className="py-3 px-4 sm:w-[100vw] w-[45vw]">
              <h2 className="text-start font-bold font-serif text-xl p-2 rounded-t-2xl border-b border-black">
                Admission Enquiry
              </h2>
              <ul className="text-left" style={{ listStyleType: "none" }}>
              {admissionlinks.map((alink, aindex) => (
                  <Link key={aindex} href={alink.link} target={alink.target}>
                  <li className="hover:bg-slate-300 px-2 py-0.5 m-0.5 cursor-pointer font-semibold transition-all duration-200 ease-in-out">
                    {alink.name}
                  </li>
                </Link>
                ))}
              </ul>
            </div>
            
            {/**Contacts */}
            <div className="py-3 px-4 sm:w-[100vw] w-[45vw]">
              <h2 className="text-start smm:text-end font-bold font-serif text-xl p-2 rounded-t-2xl border-b border-black">
                Contacts Section
              </h2>
              <ul
                className="text-left smm:text-right"
                style={{ listStyleType: "none" }}
              >
                {contactlinks.map((clink,cindex) => (
                  <Link key={cindex} href={clink.link} target={clink.target}>
                  <li className="hover:bg-slate-300 px-2 py-0.5 m-0.5 cursor-pointer font-semibold transition-all duration-200 ease-in-out">
                    {clink.name}
                  </li>
                </Link>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center pb-2 font-serif font-semibold">
          <Link
            className="hover:text-gray-500 transition-all duration-200"
            href="/AOT-EBrochure-2021.pdf"
            target="_blank"
          >
            Brochure
          </Link>
          &emsp;|&emsp;<Link href="/career">Job vacancies</Link>
        </div>
        <div
          className="text-center pb-2 font-serif font-semibold px-1"
        >
          &copy; Academy of Technology {new Date().getFullYear()}
          &emsp;-&emsp;All rights reserved
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
