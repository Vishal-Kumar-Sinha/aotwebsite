import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block bg-light xll:px-32 xll:pt-32 xll:pb-10 p-4 ${className}`}>
      
        {children}
    </div>
  )
}

export default Layout