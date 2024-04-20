import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block bg-light xll:p-32 p-4 ${className}`}>
      
        {children}
    </div>
  )
}

export default Layout