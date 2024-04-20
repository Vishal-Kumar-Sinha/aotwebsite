import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import AnimatedText from "../AnimatedText";
import Animatedparagraph from "../Animatedparagraph";

const HeaderText = ({ title, subtitle }) => (
  <div className="xxs:hidden mmd:backdrop-blur-sm bg-white/20 justify-evenly content-start rounded-xl">
    <AnimatedText text={title} className="!text-right font-bold !xs:text-lg !llg:text-8xl !xll:text-8xl !text-[hsl(232,47%,28%)]" />
    <Animatedparagraph text={subtitle} delay={0.8} textClass="xs:text-[10px] italic !text-[hsl(232,47%,28%)] md:text-lg" className="-m-3 xs:text-sm md:text-lg text-right" />
  </div>
);

const HeaderSlider = ({sliderItems}) => {
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
          <div className="relative">
            <Image className="max-h-screen xll:h-[90vh] w-screen -z-10 flex bg-cover opacity-80" src={item.imageUrl} alt="" />
            <div className="absolute inset-0 flex items-center justify-around">
              <HeaderText title={item.title} subtitle={item.subtitle} />
              <div></div><div></div>
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
