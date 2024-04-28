import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import AnimatedTextWord from "../AnimatedTextWord";

const Slidertext3d = ({ props }) => {
  var settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: 5,
    centerMode: true,
    initialSlide: 0,
    centerPadding: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    beforeChange: (current, next) => setImgindex(next),
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 686,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const [Imgindex, setImgindex] = useState(0);
  return (
    <div className="justify-center rounded-3xl p-4 mb-6 xll:mb-10">
      <Slider {...settings}>
        {props.map((prop, index) => (
          <div
            key={index}
            className={
              index === Imgindex ? "slide3d activeSlide3d " : "slide3d"
            }
          >
            <div className="flex justify-center p-4 h-fit relative">
              <Image
                className="sm:w-[300px] p-2 mt-2 rounded-2xl bg-cover -z-10 opacity-[0.9] shadow-news-shadow"
                width={720}
                height={720}
                src={prop.imgUrl}
                alt=""
              />
              <div className="absolute content-start inset-0 flex h-fit left-8 top-[70%] lg:hidden">
                <div className="rounded-xl p-2 bg-black/40 ">
                  <p className="!text-right font-extrabold font-serif xxs:text-lg text-2xl !text-white">
                    {prop.title}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 w-40 flex h-fit top-[50%] left-7 xs:left-[20vw] llg:hidden">
                <div className="rounded-xl p-2 bg-black/40 ">
                  <p className="!text-right whitespace-break-spaces font-extrabold font-serif  lg:text-lg text-2xl !text-white">
                    {prop.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slidertext3d;
