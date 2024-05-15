import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Companyslider = ({ props }) => {
  var settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1388,
        settings: {
          slidesToShow: 6.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 686,
        settings: {
          slidesToShow: 3.8,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
          //arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="justify-center border-[0.2px] rounded-2xl shadow-outside-shadow">
        <Slider {...settings}>
          {props.map((prop, index) => (
            <div key={index}>
              <div className="flex justify-center p-2 m-2 cursor-pointer">
                <Image
                  className="w-fit h-[80px] justify-center p-2 rounded-2xl shadow-news-shadow"
                  src={prop}
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Companyslider;
