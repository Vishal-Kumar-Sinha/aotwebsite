import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
  }

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-full shadow-inside-shadow hover:scale-110 bg-slate-400 p-2 outline-none transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FaAngleUp className="text-xl" />
    </button>
  )
}

export default ScrollToTop