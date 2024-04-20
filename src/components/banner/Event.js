import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Eventcard from "./Eventcard";

// const SliderArrow = ({ className, style, onClick, position }) => {
//   const arrowStyle =
//     position === "next"
//       ? { ...style, right: "10px" }
//       : { ...style, left: "10px", zIndex: "1" };
//   return <div className={className} style={arrowStyle} onClick={onClick} />;
// };
const SliderArrow = ({ className, style, onClick, position }) => {
  const arrowStyle =
    position === "next"
      ? {
          ...style,
          position: "absolute",
          transform: "rotate(90deg)",
          top: "2px",
          right: "40%",
          zIndex: "5",
        }
      : {
          ...style,
          position: "absolute",
          transform: "rotate(90deg)",
          top: "2px",
          left: "40%",
          zIndex: "5",
        };
  return <div className={className} style={arrowStyle} onClick={onClick} />;
};
const Event = ({ sliderItems }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <SliderArrow position="next" />,
    prevArrow: <SliderArrow position="prev" />,
  };
  return (
    <div className="relative overflow-hidden">
      <Slider {...settings} className="bg-black pt-6">
        {sliderItems.map((item, index) => (
          <div key={index}>
            <Eventcard props={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Event;
