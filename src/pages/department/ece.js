import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap, FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
//import components
import Layout from "@/components/Layout";
import Deptnav from "@/components/navigation/Deptnav";
import AnimatedText from "@/components/AnimatedText";
import AnimatedTextWord from "@/components/AnimatedTextWord";
import Banner from "@/components/banner/Banner";
import Facultycard from "@/components/Facultycard";
import News from "@/components/banner/News";
import Slidertext3d from "@/components/banner/Slidertext3d";
import { AotLogo } from "@/components/Icons";
import Companyslider from "@/components/banner/Companyslider";
//import dictionaries
import { ecebanner } from "@/dictionary/Bannerlist";
import {
  ecelinks,
  ecephotos,
  ecelabs,
  eceevents,
  ecefaculty,
  ecestaff,
  companyphotos
} from "@/dictionary/ECELinks";
import { newslinks } from "@/dictionary/Newslinks";

//import images
import placement1 from "@/assets/images/placement.png";
import research1 from "@/assets/images/research.jpg";

const Ece = () => {
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };
  const childitem = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };
  const childitem2 = {
    hidden: { opacity: 0, scale: 0.75, rotateY: 180 },
    show: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };
  const childitem3 = {
    hidden: { opacity: 0, scale: 0.25, rotateY: 180 },
    show: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        ease: "easeOut",
        delayChildren: 0.2,
        staggerChildren: 0.25,
        duration: 1,
      },
    },
  };
  const childitem4 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1.2,
      },
    },
  };
  return (
    <>
      <Head>
        <title>AOT | ECE</title>
        <meta name="description" content="Generated by me" />
      </Head>
      <Deptnav links={ecelinks} />
      <main className="flex w-full flex-col items-center justify-center z-0 smmy:pt-[4.2rem] xl:pt-[4.7rem] xll:pt-[4.5rem]">
        <Banner sliderItems={ecebanner} />
        <Layout className="!pt-8">
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            id="academics"
            className="flex flex-wrap rounded-2xl pt-20 px-4 w-full "
          >
            <div>
              <motion.p
                variants={childitem}
                className="pb-4 font-sans font-medium text-lg"
              >
                &emsp;&emsp;&emsp;Since 2003, we aim to deliver high-quality
                professional education in the field of Computer Science. Our
                academic program offers various specialisations in Computer
                Science and Engineering. We focus on enabling students to apply
                their education effectively to solve real-world problems.
                Additionally, we endeavor to establish strong connections with
                leading industries on a global scale.
              </motion.p>
            </div>
            <AnimatedText
              text="Academics"
              className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <motion.div variants={childitem}>
              <AnimatedText
                text="Academic Programmes"
                className="!text-2xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <motion.li
                variants={childitem}
                className="pb-4 font-serif font-bold text-lg italic ml-4"
              >
                &nbsp;4 years B.Tech programme in Computer Science &
                Engineering.
              </motion.li>
              <AnimatedText
                text="HOD Details"
                className="!text-2xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div className="flex gap-4 ml-3 my-1">
                <motion.div
                  variants={childitem}
                  className="bg-[hsl(232,47%,28%)] h-fit w-fit p-1 rounded-[50%]"
                >
                  <FaGraduationCap className="text-2xl text-white" />
                </motion.div>
                <motion.p
                  variants={childitem}
                  className="text-xl font-serif align-middle font-semibold text-[hsl(232,47%,28%)]"
                >
                  Prof. Prosenjit Das
                </motion.p>
              </div>
              <div className="flex gap-4 ml-3 my-1">
                <motion.div
                  variants={childitem}
                  className="bg-[hsl(232,47%,28%)] h-fit w-fit p-1.5 rounded-[50%]"
                >
                  <FaEnvelope className="text-xl text-white" />
                </motion.div>
                <motion.a
                  variants={childitem}
                  href="mailto:hod_ece@aot.edu.in"
                  target="_blank"
                  className="text-xl font-serif align-middle font-semibold text-[hsl(232,47%,28%)]"
                >
                  hod_ece@aot.edu.in
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            id="infrastructure"
          >
            <div className="flex pt-[3.5rem] flex-wrap rounded-2xl px-4 w-full">
              <AnimatedText
                text="Infrastructure"
                className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div>
                <div className="pb-1 font-sans font-medium text-lg">
                  <motion.span
                    variants={childitem}
                    className=" font-bold italic"
                  >
                    Overview of Departmental Infrastructure
                  </motion.span>
                  <div className="px-6 pt-2 ml-10 w-fit">
                    <ul style={{ listStyleType: "disc" }}>
                      <motion.li variants={childitem}>
                        Class / Tutorial Rooms/ Seminar Rooms.
                      </motion.li>
                      <motion.li variants={childitem}>
                        HOD’s Room & Departmental Office.
                      </motion.li>
                      <motion.li variants={childitem}>Faculty Rooms.</motion.li>
                      <motion.li variants={childitem}>
                        Amenities Area.
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <motion.span
                variants={childitem}
                className="px-4 font-bold italic text-lg"
              >
                Departmental Laboratories:
              </motion.span>
            </div>
            <div className="flex flex-wrap rounded-2xl px-4 w-full justify-center">
              <motion.div
                variants={childitem2}
                className="rounded-2xl w-full my-4 shadow-news-shadow xss:overflow-x-scroll"
              >
                <table className="table rounded-2xl w-full text-center">
                  <thead className="border-b llg:text-2xl rounded-t-2xl shadow-inside-shadow">
                    <tr className="rounded-2xl bg-blue-950/20">
                      <th
                        scope="col"
                        className="px-2 py-4 rounded-tl-2xl shadow-inside-shadow border-r"
                      >
                        Name Of The Laboratory
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-4 rounded-tr-2xl shadow-inside-shadow border-r"
                      >
                        Computers With Configuration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ecelabs.map((lab, index) => (
                      <tr key={index} className="border-b">
                        <td className=" px-2 font-bold py-4 border-r">
                          {lab.title}
                        </td>
                        <td className=" px-3 py-4 border-r">{lab.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
              <motion.div variants={childitem} className="mb-8 italic">
                Online Backup from Emerson-Libert UPS. Total Capacity 160 KVA
                (Range 250VA to 20KVA)
              </motion.div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-8 mx-4 w-full">
              <motion.div
                variants={parent}
                initial="hidden"
                whileInView="show"
                className="pb-1 font-sans font-medium text-lg "
              >
                <motion.span variants={childitem} className=" font-bold italic">
                  Overview of Servers:
                </motion.span>
                <div className="px-6 pt-2 ml-5 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <motion.li variants={childitem}>
                      Sun Ultrasparc IIIi with Solaris 10 & Java ES.
                    </motion.li>
                    <motion.li variants={childitem}>
                      IBM X510 with AIX 5L V 5.3.
                    </motion.li>
                    <motion.li variants={childitem}>
                      IBM X225-Intel Xeon-2 nos.
                    </motion.li>
                    <motion.li variants={childitem}>
                      IBM X226 Intel Xeon(Mail & proxy).
                    </motion.li>
                    <motion.li variants={childitem}>
                      IBM x3400M3 Intel Xeon 5506 (Quad Core).
                    </motion.li>
                  </ul>
                </div>
                <motion.p
                  variants={childitem}
                  className="mt-4 font-bold italic"
                >
                  Overview of Compilers:
                </motion.p>
                <div className="px-6 pt-1 ml-5 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <motion.li variants={childitem}>
                      Borland Turbo C++.
                    </motion.li>
                    <motion.li variants={childitem}>Turbo Prolog.</motion.li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                variants={parent}
                initial="hidden"
                whileInView="show"
                className="pb-1 font-sans font-medium text-lg "
              >
                <motion.span variants={childitem} className=" font-bold italic">
                  Overview of System Softwares:
                </motion.span>
                <div className="px-6 pt-2 ml-5 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <motion.li variants={childitem}>
                      Microsoft® Volume License Agreement.
                    </motion.li>
                    <motion.li variants={childitem}>
                      DsktpCampus ALNG LicSAPk MVL.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Visual Studio Pro ALNG LicSAPk MVL.
                    </motion.li>
                    <motion.li variants={childitem}>
                      WinSvrStd ALNG LicSAPk MVL.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Redhat Linux Enterprise Ed.R.
                    </motion.li>
                    <motion.li variants={childitem}>Fedora 18 / 21.</motion.li>
                    <motion.li variants={childitem}>Open Suse 12.2.</motion.li>
                  </ul>
                </div>
                <motion.p
                  variants={childitem}
                  className="mt-2 font-bold italic"
                >
                  Antivirus Software:
                </motion.p>
                <div className="px-6 pt-1 ml-5 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <motion.li variants={childitem}>
                      Kaspersky Endpoint Security 8.
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={childitem}
              className="mt-4 px-4 font-bold italic text-lg"
            >
              Licensed Application Softwares:
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-8 mx-4 w-full">
              <motion.div
                variants={parent}
                initial="hidden"
                whileInView="show"
                className="font-sans font-medium text-lg "
              >
                <div className="px-6 pt-2 ml-5 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <motion.li variants={childitem}>Oracle 10g.</motion.li>
                    <motion.li variants={childitem}>Matlab R2011a.</motion.li>
                    <motion.li variants={childitem}>JAVA 2.0 JDK.</motion.li>
                    <motion.li variants={childitem}>
                      CS4 Web Premium Under CLP License(Cumulative Licensing
                      Programme).
                    </motion.li>
                    <motion.li variants={childitem}>Dreamweaver CS5.</motion.li>
                    <motion.li variants={childitem}>
                      Flash Catalyst CS5.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Flash Professional CS5.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Flash Builder 4 Standard.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Photoshop CS5 Extended.
                    </motion.li>
                    <motion.li variants={childitem}>Illustrator CS5.</motion.li>
                    <motion.li variants={childitem}>Acrobat 9 Pro.</motion.li>
                    <motion.li variants={childitem}>Fireworks CS5.</motion.li>
                    <motion.li variants={childitem}>Contribute CS5.</motion.li>
                    <motion.li variants={childitem}>Bridge CS5.</motion.li>
                    <motion.li variants={childitem}>
                      Device Central CS5.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Integrates with CS Live online services.
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                variants={parent}
                initial="hidden"
                whileInView="show"
                className="pb-2 font-sans font-medium text-lg "
              >
                <div className="px-6 md:-mt-6 mmd:pt-2 ml-5 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <motion.li variants={childitem}>
                      Adobe Premier Pro CS4 Under CLP License (Cumulative
                      Licensing Programme).
                    </motion.li>
                    <motion.li variants={childitem}>Tally 9 ERP.</motion.li>
                    <motion.li variants={childitem}>
                      Autodesk Education Suite for Mechanical Engineering 2011.
                    </motion.li>
                    <motion.li variants={childitem}>
                      AutoCAD® Electrical.
                    </motion.li>
                    <motion.li variants={childitem}>
                      AutoCAD® Inventor® Professional Suite.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Autodesk® Showcase®.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Autodesk® SketchBook® Pro.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Autodesk® 3ds Max® Design.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Visual Studio .Net.
                    </motion.li>
                    <motion.li variants={childitem}>E-TAP 5.5.5.</motion.li>
                    <motion.li variants={childitem}>P-SIM.</motion.li>
                    <motion.li variants={childitem}>MIPOWER.</motion.li>
                    <motion.li variants={childitem}>XlinksISE.</motion.li>
                    <motion.li variants={childitem}>EAD 85 Ver. 2.</motion.li>
                    <motion.li variants={childitem}>
                      CACM ISIL Software (Software for Integrated Learning
                      Environment) 65 user.
                    </motion.li>
                    <motion.li variants={childitem}>
                      Pro/ E U Plus Lab Bundle Software.
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            </div>
            <div className="flex flex-wrap rounded-2xl px-4 w-full ">
              <motion.div
                variants={childitem}
                className="mt-2 font-bold italic text-lg"
              >
                Network facilities:
              </motion.div>
              <div>
                <motion.p
                  variants={childitem}
                  className="py-1 font-sans font-medium text-lg"
                >
                  &emsp;&emsp;&emsp;Wi-fi campus with 64 MBPS 1:1 leased line
                  internet connectivity. Wired LAN connection through CISCO
                  Catalyst within whole campus including all computer
                  laboratories and departments using fiber optical cable as
                  backbone. Outlook LAN Messenger for internal communication in
                  college campus.
                </motion.p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            id="achievements"
            className="pt-[3.5rem]"
          >
            <div className="flex flex-wrap rounded-2xl px-4 w-full ">
              <AnimatedText
                text="Achievements"
                className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)]"
              />
              <div>
                <motion.p
                  variants={childitem}
                  className="pb-1 font-sans font-medium text-lg"
                >
                  &emsp;&emsp;&emsp;The Comprehensive Curriculum at Academy of
                  Technology creates space for various activities beyond the
                  university prescribed syllabus. AOT organizes several
                  seminars, industrial visits, invited lectures and
                  national/international conferences on a regular basis to
                  enhance the academic knowledge and professional competence of
                  students. Renowned academicians and experts from top corporate
                  firms visit the college to speak to the students about recent
                  advancements in technology. Arrangement is also made to
                  broadcast webinars relevant to the academic interests of the
                  students.
                </motion.p>
                <AnimatedTextWord
                  text="&ldquo;Imagine Innovate Inspire - AOT.&rdquo;"
                  className="text-3xl text-[hsl(232,47%,28%)] inline text-center font-bold font-serif italic pt-3"
                />
              </div>
            </div>
            <motion.div variants={childitem}>
              <Slidertext3d props={eceevents} />
            </motion.div>
          </motion.div>
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            id="placements"
            className="pt-[3.5rem]"
          >
            <AnimatedText
              text="Placements"
              className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div className="grid grid-cols-2 lg:grid-cols-1 gxl:gap-1 gap-8 mx-4">
              <motion.div
                variants={childitem2}
                className="p-3 flex gxl:justify-evenly justify-end llg:hidden"
              >
                <div className="relative  ">
                  <div className="absolute bg-yellow-500/30 sm:left-8 mmd:-left-10 top-8 rounded-t-[50%] opacity-70 filter blur-xl h-[46vh] w-[50vw] "></div>
                  <div>
                    <Image
                      className="w-fit h-[50vh] bg-transparent mix-blend-multiply "
                      src={placement1}
                      alt=""
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div variants={childitem3} className="relative p-3">
                <div className="absolute top-0 xs:hidden smmy:left-[5rem] left-[45vw] llg:left-[5rem] w-60 h-60 bg-purple-300/60 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div className="absolute top-0 xs:hidden smmy:right-[5rem] right-[40vw] llg:right-[5rem] w-60 h-60 bg-yellow-300/60 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div className="absolute top-28 xs:hidden smmy:left-44 left-[40vw] llg:left-44 w-60 h-60 bg-pink-300/60 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div>
                  <motion.div variants={childitem} className="">
                    <AnimatedTextWord
                      text="&ldquo;Focus&emsp;Diligence&emsp;Consistency&rdquo;"
                      className="text-3xl sm:text-2xl sm:pb-2 text-accent inline text-center font-bold font-serif italic pt-3"
                    />
                  </motion.div>
                  <div>
                    <div className="flex gap-4 my-3">
                      <motion.div
                        variants={childitem}
                        className="bg-[hsl(232,47%,28%)] h-fit w-fit p-1.5 rounded-[50%]"
                      >
                        <FaGraduationCap className="text-3xl sm:text-2xl text-white" />
                      </motion.div>
                      <motion.p
                        variants={childitem}
                        className="text-2xl sm:text-xl font-serif p-1 font-[550] text-[hsl(232,47%,28%)]"
                      >
                        <span className="text-[32px]  sm:text-[28px] font-bold font-serif">
                          45+&nbsp;
                        </span>
                        Top Companies
                      </motion.p>
                    </div>
                    <div className="flex gap-4 my-3">
                      <motion.div
                        variants={childitem}
                        className="bg-[hsl(232,47%,28%)] h-fit w-fit p-1.5 rounded-[50%]"
                      >
                        <FaGraduationCap className="text-3xl sm:text-2xl text-white" />
                      </motion.div>
                      <motion.p
                        variants={childitem}
                        className="text-2xl sm:text-xl font-serif p-1 font-[550] text-[hsl(232,47%,28%)]"
                      >
                        <span className="text-[32px]  sm:text-[28px] font-bold font-serif">
                          520+&nbsp;
                        </span>
                        Job Offers
                      </motion.p>
                    </div>
                    <div className="flex gap-4 my-3">
                      <motion.div
                        variants={childitem}
                        className="bg-[hsl(232,47%,28%)] h-fit w-fit p-1.5 rounded-[50%]"
                      >
                        <FaGraduationCap className="text-3xl sm:text-2xl text-white" />
                      </motion.div>
                      <motion.p
                        variants={childitem}
                        className="text-2xl sm:text-xl font-serif p-1 font-[550] text-[hsl(232,47%,28%)]"
                      >
                        <span className="text-[32px] sm:text-[28px] font-bold font-serif">
                          Rs.63 Lakhs&nbsp;
                        </span>
                        Highest Salary
                      </motion.p>
                    </div>
                    <div className="flex gap-4 my-3">
                      <motion.div
                        variants={childitem}
                        className="bg-[hsl(232,47%,28%)] h-fit w-fit p-1.5 rounded-[50%]"
                      >
                        <FaGraduationCap className="text-3xl sm:text-2xl text-white" />
                      </motion.div>
                      <motion.p
                        variants={childitem}
                        className="text-2xl sm:text-xl font-serif p-1 font-[550] text-[hsl(232,47%,28%)]"
                      >
                        <span className="text-[32px] sm:text-[28px] font-bold font-serif">
                          Rs.8 Lakhs&nbsp;
                        </span>
                        average CTC
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={childitem3}
                className="p-3 flex gxl:justify-evenly justify-end lg:hidden"
              >
                <div className="relative  ">
                  <div className="absolute bg-yellow-500/30 left-8 top-8 rounded-t-[50%] opacity-70 filter blur-xl h-[46vh] w-[46vh]"></div>
                  <div>
                    <Image
                      className="w-fit h-[50vh] bg-transparent mix-blend-multiply "
                      src={placement1}
                      alt=""
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="p-2 w-full">
              <AnimatedText
                text="Our Recruiters"
                className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <motion.div variants={childitem}>
                <Companyslider props={companyphotos} />
              </motion.div>
            </div>
            <div className="mt-1 flex flex-wrap">
              <div className="bg-[hsl(232,47%,28%)] w-full h-1 mt-[18px] rounded-2xl"></div>
              <Link
                href="/placements"
                className="absolute bg-gray-100 px-3 py-2 w-fit rounded-3xl text-center font-bold sm:left-[47%] left-[75%] hover:shadow-inside-shadow hover:scale-90 active:scale-110 transition-all duration-300"
              >
                Know More
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            id="newsletter"
            className="pt-[3.9rem]"
          >
            <AnimatedText
              text="News & Events"
              className="!text-4xl mb-2 text-center font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div className="my-3">
              <motion.p variants={childitem}>
                Quis exercitation irure laborum non proident. Duis non culpa ex
                adipisicing ullamco aute dolore culpa. Consectetur reprehenderit
                fugiat cupidatat proident do sunt tempor consectetur. Eu eiusmod
                id minim pariatur commodo fugiat Lorem proident. Quis
                exercitation irure laborum non proident. Duis non culpa ex
                adipisicing ullamco aute dolore culpa. Consectetur reprehenderit
                fugiat cupidatat proident do sunt tempor consectetur. Eu eiusmod
                id minim pariatur commodo fugiat Lorem proident.
              </motion.p>
              <motion.p variants={childitem}>
                Quis exercitation irure laborum non proident. Duis non culpa ex
                adipisicing ullamco aute dolore culpa. Consectetur reprehenderit
                fugiat cupidatat proident do sunt tempor consectetur. Eu eiusmod
                id minim pariatur commodo fugiat Lorem proident.
              </motion.p>
              <AnimatedTextWord
                text="&ldquo;Imagine Innovate Inspire - AOT.&rdquo;"
                className="text-3xl text-[hsl(232,47%,28%)] inline text-center font-bold font-serif italic pt-3"
              />
            </div>
            <motion.div variants={childitem3} className="my-2">
              <News props={newslinks} newsview="/department/ecenewsview" />
            </motion.div>
          </motion.div>
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            id="activities"
            className="pt-[3.9rem]"
          >
            <div className="flex flex-wrap rounded-2xl px-4 w-full ">
              <AnimatedText
                text="Student Activities"
                className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)]"
              />
              <div>
                <motion.p
                  variants={childitem}
                  className="pb-1 font-sans font-medium text-lg"
                >
                  &emsp;&emsp;&emsp;The Comprehensive Curriculum at Academy of
                  Technology creates space for various activities beyond the
                  university prescribed syllabus. AOT organizes several
                  seminars, industrial visits, invited lectures and
                  national/international conferences on a regular basis to
                  enhance the academic knowledge and professional competence of
                  students. Renowned academicians and experts from top corporate
                  firms visit the college to speak to the students about recent
                  advancements in technology. Arrangement is also made to
                  broadcast webinars relevant to the academic interests of the
                  students.
                </motion.p>
              </div>
            </div>
            <motion.div variants={childitem3}>
              <Slidertext3d props={ecephotos} />
            </motion.div>
          </motion.div>
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            id="faculty"
            className="flex flex-wrap rounded-2xl pt-[3.5rem] px-4 w-full justify-center"
          >
            <AnimatedText
              text="Our Faculty"
              className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              className="mt-4 p-3 overflow-y-auto max-h-[75vh] scrlbr "
            >
              <div className="grid grid-cols-2 md:grid-cols-1 gap-6 w-full scrlbr">
                {ecefaculty.map((faculty, index) => (
                  <motion.div
                    variants={childitem3}
                    initial="hidden"
                    whileInView="show"
                    key={index}
                  >
                    <Facultycard props={faculty} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            id="staff"
            className="flex flex-wrap rounded-2xl pt-[3.5rem] px-4 w-full justify-center"
          >
            <AnimatedText
              text="Our Staffs"
              className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <motion.div
              variants={parent}
              initial="hidden"
              whileInView="show"
              className="mt-4 p-3 overflow-y-auto max-h-[75vh] scrlbr"
            >
              <div className="grid grid-cols-2 md:grid-cols-1 gap-6 w-full ">
                {ecestaff.map((staff, index) => (
                  <motion.div
                    variants={childitem3}
                    initial="hidden"
                    whileInView="show"
                    key={index}
                  >
                    <Facultycard props={staff} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={parent}
            initial="hidden"
            whileInView="show"
            id="research"
            className="pt-[3.5rem]"
          >
            {/**start */}
            <AnimatedText
              text="Research"
              className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)]"
            />
            <div className="flex flex-wrap mt-4 w-full justify-center items-center">
              <motion.div
                variants={childitem3}
                className="relative xll:w-2/5 rounded-2xl shadow-news-shadow xl:h-[50vh] h-[60vh] xl:w-4/5"
              >
                <div className="absolute font-extrabold  text-[28px] ml-2 top-1/4 text-white z-20">
                  <motion.div
                    variants={childitem}
                    className="left-0 flex w-fit p-2 rounded-2xl bg-white/40 backdrop-blur-md"
                  >
                    <AotLogo />
                  </motion.div>
                  <motion.p variants={childitem} className="my-3">
                    Innovative
                  </motion.p>
                  <motion.p variants={childitem} className="my-3">
                    Transformative
                  </motion.p>
                  <motion.p variants={childitem} className="my-3">
                    Holistic
                  </motion.p>
                </div>
                <Image
                  src={research1}
                  alt=""
                  className="absolute bg-cover -z-0 w-full xl:h-[50vh] h-[60vh] rounded-2xl shadow-news-shadow "
                />
              </motion.div>
              <motion.div
                variants={childitem3}
                className="p-2 font-sans xll:w-[55%] font-medium text-justify text-lg xll:ml-5 xl:mx-4 lg:mx-3"
              >
                &emsp;&emsp;&emsp;Apart from conducting high quality, innovative
                and continually updated course curriculum, the department of
                Computer Science & Engineering is engaged in research in
                frontier areas through establishment of research groups.
                Research interests include Algorithms & Theory of Computation,
                Artificial Intelligence, Bioinformatics, Cloud Computing,
                Database & Data Mining, Data Analytics, Machine Learning, Human
                Computer Interaction, Information & Network Security, Internet
                Technology, Image Processing, Mobile Computing, Pattern
                Recognition, Program Analysis and Testing, Parallel &
                Distributed Computing, Real Time Systems, Service-Oriented
                Architecture, Soft Computing, Software Engineering, Wireless
                Sensor Networks. With a view to provide the best exposure to the
                learners, AOT actively organizes a number of International
                Conferences, Student Research Symposium, Industry Symposium,
                Innovative Student Project Contests, Tech Fest along with
                imparting student chapter such as IEEE Chapter, etc.
              </motion.div>
            </div>

            {/**end */}
            <motion.div variants={childitem3} className="mt-4">
              <Slidertext3d props={ecephotos} />
            </motion.div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
};
export default Ece;
