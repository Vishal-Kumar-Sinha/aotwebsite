import React from 'react'
import Head from 'next/head'

import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Nav from '@/components/navigation/Nav'

import { links } from '@/dictionary/EventLinks'
import Eventcard from '@/components/banner/Eventcard'

const events = () => {
  return (
    <>
        <Head>
            <title>Projects Page</title>{/*<motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: 'easeIn', delay: 1.2, duration: 1.8 }}> */}
            <meta name='description' content='any description' />
        </Head>
        <Nav />
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='!pt-8'>
                <AnimatedText text="Imagination Trumps Knowledge!" />
                <div className="grid gap-8 grid-cols-4 sm:grid-cols-1 md:grid-cols-2 p-3 sm:p-8">
                  {links.map((link) => (
                    <div>
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