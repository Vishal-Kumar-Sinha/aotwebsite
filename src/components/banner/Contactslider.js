import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Contactslider = ({ props }) => {
  var settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: 3,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 686,
        settings: {
          slidesToShow: 1,
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
    <div className="justify-center  rounded-3xl p-4 mb-6">
      <Slider {...settings}>
        {props.map((prop, index) => (
          <div
            key={index}
            className={
              index === Imgindex ? "slide3d activeSlide3d " : "slide3d"
            }
          >
            <div className="flex justify-center p-6 h-[50vh]">
              {prop.img === true ? (
                <Image
                  className="w-[75vw] p-2 mt-2 rounded-2xl shadow-news-shadow"
                  width={720}
                  height={720}
                  src={prop.Url}
                  alt=""
                />
              ) : (
                <iframe
                  className="w-[75vw] sm:scale-95 p-2 mt-2 rounded-2xl shadow-news-shadow"
                  src={prop.Url}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Contactslider;
