import React from 'react'
import { motion } from 'framer-motion'
import Pcard from './Pcard'
import Pic1 from '@/assets/images/projects/p1/p1.png'
const slides = [
  Pic1,Pic1,Pic1
]
const Webproject = () => {
  return (
    <>
      <div className="grid gap-8 grid-cols-3 sm:grid-cols-1 md:grid-cols-2 p-3 sm:p-8">
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: 'easeIn', delay: 0.4, duration: 1 }}>
          <Pcard
            className="bg-[#fcf4ff]"
            heading="Heading"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
            thumbnailSrc={Pic1}
            slides={slides}
            category="website"
            duration="March 17, 2023 - January 22, 2024"
            link="Aute reprehenderit sunt in eu proident magna eiusmod pariatur."
            tools="Minim officia adipisicing cillum exercitation non voluptate aliqua sit occaecat cupidatat consequat irure incididunt ex."
            brief="Tempor quis exercitation non minim Lorem ad officia. Consectetur exercitation irure pariatur do culpa eiusmod elit occaecat ullamco aliqua. Aliqua ullamco dolore amet elit eu aliquip."
          />
        </motion.div>
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: 'easeIn', delay: 0.6, duration: 1.2 }}>
          <Pcard
            className="bg-[#fefaf0]"
            heading="Heading"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
            thumbnailSrc={Pic1}
            slides={slides}
            category="website"
            duration="March 17, 2023 - January 22, 2024"
            link="Aute reprehenderit sunt in eu proident magna eiusmod pariatur."
            tools="Minim officia adipisicing cillum exercitation non voluptate aliqua sit occaecat cupidatat consequat irure incididunt ex."
            brief="Tempor quis exercitation non minim Lorem ad officia. Consectetur exercitation irure pariatur do culpa eiusmod elit occaecat ullamco aliqua. Aliqua ullamco dolore amet elit eu aliquip."
          />
        </motion.div>
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: 'easeIn', delay: 0.8, duration: 1.4 }}>
          <Pcard
            className="bg-[#f3faff]"
            heading="Heading"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
            thumbnailSrc={Pic1}
            slides={slides}
            category="website"
            duration="March 17, 2023 - January 22, 2024"
            link="Aute reprehenderit sunt in eu proident magna eiusmod pariatur."
            tools="Minim officia adipisicing cillum exercitation non voluptate aliqua sit occaecat cupidatat consequat irure incididunt ex."
            brief="Tempor quis exercitation non minim Lorem ad officia. Consectetur exercitation irure pariatur do culpa eiusmod elit occaecat ullamco aliqua. Aliqua ullamco dolore amet elit eu aliquip."
          />
        </motion.div>
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: 'easeIn', delay: 1, duration: 1.6 }}>
          <Pcard
            className="bg-[#f3faff]"
            heading="Heading"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
            thumbnailSrc={Pic1}
            slides={slides}
            category="website"
            duration="March 17, 2023 - January 22, 2024"
            link="Aute reprehenderit sunt in eu proident magna eiusmod pariatur."
            tools="Minim officia adipisicing cillum exercitation non voluptate aliqua sit occaecat cupidatat consequat irure incididunt ex."
            brief="Tempor quis exercitation non minim Lorem ad officia. Consectetur exercitation irure pariatur do culpa eiusmod elit occaecat ullamco aliqua. Aliqua ullamco dolore amet elit eu aliquip."
          />
        </motion.div>
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ ease: 'easeIn', delay: 1.2, duration: 1.8 }}>
          <Pcard
            className="bg-[#f3faff]"
            heading="Heading"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat."
            thumbnailSrc={Pic1}
            slides={slides}
            category="website"
            duration="March 17, 2023 - January 22, 2024"
            link="Aute reprehenderit sunt in eu proident magna eiusmod pariatur."
            tools="Minim officia adipisicing cillum exercitation non voluptate aliqua sit occaecat cupidatat consequat irure incididunt ex."
            brief="Tempor quis exercitation non minim Lorem ad officia. Consectetur exercitation irure pariatur do culpa eiusmod elit occaecat ullamco aliqua. Aliqua ullamco dolore amet elit eu aliquip."
          />
        </motion.div>
      </div>
    </>
  )
}

export default Webproject