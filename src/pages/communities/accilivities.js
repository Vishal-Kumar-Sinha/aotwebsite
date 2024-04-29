import React from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";

import { accilivitiesbanner } from "@/dictionary/Bannerlist";

const accilivities = () => {
  return (
    <>
      <Head>
        <title>AOT | Accilivities</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-2 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Banner sliderItems={accilivitiesbanner} />
        <Layout className="!pt-8">
          <div className="flex flex-wrap rounded-2xl pt-4 px-4 w-full ">
            <AnimatedText
              text="Accilivities"
              className="!text-4xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div>
              <p className="pb-4 font-sans font-medium text-lg">
                &emsp;&emsp;&emsp;Contributing to social causes in a structured
                manner, members of ACCLIVITES organise NSS activities, awareness
                programmes on environmental issues, adult education and computer
                literacy and also campaign against tobacco, drugs and alcohol
                addiction and ragging.
              </p>
            </div>
          </div>
          <div className="flex mt-2 flex-wrap rounded-2xl p-4 w-full">
            <AnimatedText
              text="Pre-eminent Activities of a few of our Students:"
              className="!text-4xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div>
              <div className="pb-1 font-sans font-medium text-lg">
                <ul style={{ listStyleType: "disc" }}>
                  <li className="p-1.5">
                    Vishal Parakh, (4th yr ECE), Zeeshan Mehboob (4th yr IT),
                    Ankita Dhanuka (4th yr ECE) & Shakshi Baid (4th yr CSE) with
                    some other students started an NGO, REVOL”YOU”TION in 2015
                    that envisions spreading awareness about importance of
                    Proper Education by providing the under privileged children
                    with books and other basic necessities.
                  </li>
                  <li className="p-1.5">
                    Abhiroop Banerjee (4th yr CSE) is one of the founder members
                    and General Secretary of a non-profitable organization named
                    ‘Porjanyo’ which does social work with the help of some NGOs
                    namely ‘Prantakatha’ and others. Porjanyo also publishes
                    online magazine named ‘Kolombuzz’.
                  </li>
                  <li className="p-1.5">
                    Sanjana Majumdar (AEIE 2015 Batch) is a member of Serve, an
                    NGO aiming at “Making Education Happier for Children and
                    Fights against Students Suicide Attempts”.
                  </li>
                  <li className="p-1.5">
                    Priyanka Chowbey (CSE 2015 Batch) is a Volunteer for CRY
                    since 2012.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <AnimatedText
              text="Explore Other Communities"
              className="!text-4xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div className="flex flex-wrap mx-auto xll:mx-0 mb-10 mt-5 justify-center">
              <Link
                className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                href="/communities/ardour"
              >
                Ardour
              </Link>
              <Link
                className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                href="/communities/agile"
              >
                Agile
              </Link>
              <Link
                className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                href="/communities/acuity"
              >
                Acuity
              </Link>
              <Link
                className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                href="/communities/analects"
              >
                Analects
              </Link>
              <Link
                className="px-3 xll:mx-6 my-3 xl:mx-3 py-1.5 rounded-3xl shadow-news-shadow hover:shadow-inside-shadow hover:scale-90 font-serif font-semibold active:scale-110 transition-all ease-in-out duration-300"
                href="/communities/accilivities"
              >
                Accilivities
              </Link>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default accilivities;
