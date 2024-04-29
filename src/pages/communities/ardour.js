import React from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";

import { ardourbanner } from "@/dictionary/Bannerlist";



const ardour = () => {
  return (
    <>
      <Head>
        <title>AOT | Ardour</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-2 min-h-[80vh] flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]">
        <Banner sliderItems={ardourbanner} />
        <Layout className="!pt-8">
          <div className="flex flex-wrap rounded-2xl pt-4 px-4 w-full ">
            <AnimatedText
              text="Ardour"
              className="!text-4xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
            />
            <div>
              <p className="pb-4 font-sans font-medium text-lg">
                &emsp;&emsp;&emsp;This community brings together students to
                stare a common platform where they can showcase their talents in
                dance, drama, music, songs and every other form of performing
                arts.
              </p>
              <p className="pb-1 font-sans font-medium text-lg">
                &emsp;&emsp;&emsp;Every year community members of ARDOUR
                organise ‘ARCADIA’ – the most vibrant socio-cultural event of
                the campus. Over the past years this event has attained an
                unparalleled prestige across the state with outstanding guest
                performances by KK (in 2014), Sunidhi Chauhan (in 2015),
                Sukhwinder Singh (in 2016), Sonu Nigam (in 2017) & Amit Trivedi
                (2018).
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
                    Souranil Sarkar (3rd yr EE) won 1st position in
                    Rabindra-Sangeet, Najrool Geeti & Elocution in the
                    state-level intra-WBPDCL cultural meet organized by BTPS
                    Recreation Club in 2017.
                  </li>
                  <li className="p-1.5">
                    Saikat Dutta (3rd yr ECE) cleared the first round of the
                    national dance competition Dance India Dance, 2015.
                  </li>
                  <li className="p-1.5">
                    Rwitam Bandyopadhyay (4th yr CSE) got 7th position in India
                    on Guitar, a National level guitar competition organised by
                    Blade & powered by DigiTech, December 2013 – January 2014.
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

export default ardour;
