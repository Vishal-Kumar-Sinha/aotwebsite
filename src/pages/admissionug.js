import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Nav from "@/components/navigation/Nav";
import Banner from "@/components/banner/Banner";
import AnimatedTextWord from "@/components/AnimatedTextWord";

import { careerbanner } from "@/dictionary/Bannerlist";

const admissionug = () => {
  return (
    <>
      <Head>
        <title>AOT | Admission@AOT</title>
        <meta name="description" content="any description" />
      </Head>
      <Nav />
      <main className="w-full mb-10 min-h-[80vh] flex flex-col items-center justify-center">
        <Banner sliderItems={careerbanner} />
        <Layout className="!pt-8">
          <div>
            <AnimatedText
              text="Competitive Pay Packages & Career Advancement Scheme"
              className="!text-4xl text-center font-serif !text-[hsl(232,47%,28%)]"
            />
            <div className="flex flex-wrap rounded-2xl p-4 w-full ">
              <AnimatedText
                text="Flexible working hours"
                className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div>
                <p className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;Retired Professors recruited from premier
                  institutes/ senior professionals from R & D organizations/
                  corporates may be considered for flexible working hours, i.e.
                  45 to 60 working days in a semester, @ 3 to 4 days per week
                  considering 15 teaching weeks in a semester. Partially online
                  teaching options may also be considered.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap rounded-2xl p-4 w-full ">
              <AnimatedText
                text="Higher scale of pay"
                className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div>
                <p className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;AOT provides competitive pay packages that
                  exceed those for same positions in peer institutes. Assistant
                  Professors with 6yrs of full time teaching/ research
                  experience after M.Tech and registered for PhD, will be
                  eligible for post of Assistant Professor [Senior Scale],
                  compared to the 10yrs requirement in AICTE norms. Assistant
                  Professors with 10yrs of full time teaching and research
                  experience after M.Tech, already registered for PhD & with at
                  least one publication in SCI indexed journals will be eligible
                  for post of Assistant Professor [Selection Grade], which is
                  highly flexible compared to AICTE norms.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap rounded-2xl p-4 w-full ">
              <AnimatedText
                text="Career development opportunity"
                className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div>
                <p className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;Ample scope provided to engage in innovation
                  and research in a vibrant and collaborative environment.
                  Conducive atmosphere to develop your potential to the fullest
                  and performance-based incentives. Mentoring by experiences
                  academicians/ industry experts for new faculty.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap rounded-2xl p-4 w-full ">
              <AnimatedText
                text="360 degree support for research and publication"
                className="!text-3xl text-start font-serif !text-[hsl(232,47%,28%)] italic"
              />
              <div>
                <p className="pb-1 font-sans font-medium text-lg">
                  &emsp;&emsp;&emsp;For all teaching posts, in addition to
                  salary, incentives will be paid for career development,
                  publication, patent, work on Govt. & industry sponsored
                  project, attending conferences, faculty development programs,
                  etc. as per institute norms. Dedicated research labs on
                  Industry 4.0 technologies in the pipeline.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className=" bg-[hsl(232,47%,28%)] w-full h-1 rounded-2xl"></div>
          </div>
          <div className="mt-4">
            <AnimatedTextWord
              text="We are looking for dynamic faculty members who are ready to join our quest for excellence. Please email your CV indicating the post applied for to career@aot.edu.in"
              className="text-3xl text-[hsl(232,47%,28%)] inline text-center font-bold font-serif italic pt-3"
            />
            <div className="flex flex-wrap rounded-2xl w-full px-6 py-6 ml-10 font-sans font-medium text-lg ">
              <ul style={{ listStyleType: "circle" }}>
                <li className="mb-2">
                  <Link
                    href="/job_pdf/Telegraph_05_05_23.pdf"
                    target="_blank"
                  >
                    <span className=" text-blue-600 font-extrabold">
                      Recruitment Advertisement May, 2023 &nbsp;
                    </span>
                    <span className="italic font-normal">
                      (Published in The Telegraph on 05.05.23)
                    </span>
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    href="/job_pdf/AOT-Recruitment-Kajer-Bazar-AD-for-10.01-1.pdf"
                    target="_blank"
                  >
                    <span className=" text-blue-600 font-extrabold">
                      Recruitment Advertisement January, 2023
                    </span>
                    <span className="italic font-normal">
                      (Published in Anandabazar Patrika on 10.01.23)
                    </span>
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/job_pdf/Add_12_12_23.pdf" target="_blank">
                    <span className=" text-blue-600 font-extrabold">
                      Recruitment Advertisement December, 2023
                    </span>
                    <span className="italic font-normal">
                      (Published in Anandabazar Patrika & Telegraph on 12.12.23)
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-blue-600 font-extrabold inline-flex"
                    download={true}
                    href="/job_pdf/AOT-Application-Format-2021.doc"
                    target="_blank"
                  >
                    AOT Application Format&nbsp;
                    <span className="mt-1">
                      <FaExternalLinkAlt />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default admissionug