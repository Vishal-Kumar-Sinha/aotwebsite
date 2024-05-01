import React from "react";
import Head from "next/head";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";

import { placementbanner } from "@/dictionary/Bannerlist";
import Link from "next/link";

const placements = () => {
  return (
    <>
      <Head>
        <title>AOT | Placements</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Banner sliderItems={placementbanner} />
        <Layout className="!pt-8">
          <div className="flex flex-wrap rounded-2xl p-4 w-full ">
            <AnimatedText
              text="Central Library"
              className="!text-4xl text-center font-serif text-accent italic"
            />
            <div>
              <p className="pb-1 font-sans font-medium text-lg">
                &emsp;&emsp;&emsp;A well-designed building with covered area of
                6800 sq. ft., the Central Library of the institute presently
                consists of 50989 volumes of text books and reference books and
                more than 6172 titles on all relevant subjects.
              </p>
              <p className="pb-1 font-sans font-medium text-lg">
                &emsp;&emsp;&emsp;271 national and international journals and
                proceedings from IEEE magazines, back volumes of periodicals and
                national dailies are available in the Central Library. The
                collection is growing both in quality and quantity with regular
                addition of new books, journals and reading materials from time
                to time. Book Bank facilities are also available to every
                student. Library is fully equipped with Libsys, Web OPAC and
                also ensures availability of Audio-Visual & Reprographic
                facilities. The Library remains open on all working days, on
                academic weekends and vacations.
              </p>
            </div>
          </div>
          <div className="flex mt-2 flex-wrap rounded-2xl p-4 w-full">
            <AnimatedText
              text="Digital Library"
              className="!text-4xl text-center font-serif text-accent italic"
            />
            <div>
              <div className="font-sans my-4 font-medium text-lg">
                Link to Digital Library :&emsp;
                <Link
                  href="http://182.74.215.202:8001/"
                  target="_blank"
                  className="italic font-bold text-accent hover:bg-accent/50 hover:text-white transition-all ease-in-out duration-300 px-2 rounded-3xl"
                >
                  Click&nbsp;Here
                </Link>
              </div>
              <div className="pb-1 font-sans font-medium text-lg">
                Digital Library of Academy of Technology is accessible from
                everywhere in the campus and is resourced with:
                <div className="p-6 ml-10 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Online subscribed Journals.</li>
                    <li>400 open access e-journals.</li>
                    <li>E-books.</li>
                    <li>Tutorial CD/DVD Service.</li>
                    <li>Question Bank.</li>
                    <li>Online Assessment Software.</li>
                    <li>Video Lectures.</li>
                    <li>DELNET.</li>
                    <li>GATE study materials.</li>
                    <li>All NPTEL web/video courses.</li>
                    <li>WebOPAC (Online Library Catalogue).</li>
                  </ul>
                </div>
              </div>
              <p className="pb-1 font-sans font-normal italic text-lg">
                &emsp;&emsp;&emsp;Digital Library is equipped with IBM X3400M3
                Intel Xeon 5506 (Quadra Core) Series, 10 P-IV Workstations,
                internet connectivity and other relevant hardware and software.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default placements