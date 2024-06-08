import React from 'react'
import ScrollToTop from './navigation/ScrollToTop'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block bg-light xll:px-32 xll:pt-32 xll:pb-10 p-4 ${className}`}>
      
        {children}
        <ScrollToTop />
    </div>
  )
}

export default Layout