import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Animatedparagraph from "@/components/Animatedparagraph";

const HeaderSlider = ({ sliderItems }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <Slider {...settings}>
      {sliderItems.map((item, index) => (
        <div key={index}>
          <div className="flex justify-center relative">
            <Image
              className="max-h-screen lg:h-[60vh] llg:h-[90vh] w-screen -z-10 flex bg-cover opacity-80"
              src={item.imageUrl}
              alt=""
            />
            <div className="absolute max-w-[90vw] lg:left-2 sm:top-2 lg:top-[20%] llg:left-5 llg:top-1/3 text-left italic mmd:backdrop-blur-sm bg-transparent justify-start my-2 content-start rounded-xl">
              <div>
                <motion.div
                  className="w-[8rem] mt-2 mx-2"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      ease: "easeOut",
                      delay: 0,
                      duration: 0.5,
                    },
                  }}
                >
                  {item.logo}
                </motion.div>
                <AnimatedText
                  text={item.title}
                  className="!text-start drop-shadow-[1px_2px_6px_rgba(255,255,255,1)] font-bold xss:text-3xl !llg:text-8xl !xll:text-8xl !text-[hsl(232,47%,28%)]"
                />
                <Animatedparagraph
                  text={item.subtitle}
                  delay={1}
                  textClass="font-medium md:text-lg italic !text-[hsl(232,47%,28%)] lg:text-[25px]"
                  className="sm:text-left text-center drop-shadow-[4px_4px_6px_rgba(255,255,255,1)]"
                />
              </div>
            </div>
            <div className="absolute right-[10%] top-[15%] lg:hidden">
              <div className="shadow-cube-shadow h-16 w-8 rounded-3xl ml-6 bg-white/30 backdrop-blur-md border-[4px] border-orange-500">
                <motion.span
                  initial={{ y: 0, scale: 0.2 }}
                  whileInView={{
                    y: 36,
                    scale: 1,
                    transition: {
                      ease: "linear",
                      delay: 0.1,
                      duration: 2,
                      repeat: "infinity",
                    },
                  }}
                  className="w-3 absolute h-3 rounded-full left-1.5 top-1 bg-blue-700"
                ></motion.span>
              </div>
              <motion.div initial={{ scale: 0 }}
                  whileInView={{
                    scale: 1,
                    transition: {
                      ease: "linear",
                      delay: 0.1,
                      duration: 2,
                      repeat: "infinity",
                    },
                  }} className=" bg-transparent text-center font-extrabold">Scroll down</motion.div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const Banner = ({ sliderItems }) => {
  return (
    <div className="w-full max-h-screen xll:h-[90vh] z-0 overflow-hidden">
      <HeaderSlider sliderItems={sliderItems} />
    </div>
  );
};

export default Banner;
