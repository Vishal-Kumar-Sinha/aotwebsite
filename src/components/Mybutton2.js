import React, { useRef } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'


const Mybutton2 = ({children, title, className, color, type, ...prop}) => {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  return (
    <>
      <motion.div className={`shadow-outside-shadow h-fit w-fit rounded-full ${className}`} whileHover={{scale:0.85}} whileTap={{scale:1.1}}>
        <button 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} 
        className={`flex p-2 items-center rounded-full text-white ${color || "bg-gray-600"} shadow-inside-shadow `}
        {...prop}
        type={type}
        >
          {children}
          <span ref={ref} className='px-1.5'>
            {title}
          </span>
        </button>
      </motion.div>
      
    </>
  );
}
export default Mybutton2

