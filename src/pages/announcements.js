import React from 'react'
import Head from 'next/head'

import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Nav from '@/components/navigation/Nav'
import Announcementcard from '@/components/banner/Announcementcard'

import { announcementlinks } from '@/dictionary/Announcementlinks'

const announcements = () => {
  return (
    <>
        <Head>
            <title>AOT | Announcements</title>
            <meta name='description' content='any description' />
        </Head>
        <Nav />
        <main className='w-full mb-16 flex flex-col items-center justify-center smmy:pt-[4.2rem] lg:pt-[4.7rem] llg:pt-[4.5rem]'>
            <Layout className='!pt-8'>
                <AnimatedText text="Imagination Trumps Knowledge!" />
                <div className="flex flex-wrap rounded-2xl p-4 w-full">
                  {announcementlinks.map((link) => (
                    <div className="m-2 w-full">
                      <Announcementcard props={link} />
                    </div>
                  ))}
              </div>
            </Layout>
        </main>
    </>
  )
}

export default announcements