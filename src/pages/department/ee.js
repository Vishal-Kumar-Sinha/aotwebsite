import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap, FaEnvelope } from "react-icons/fa6";
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
//import dictionaries
import { eebanner } from "@/dictionary/Bannerlist";
import {
  eelinks,
  eephotos,
  eelabs,
  eeevents,
  eefaculty,
  eestaff,
} from "@/dictionary/EELinks";
import { newslinks } from "@/dictionary/Newslinks";

//import images
import placement1 from "@/assets/images/placement.png";
import research1 from "@/assets/images/research.jpg";
import a1 from "@/assets/images/accreditation/capgemini.png";
import a2 from "@/assets/images/accreditation/cisco.png";
import a3 from "@/assets/images/accreditation/cyient.png";
import a4 from "@/assets/images/accreditation/google.png";
import a5 from "@/assets/images/accreditation/tcs.png";
import a6 from "@/assets/images/accreditation/techmahindra.png";
import a7 from "@/assets/images/accreditation/wipro.png";

const ee = () => {
  return (
    <>
      <Head>
        <title>AOT | EE</title>
        <meta name="description" content="Generated by me" />
      </Head>
      <Deptnav links={eelinks} />
      <main className="flex w-full flex-col items-center justify-center z-0 smmy:pt-[4.2rem] xl:pt-[4.7rem] xll:pt-[4.5rem]">
        <Banner sliderItems={eebanner} />
        <Layout className="!pt-8">
          <div
            id="academics"
            className="flex flex-wrap rounded-2xl pt-20 px-4 w-full "
          >
            <div>
              <p className="pb-4 font-sans font-medium text-lg">
                &emsp;&emsp;&emsp;Since 2003, we aim to deliver high-quality
                professional education in the field of Computer Science. Our
                academic program offers various specialisations in Computer
                Science and Engineering. We focus on enabling students to apply
                their education effectively to solve real-world problems.
                Additionally, we endeavor to establish strong connections with
                leading industries on a global scale.
              </p>
            </div>
            <AnimatedText
              text="Academics"
              className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div>
              <AnimatedText
                text="Academic Programmes"
                className="!text-2xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <li className="pb-4 font-serif font-bold text-lg italic ml-4">
                &nbsp;4 years B.Tech programme in Computer Science &
                Engineering.
              </li>
              <AnimatedText
                text="HOD Details"
                className="!text-2xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div className="flex gap-4 ml-3 my-1">
                <div className="bg-[hsl(232,47%,28%)] h-fit w-fit p-1 rounded-[50%]">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <p className="text-xl font-serif align-middle font-semibold text-[hsl(232,47%,28%)]">
                  Prof. Prosenjit Das
                </p>
              </div>
              <div className="flex gap-4 ml-3 my-1">
                <div className="bg-[hsl(232,47%,28%)] h-fit w-fit p-1.5 rounded-[50%]">
                  <FaEnvelope className="text-xl text-white" />
                </div>
                <Link
                  href="mailto:hod_ee@aot.edu.in"
                  target="_blank"
                  className="text-xl font-serif align-middle font-semibold text-[hsl(232,47%,28%)]"
                >
                  hod_ee@aot.edu.in
                </Link>
              </div>
            </div>
          </div>
          <div id="infrastructure">
            <div className="flex pt-[3.5rem] flex-wrap rounded-2xl px-4 w-full">
              <AnimatedText
                text="Infrastructure"
                className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div>
                <div className="pb-1 font-sans font-medium text-lg">
                  <span className=" font-bold italic">
                    Overview of Departmental Infrastructure
                  </span>
                  <div className="px-6 pt-2 ml-10 w-fit">
                    <ul style={{ listStyleType: "disc" }}>
                      <li>Class / Tutorial Rooms/ Seminar Rooms.</li>
                      <li>HOD’s Room & Departmental Office.</li>
                      <li>Faculty Rooms.</li>
                      <li>Amenities Area.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="px-4 font-bold italic text-lg">
                Departmental Laboratories:
              </span>
            </div>
            <div className="flex flex-wrap rounded-2xl px-4 w-full justify-center">
              <div className="rounded-2xl w-full my-4 shadow-news-shadow xss:overflow-x-scroll">
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
                    {eelabs.map((lab, index) => (
                      <tr key={index} className="border-b">
                        <td className=" px-2 font-bold py-4 border-r">
                          {lab.title}
                        </td>
                        <td className=" px-3 py-4 border-r">{lab.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mb-8 italic">
                Online Backup from Emerson-Libert UPS. Total Capacity 160 KVA
                (Range 250VA to 20KVA)
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-8 mx-4 w-full">
              <div className="pb-1 font-sans font-medium text-lg ">
                <span className=" font-bold italic">Overview of Servers:</span>
                <div className="px-6 pt-2 ml-5 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Sun Ultrasparc IIIi with Solaris 10 & Java ES.</li>
                    <li>IBM X510 with AIX 5L V 5.3.</li>
                    <li>IBM X225-Intel Xeon-2 nos.</li>
                    <li>IBM X226 Intel Xeon(Mail & proxy).</li>
                    <li>IBM x3400M3 Intel Xeon 5506 (Quad Core).</li>
                  </ul>
                </div>
                <p className="mt-4 font-bold italic">Overview of Compilers:</p>
                <div className="px-6 pt-1 ml-5 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Borland Turbo C++.</li>
                    <li>Turbo Prolog.</li>
                  </ul>
                </div>
              </div>
              <div className="pb-1 font-sans font-medium text-lg ">
                <span className=" font-bold italic">
                  Overview of System Softwares:
                </span>
                <div className="px-6 pt-2 ml-5 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Microsoft® Volume License Agreement.</li>
                    <li>DsktpCampus ALNG LicSAPk MVL.</li>
                    <li>Visual Studio Pro ALNG LicSAPk MVL.</li>
                    <li>WinSvrStd ALNG LicSAPk MVL.</li>
                    <li>Redhat Linux Enterprise Ed.R.</li>
                    <li>Fedora 18 / 21.</li>
                    <li>Open Suse 12.2.</li>
                  </ul>
                </div>
                <p className="mt-2 font-bold italic">Antivirus Software:</p>
                <div className="px-6 pt-1 ml-5 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Kaspersky Endpoint Security 8.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4 px-4 font-bold italic text-lg">
              Licensed Application Softwares:
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-8 mx-4 w-full">
              <div className="font-sans font-medium text-lg ">
                <div className="px-6 pt-2 ml-5 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Oracle 10g.</li>
                    <li>Matlab R2011a.</li>
                    <li>JAVA 2.0 JDK.</li>
                    <li>
                      CS4 Web Premium Under CLP License(Cumulative Licensing
                      Programme).
                    </li>
                    <li>Dreamweaver CS5.</li>
                    <li>Flash Catalyst CS5.</li>
                    <li>Flash Professional CS5.</li>
                    <li>Flash Builder 4 Standard.</li>
                    <li>Photoshop CS5 Extended.</li>
                    <li>Illustrator CS5.</li>
                    <li>Acrobat 9 Pro.</li>
                    <li>Fireworks CS5.</li>
                    <li>Contribute CS5.</li>
                    <li>Bridge CS5.</li>
                    <li>Device Central CS5.</li>
                    <li>Integrates with CS Live online services.</li>
                  </ul>
                </div>
              </div>
              <div className="pb-2 font-sans font-medium text-lg ">
                <div className="px-6 md:-mt-6 mmd:pt-2 ml-5 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>
                      Adobe Premier Pro CS4 Under CLP License (Cumulative
                      Licensing Programme).
                    </li>
                    <li>Tally 9 ERP.</li>
                    <li>
                      Autodesk Education Suite for Mechanical Engineering 2011.
                    </li>
                    <li>AutoCAD® Electrical.</li>
                    <li>AutoCAD® Inventor® Professional Suite.</li>
                    <li>Autodesk® Showcase®.</li>
                    <li>Autodesk® SketchBook® Pro.</li>
                    <li>Autodesk® 3ds Max® Design.</li>
                    <li>Visual Studio .Net.</li>
                    <li>E-TAP 5.5.5.</li>
                    <li>P-SIM.</li>
                    <li>MIPOWER.</li>
                    <li>XlinksISE.</li>
                    <li>EAD 85 Ver. 2.</li>
                    <li>
                      CACM ISIL Software (Software for Integrated Learning
                      Environment) 65 user.
                    </li>
                    <li>Pro/ E U Plus Lab Bundle Software.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap rounded-2xl px-4 w-full ">
              <div className="mt-2 font-bold italic text-lg">
                Network facilities:
              </div>
              <div>
                <p className="py-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;Wi-fi campus with 64 MBPS 1:1 leased line
                  internet connectivity. Wired LAN connection through CISCO
                  Catalyst within whole campus including all computer
                  laboratories and departments using fiber optical cable as
                  backbone. Outlook LAN Messenger for internal communication in
                  college campus.
                </p>
              </div>
            </div>
          </div>
          <div id="achievements" className="pt-[3.5rem]">
            <div className="flex flex-wrap rounded-2xl px-4 w-full ">
              <AnimatedText
                text="Achievements"
                className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)]"
              />
              <div>
                <p className="pb-1 font-sans font-medium text-lg">
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
                </p>
                <AnimatedTextWord
                  text="&ldquo;Imagine Innovate Inspire - AOT.&rdquo;"
                  className="text-3xl text-[hsl(232,47%,28%)] inline text-center font-bold font-serif italic pt-3"
                />
              </div>
            </div>
            <div>
              <Slidertext3d props={eeevents} />
            </div>
          </div>
          <div id="placements" className="pt-[3.5rem]">
            <AnimatedText
              text="Placements"
              className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div className="grid grid-cols-2 lg:grid-cols-1 gxl:gap-1 gap-8 mx-4">
              <div className="p-3 flex gxl:justify-evenly justify-end llg:hidden">
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
              </div>
              <div className="relative p-3">
                <div className="absolute top-0 xs:hidden smmy:left-[5rem] left-[45vw] llg:left-[5rem] w-60 h-60 bg-purple-300/60 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div className="absolute top-0 xs:hidden smmy:right-[5rem] right-[40vw] llg:right-[5rem] w-60 h-60 bg-yellow-300/60 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div className="absolute top-28 xs:hidden smmy:left-44 left-[40vw] llg:left-44 w-60 h-60 bg-pink-300/60 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div>
                  <div className="">
                    <AnimatedTextWord
                      text="&ldquo;Focus&emsp;Diligence&emsp;Consistency&rdquo;"
                      className="text-3xl sm:text-2xl sm:pb-2 text-accent inline text-center font-bold font-serif italic pt-3"
                    />
                  </div>
                  <div>
                    <div className="flex gap-4 my-3">
                      <div className="bg-[hsl(232,47%,28%)] h-fit w-fit p-1.5 rounded-[50%]">
                        <FaGraduationCap className="text-3xl sm:text-2xl text-white" />
                      </div>
                      <p className="text-2xl sm:text-xl font-serif p-1 font-[550] text-[hsl(232,47%,28%)]">
                        <span className="text-[32px]  sm:text-[28px] font-bold font-serif">
                          45+&nbsp;
                        </span>
                        Top Companies
                      </p>
                    </div>
                    <div className="flex gap-4 my-3">
                      <div className="bg-[hsl(232,47%,28%)] h-fit w-fit p-1.5 rounded-[50%]">
                        <FaGraduationCap className="text-3xl sm:text-2xl text-white" />
                      </div>
                      <p className="text-2xl sm:text-xl font-serif p-1 font-[550] text-[hsl(232,47%,28%)]">
                        <span className="text-[32px]  sm:text-[28px] font-bold font-serif">
                          520+&nbsp;
                        </span>
                        Job Offers
                      </p>
                    </div>
                    <div className="flex gap-4 my-3">
                      <div className="bg-[hsl(232,47%,28%)] h-fit w-fit p-1.5 rounded-[50%]">
                        <FaGraduationCap className="text-3xl sm:text-2xl text-white" />
                      </div>
                      <p className="text-2xl sm:text-xl font-serif p-1 font-[550] text-[hsl(232,47%,28%)]">
                        <span className="text-[32px] sm:text-[28px] font-bold font-serif">
                          Rs.63 Lakhs&nbsp;
                        </span>
                        Highest Salary
                      </p>
                    </div>
                    <div className="flex gap-4 my-3">
                      <div className="bg-[hsl(232,47%,28%)] h-fit w-fit p-1.5 rounded-[50%]">
                        <FaGraduationCap className="text-3xl sm:text-2xl text-white" />
                      </div>
                      <p className="text-2xl sm:text-xl font-serif p-1 font-[550] text-[hsl(232,47%,28%)]">
                        <span className="text-[32px] sm:text-[28px] font-bold font-serif">
                          Rs.8 Lakhs&nbsp;
                        </span>
                        average CTC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 flex gxl:justify-evenly justify-end lg:hidden">
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
              </div>
            </div>
            <div className="flex flex-wrap rounded-2xl p-2 w-full">
              <AnimatedText
                text="Our Recruiters"
                className="!text-3xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div>
                <div className="grid gap-8 xs:grid-cols-1 smmy:grid-cols-2 lg:grid-cols-3 grid-cols-4 items-center  p-4 mt-1.5">
                  <div className=" rounded-3xl p-3 flex justify-center cursor-pointer shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 transition-all ease-in-out duration-300">
                    <div className="w-62">
                      <Image src={a1} alt="" />
                    </div>
                  </div>
                  <div className=" rounded-3xl p-3 flex justify-center cursor-pointer shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 transition-all ease-in-out duration-300">
                    <div className="w-20">
                      <Image src={a2} alt="" />
                    </div>
                  </div>
                  <div className=" rounded-3xl p-3 flex justify-center cursor-pointer shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 transition-all ease-in-out duration-300">
                    <div className="w-60">
                      <Image src={a3} alt="" />
                    </div>
                  </div>
                  <div className=" rounded-3xl p-3 flex justify-center cursor-pointer shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 transition-all ease-in-out duration-300">
                    <div className="w-56">
                      <Image src={a4} alt="" />
                    </div>
                  </div>
                  <div className=" rounded-3xl p-3 flex justify-center cursor-pointer shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 transition-all ease-in-out duration-300">
                    <div className="w-60">
                      <Image src={a5} alt="" />
                    </div>
                  </div>
                  <div className=" rounded-3xl p-3 flex justify-center cursor-pointer shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 transition-all ease-in-out duration-300">
                    <div className="xs:w-56 w-62">
                      <Image src={a6} alt="" />
                    </div>
                  </div>
                  <div className=" rounded-3xl p-3 flex justify-center cursor-pointer shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 transition-all ease-in-out duration-300">
                    <div className="w-44">
                      <Image src={a7} alt="" />
                    </div>
                  </div>
                </div>
              </div>
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
          </div>
          <div id="newsletter" className="pt-[3.5rem]">
            <AnimatedText
              text="News & Events"
              className="!text-4xl mb-2 text-center font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <News props={newslinks} newsview="/department/eenewsview" />
          </div>
          <div id="activities" className="pt-[3.5rem]">
            <div className="flex flex-wrap rounded-2xl px-4 w-full ">
              <AnimatedText
                text="Student Activities"
                className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)]"
              />
              <div>
                <p className="pb-1 font-sans font-medium text-lg">
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
                </p>
              </div>
            </div>
            <div>
              <Slidertext3d props={eephotos} />
            </div>
          </div>
          <div
            id="faculty"
            className="flex flex-wrap rounded-2xl pt-[3.5rem] px-4 w-full justify-center"
          >
            <AnimatedText
              text="Our Faculty"
              className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-6 w-full ">
                {eefaculty.map((faculty, index) => (
                  <div key={index}>
                    <Facultycard props={faculty} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            id="staff"
            className="flex flex-wrap rounded-2xl pt-[3.5rem] px-4 w-full justify-center"
          >
            <AnimatedText
              text="Our Staffs"
              className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-6 w-full ">
                {eestaff.map((staff, index) => (
                  <div key={index}>
                    <Facultycard props={staff} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id="research" className="pt-[3.5rem]">
            {/**start */}
            <AnimatedText
              text="Research"
              className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)]"
            />
            <div className="flex flex-wrap mt-4 w-full justify-center items-center">
              <div className="relative xll:w-2/5 rounded-2xl shadow-news-shadow xl:h-[50vh] h-[60vh] xl:w-4/5">
                <div className="absolute font-extrabold  text-[28px] ml-2 top-1/4 text-white z-20">
                  <div className="left-0 flex w-fit p-2 rounded-2xl bg-white/40 backdrop-blur-md">
                    <AotLogo />
                  </div>
                  <p className="my-3">Innovative</p>
                  <p className="my-3">Transformative</p>
                  <p className="my-3">Holistic</p>
                </div>
                <Image
                  src={research1}
                  alt=""
                  className="absolute bg-cover -z-0 w-full xl:h-[50vh] h-[60vh] rounded-2xl shadow-news-shadow "
                />
              </div>
              <div className="p-2 font-sans xll:w-[55%] font-medium text-justify text-lg xll:ml-5 xl:mx-4 lg:mx-3">
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
              </div>
            </div>

            {/**end */}
            <div className="mt-4">
              <Slidertext3d props={eephotos} />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};
export default ee;
