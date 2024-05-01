import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaGraduationCap } from "react-icons/fa";

//import components
import Layout from "@/components/Layout";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";
import Event from "@/components/banner/Event";
import AnimatedText from "@/components/AnimatedText";
import Announcementcard from "@/components/banner/Announcementcard";
import News from "@/components/banner/News";
import Video from "@/components/banner/Video";
import AnimatedTextWord from "@/components/AnimatedTextWord";
import Slider from "@/components/banner/Slider";
import { AotLogo } from "@/components/Icons";

//dictionary import
import { homebanner } from "@/dictionary/Bannerlist";
import { eventlinks } from "@/dictionary/EventLinks";
import { announcementlinks } from "@/dictionary/Announcementlinks";
import { newslinks } from "@/dictionary/Newslinks";
import { governerlist } from "@/dictionary/Campuslist";

//image import
import a1 from "@/assets/images/accreditation/capgemini.png";
import a2 from "@/assets/images/accreditation/cisco.png";
import a3 from "@/assets/images/accreditation/cyient.png";
import a4 from "@/assets/images/accreditation/google.png";
import a5 from "@/assets/images/accreditation/tcs.png";
import a6 from "@/assets/images/accreditation/techmahindra.png";
import a7 from "@/assets/images/accreditation/wipro.png";
import placement1 from "@/assets/images/placement.png";
import research1 from "@/assets/images/researchfull.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Academy Of Technology</title>
        <meta name="description" content="Generated by me" />
      </Head>
      <Nav />
      <main className="flex w-full flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Banner sliderItems={homebanner} />
        <Layout className="!pt-8">
          <AnimatedText text="Passion Fuels Purpose!" className="my-8" />
          <div className="flex flex-wrap md:gap-y-10 gap-5 justify-center">
            <div className="md:w-[90%] lg:w-[45%] llg:w-[30%] bg-red-300/40 p-2 rounded-2xl shadow-news-shadow">
              <div className=" flex mx-2 justify-center ">
                <AnimatedText
                  text="Notice"
                  className="!xxs:text-lg !xs:text-xl !lg:text-lg !text-4xl text-left ml-2"
                />
                <Link href="/announcements" className="group">
                  <AnimatedText
                    text="View&nbsp;all"
                    className="!text-xl mt-2 px-2 rounded-2xl font-normal ease-in-out transition-all duration-200 group-hover:text-white group-hover:bg-black/20 max-w-fit ml-2"
                  />
                </Link>
              </div>
              <div className="  p-2 border rounded-2xl">
                <div className="h-[22rem] w-full overflow-y-scroll scroll-smooth scrlbr">
                  {announcementlinks.map((link, index) => (
                    <div key={index} className="m-2">
                      <Announcementcard props={link} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-[90%] lg:w-[45%] gxl:w-[30%] bg-slate-300/40 p-2 rounded-2xl mx-4 shadow-news-shadow">
              <div className=" flex mx-2 justify-center ">
                <AnimatedText
                  text="Events"
                  className="!text-4xl text-left ml-2"
                />
                <Link href="/events" className="group">
                  <AnimatedText
                    text="View&nbsp;all"
                    className="!text-xl mt-2 px-2 rounded-2xl font-normal ease-in-out transition-all duration-200 group-hover:text-white group-hover:bg-black/20 max-w-fit ml-2"
                  />
                </Link>
              </div>
              <div className="h-[22rem] w-full p-2 border rounded-2xl">
                <Event links={eventlinks} />
              </div>
            </div>
            <div className="md:w-[90%] lg:w-[50%] llg:w-[30%] bg-red-300/40 p-2 rounded-2xl shadow-news-shadow">
              <div className=" flex mx-2 justify-center ">
                <AnimatedText
                  text="AOT Online"
                  className="!xxs:text-lg !xs:text-xl !lg:text-lg !text-4xl text-left ml-2"
                />
              </div>
              <div className=" p-2 border rounded-2xl">
                <div className="h-[22rem] lg:h-fit w-full">
                  <Link href="/">
                    <p className="bg-white shadow-news-shadow hover:scale-95 transition-all ease-in-out duration-200 my-2 rounded-md w-full px-3 py-1 font-serif text-lg">
                      Industry 4.0 Center @AOT
                    </p>
                  </Link>
                  <Link href="/">
                    <p className="bg-white shadow-news-shadow hover:scale-95 transition-all ease-in-out duration-200 my-2 rounded-md w-full px-3 py-1 font-serif text-lg">
                      AOT Student Portal
                    </p>
                  </Link>
                  <Link href="/">
                    <p className="bg-white shadow-news-shadow hover:scale-95 transition-all ease-in-out duration-200 my-2 rounded-md w-full px-3 py-1 font-serif text-lg">
                      AOT Web Magazine
                    </p>
                  </Link>
                  <Link href="/">
                    <p className="bg-white shadow-news-shadow hover:scale-95 transition-all ease-in-out duration-200 my-2 rounded-md w-full px-3 py-1 font-serif text-lg">
                      Google Innovation Centre
                    </p>
                  </Link>
                  <Link href="/">
                    <p className="bg-white shadow-news-shadow hover:scale-95 transition-all ease-in-out duration-200 my-2 rounded-md w-full px-3 py-1 font-serif text-lg">
                      Moodle Portal Login
                    </p>
                  </Link>
                  <Link href="/">
                    <p className="bg-white shadow-news-shadow hover:scale-95 transition-all ease-in-out duration-200 my-2 rounded-md w-full px-3 py-1 font-serif text-lg">
                      AOT Grievance Redressal/ Feedback
                    </p>
                  </Link>
                  <Link href="/">
                    <p className="bg-white shadow-news-shadow hover:scale-95 transition-all ease-in-out duration-200 my-2 rounded-md w-full px-3 py-1 font-serif text-lg">
                    Techfiesta || Games Meet || Humatronics
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <AnimatedText text="About us" className="my-8" />
          <AnimatedTextWord
            text="&ldquo;Aspires to be a pre-eminent deemed university of national standing in education and innovation.&rdquo;"
            className="text-3xl text-accent inline text-center font-bold font-serif italic pt-3"
          />
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 rounded-2xl p-4 w-full justify-center items-center">
              <div className="w-full h-fit p-2 rounded-2xl border border-white shadow-news-shadow">
                <Video embedId="O_u78qBmUuo?si=7VVwG78gYKqrB8IB" />
              </div>
              <div className="relative p-2">
                <div className="absolute top-0 xs:hidden left-[5rem] w-60 h-60 bg-purple-300/60 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div className="absolute top-0 xs:hidden right-[5rem] w-60 h-60 bg-yellow-300/60 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div className="absolute top-28 xs:hidden left-44 w-60 h-60 bg-pink-300/60 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
                <div>
                  <AnimatedText
                    text="History"
                    className="!text-4xl text-center ml-2 font-serif"
                  />
                  <p className="pb-1 font-sans leading-tight font-medium text-lg">
                    &emsp;&emsp;&emsp;Established in 2003, Academy of Technology
                    is one of the most acclaimed self-financed engineering
                    colleges in West Bengal. It has been established by Ananda
                    Educational Development & Charitable Organisation (AEDCO), a
                    trust known for its deep sense of social commitment and
                    dedicated to the promotion of education by inculcating
                    appropriate ethics and attitude.
                  </p>
                  <p className="pt-2 font-sans leading-tight font-medium text-lg">
                    &emsp;&emsp;&emsp;In a metamorphosis of over 18 years,
                    Academy of Technology has been reinventing itself constantly
                    to explore the infinite possibilities of engineering and
                    technology – an academy that inspires everyone to think
                    differently. It is now the preferred career destination for
                    meritorious students due to its academic integrity and
                    standard as well as its attractive campus placement.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <AnimatedText
                  text="Recognitions"
                  className="!text-4xl text-center ml-2 font-serif"
                />
                <p className="pb-1 font-sans leading-tight font-medium text-lg">
                  &emsp;&emsp;&emsp;All academic programmes are approved by
                  AICTE, recognized by Department of Higher Education,
                  Government of West Bengal and affiliated to Maulana Abul Kalam
                  Azad University of Technology, West Bengal (formerly West
                  Bengal University of Technology) .
                </p>
                <p className="pt-2 text-center">
                  <Link
                    className=" text-blue-600 font-extrabold inline-flex font-sans leading-tight text-lg group"
                    href="/15-Mandatory-Disclosure.pdf"
                    target="_blank"
                  >
                    Mandatory Disclosure&nbsp;
                    <span className="mt-1 group-hover:ml-2 transition-all ease-linear duration-300">
                      <FaExternalLinkAlt />
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap rounded-2xl p-2 mt-3 w-full ">
            <AnimatedText
              text="Accreditation & Alliances"
              className="!text-4xl text-center font-serif "
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
          <div>
            <AnimatedText text="Placements" className="my-8" />
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

                    <p className=" flex text-justify font-medium text-gray-800 pt-1 px-2 text-[17px] leading-normal italic">
                      &emsp;&emsp;&emsp;Enim adipisicing culpa aliquip voluptate
                      ullamco nisi consequat non consectetur pariatur sit. Minim
                      exercitation non aliquip adipisicing commodo sunt aliqua
                      Lorem exercitation. Excepteur cupidatat id commodo
                      voluptate in id consequat irure nulla. Anim laboris
                      consectetur duis enim amet officia in do cupidatat
                      incididunt proident.
                    </p>
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
          <div id="news">
            <AnimatedText text="News" className="my-8" />
            <News props={newslinks} newsview="/newsview" />
          </div>
          <div id="research">
            <AnimatedText text="Research" className="mt-8" />
            <div>
              <AnimatedTextWord
                text="&ldquo;Innovative&ensp;Transformative&ensp;Holistic&rdquo;"
                className="text-3xl text-accent inline text-center font-bold font-serif italic pt-3 mb-2"
              />
              <div className="flex flex-wrap mt-4 w-full justify-center items-center">
                <div className="relative xll:w-2/5 rounded-2xl shadow-news-shadow xl:h-[50vh] h-[60vh] xl:w-4/5">
                  <div className="absolute font-extrabold  text-[28px] ml-2 top-1/3 text-white z-20">
                    <div className="left-0 flex w-fit p-2 rounded-2xl bg-white/40 backdrop-blur-md">
                      <AotLogo />
                    </div>
                    <div className="mt-4">
                      <div className="flex gap-4 my-3">
                        <div className="bg-white h-fit w-fit p-1.5 rounded-[50%]">
                          <FaGraduationCap className="text-3xl sm:text-2xl text-[hsl(232,47%,28%)]" />
                        </div>
                        <p className="text-2xl sm:text-xl font-serif p-1 font-[550] text-white">
                          <span className="text-[32px] sm:text-[28px] font-bold font-serif">
                            4500+&nbsp;
                          </span>
                          <span> Publications</span>
                        </p>
                      </div>
                      <div className="flex gap-4 my-3">
                        <div className="bg-white h-fit w-fit p-1.5 rounded-[50%]">
                          <FaGraduationCap className="text-3xl sm:text-2xl text-[hsl(232,47%,28%)]" />
                        </div>
                        <p className="text-2xl sm:text-xl font-serif p-1 font-[550] text-white">
                          <span className="text-[32px]  sm:text-[28px] font-bold font-serif">
                            45&nbsp;
                          </span>
                          Filed Patents
                        </p>
                      </div>
                      <div className="flex gap-4 my-3">
                        <div className="bg-white h-fit w-fit p-1.5 rounded-[50%]">
                          <FaGraduationCap className="text-3xl sm:text-2xl text-[hsl(232,47%,28%)]" />
                        </div>
                        <p className="text-2xl sm:text-xl font-serif p-1 font-[550] text-white">
                          <span className="text-[32px]  sm:text-[28px] font-bold font-serif">
                            45+&nbsp;
                          </span>
                          Ongoing Projects
                        </p>
                      </div>
                    </div>
                  </div>
                  <Image
                    width={800}
                    height={800}
                    src="/research.jpg"
                    alt=""
                    className="absolute bg-cover -z-0 w-full xl:h-[50vh] h-[60vh] rounded-2xl shadow-news-shadow "
                  />
                </div>
                <div className="p-2 font-sans xll:w-[55%] font-medium text-justify text-lg xll:ml-5 xl:mx-4 lg:mx-3">
                  &emsp;&emsp;&emsp;Apart from conducting high quality,
                  innovative and continually updated course curriculum, the
                  department of Computer Science & Engineering is engaged in
                  research in frontier areas through establishment of research
                  groups. Research interests include Algorithms & Theory of
                  Computation, Artificial Intelligence, Bioinformatics, Cloud
                  Computing, Database & Data Mining, Data Analytics, Machine
                  Learning, Human Computer Interaction, Information & Network
                  Security, Internet Technology, Image Processing, Mobile
                  Computing, Pattern Recognition, Program Analysis and Testing,
                  Parallel & Distributed Computing, Real Time Systems,
                  Service-Oriented Architecture, Soft Computing, Software
                  Engineering, Wireless Sensor Networks. With a view to provide
                  the best exposure to the learners, AOT actively organizes a
                  number of International Conferences, Student Research
                  Symposium, Industry Symposium, Innovative Student Project
                  Contests, Tech Fest along with imparting student chapter such
                  as IEEE Chapter, etc.
                </div>
              </div>
              <div className="mt-1 flex flex-wrap">
                <div className="bg-[hsl(232,47%,28%)] w-full h-1 mt-[18px] rounded-2xl"></div>
                <Link
                  href="/research"
                  className="absolute bg-gray-100 px-3 py-2 w-fit rounded-3xl text-center font-bold sm:left-[47%] left-[75%] hover:shadow-inside-shadow hover:scale-90 active:scale-110 transition-all duration-300"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
          <div>
            <AnimatedText text="Our Inspirations" className="mt-8 mb-3" />
            <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
              <Slider clients={governerlist} />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
