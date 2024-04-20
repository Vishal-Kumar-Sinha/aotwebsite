import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Slider from "@/components/Slider";

const testimonials = () => {
  return (
    <>
      <Head>
        <title>Testimonials Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center '>
            <Layout className='pt-10'>
                <div className=' pb-6'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='!text-4xl sm:!text-2xl' />
                </div>
                <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
                    <Slider />                   
                </div>
            </Layout>
        </main>
    </>
  );
};

export default testimonials;
