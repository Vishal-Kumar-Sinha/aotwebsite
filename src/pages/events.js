import React from 'react'
import Head from 'next/head'

import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Nav from '@/components/navigation/Nav'

import { eventlinks } from '@/dictionary/EventLinks'
import Eventcard from '@/components/banner/Eventcard'

const events = () => {
  return (
    <>
        <Head>
            <title>Projects Page</title>
            <meta name='description' content='any description' />
        </Head>
        <Nav />
        <main className='w-full mb-16 flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]'>
            <Layout className='!pt-8'>
                <AnimatedText text="Imagination Trumps Knowledge!" />
                <div className="grid gap-8 grid-cols-4 sm:grid-cols-1 md:grid-cols-2 p-3 sm:p-8">
                  {eventlinks.map((link, index) => (
                    <div key={index}>
                      <Eventcard props={link} />
                    </div>
                  ))}
                </div>
            </Layout>
        </main>
    </>
  )
}

export default events