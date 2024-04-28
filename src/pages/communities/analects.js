import React from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";

import { librarybanner } from "@/dictionary/Bannerlist";

const Analects = () => {
  return (
    <>
      <Head>
        <title>AOT | Analects</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center">
        {/* <Banner sliderItems={librarybanner} /> */}
        <Layout className="!pt-8">
          <div className="flex flex-wrap rounded-2xl pt-4 px-4 w-full ">
            <AnimatedText
              text="Analects"
              className="!text-4xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div>
              <p className="pb-4 font-sans font-medium text-lg">
                &emsp;&emsp;&emsp;The collective efforts of this community on
                creative writing, painting, quiz, debating, photograph and other
                spheres of creative performances round the year enhance the
                students’ life manifold.
              </p>
              <p className="pb-1 font-sans font-medium text-lg">
                &emsp;&emsp;&emsp;‘HUMATRONICS’ — the annual talent search
                competition and ‘WALLZINE’ — the wall magazine published by
                ‘ANALECTS’ have been widely acclaimed through the years.
              </p>
            </div>
          </div>
          <div className="flex mt-2 flex-wrap rounded-2xl p-4 w-full">
            <AnimatedText
              text="A Few Achievements of our Students:"
              className="!text-4xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div>
              <div className="pb-1 font-sans font-medium text-lg">
                <ul style={{ listStyleType: "disc" }}>
                  <li className="p-1.5">
                    Shuvrodeep Pal (3rd yr AEIE) was the winner of the national
                    DELL Campassador My PC My Story contest in 2017.
                  </li>
                  <li className="p-1.5">
                    Atriz Ray (1st yr ME) was a regular contributor to TTIS and
                    writes on various social issues in the “Your Voice” Column
                    of The Telegraph.
                  </li>
                  <li className="p-1.5">
                    Sanjana Majumdar (AEIE 2015 Batch) was a Freelance Writer
                    associated with The Statesman & covered the International
                    Conference on Functional Materials-2014 at IIT, Kharagapur
                    for The Statesman, Campus, April 22, 2014 and the IEEE
                    sponsored International Conference at AOT for The Statesman
                    in “Laced with Humour”, 11 February, 2015.
                  </li>
                  <li className="p-1.5">
                    Subhajit Khan (EE 2016 Batch) has been the Co-editor of a
                    Bengali literary magazine MASTUL from 2013 to the present.
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

export default Analects;
