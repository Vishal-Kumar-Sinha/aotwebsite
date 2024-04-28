import React from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";

import { librarybanner } from "@/dictionary/Bannerlist";

const Agile = () => {
  return (
    <>
      <Head>
        <title>AOT | Agile</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center">
        {/* <Banner sliderItems={librarybanner} /> */}
        <Layout className="!pt-8">
          <div className="flex flex-wrap rounded-2xl pt-4 px-4 w-full ">
            <AnimatedText
              text="Agile"
              className="!text-4xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div>
              <p className="pb-1 font-sans font-medium text-lg">
                &emsp;&emsp;&emsp;The student community for games and sports
                promotes and participation in different competitive events in
                athletics, badminton, basketball, cricket, football, table
                tennis, volleyball and to give a strong thrust in these
                activities organises round the year coaching.
              </p>
              <p className="pb-1 font-sans font-medium text-lg">
                &emsp;&emsp;&emsp;AGILE maintains ‘ADROIT’- the sophisticated
                college Gym for boys and girls.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap rounded-2xl py-2 px-4 w-full">
            <div>
              <div className="pb-1 font-sans font-medium text-lg">
                Round-the-year prolonged Coaching by State-Level Coaches in:
                <div className="px-6 pt-2 ml-10 w-fit">
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Basketball (boys & girls).</li>
                    <li>Cricket.</li>
                    <li>Football.</li>
                    <li>Volleyball.</li>
                    <li>Taekwondo (for girls).</li>
                  </ul>
                </div>
              </div>
              <div>
                <AnimatedText
                  text="Participation:"
                  className="text-start text-xl !text-[hsl(232,47%,28%)] italic"
                />
              </div>
              <p className="pb-1 font-sans font-normal italic text-lg">
                &emsp;&emsp;&emsp;Since 2011 our basketball team, football team
                and volleyball team have participated every year in PARAKRAM,
                the annual sports meet of ISM Dhanbad and SPARDHA, IT BHU.
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
                    AOT is the defending champion of MAKAUT in basketball.
                  </li>
                  <li className="p-1.5">
                    7 of our basketball players are University Blues.
                  </li>
                  <li className="p-1.5">
                    Our Volleyball Team was the winner among 16 colleges in
                    Tournament Reloaded organised by Techno India, Saltlake in
                    2017.
                  </li>
                  <li className="p-1.5">
                    Our Football Team was the champion in PARAKRAM 2016 (ISM
                    Dhanbad).
                  </li>
                  <li className="p-1.5">
                    Our Basketball Girls Team won the title of champion in
                    Inter-College Basket Ball Tournament organized by MCKV in
                    2015.
                  </li>
                  <li className="p-1.5">
                    Diptiman Chowdhury (ECE 2016 Batch) won 2nd Position (male)
                    and Oliva Shah (ECE 2016 Batch) won 2nd Position (female) in
                    TCS Fit4life Campus Challenge 5 km marathon, 2015.
                  </li>
                  <li className="p-1.5">
                    Our Volleyball team was semi-finalist and our Football Team
                    was runners-up in PARAKRAM 2014
                  </li>
                  <li className="p-1.5">
                    Our Football Team was quarter finalist in PARAKRAM 2013
                  </li>
                  <li className="p-1.5">
                    Our Basketball team was semi-finalist in SPARDHA (IT BHU)
                    2012
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap rounded-2xl pt-4 px-4 w-full ">
            <AnimatedText
              text="Future Focus:"
              className="!text-4xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <p className="pb-1 font-sans font-medium text-lg">
              &emsp;&emsp;&emsp;Round-the-year Coaching in Badminton, Tennis,
              Table Tennis and Martial Arts for Girls.
            </p>
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

export default Agile;
