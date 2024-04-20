import React, { useRef } from 'react'
import { useState } from 'react'



const Mybutton = ({children, title, className, color, type, ...prop}) => {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  return (
    <>
      <div className={`shadow-outside-shadow h-fit w-fit rounded-full ${className}`}>
        <button 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} 
        className={`flex p-2 items-center rounded-full text-white ${color || "bg-gray-600"} shadow-inside-shadow`}
        {...prop}
        type={type}
        >
          {children}
          
          <div 
          style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
          className='overflow-x-hidden transition-all duration-300 ease-out'
          >
            <span ref={ref} className='px-1.5'>
              {title}
            </span>
          </div>
        </button>
      </div>
      
    </>
  );
}
export default Mybutton

