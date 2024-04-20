import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full font-medium text-lg'>
        <Layout className='py-8 bg-black/40 flex items-center justify-between'>
            <span>Rights</span>
            <Link href="/">Vishal kr sinha</Link>
            <Link href="/">Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer