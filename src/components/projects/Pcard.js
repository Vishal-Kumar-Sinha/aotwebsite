import React, { useRef } from "react";
import Image from "next/image";
import Pmodal from "../Pmodal";
const Pcard = ({
  category,
  duration,
  link,
  tools,
  slides,
  heading,
  brief,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
}) => {
  return (
    <>
      <div
        className={`rounded-lg w-fit h-fit p-6 shadow-outside-shadow cursor-pointer transition duration-200 ease-in-out hover:shadow-inside-shadow ${className}`}
      >
        <div className="overflow-hidden transform rounded-lg shadow-outside-shadow">
          <Image
            className=" w-full h-auto"
            src={thumbnailSrc}
            alt={thumbnailAlt}
          />
        </div>
        <h3 className="pt-5 text-lg font-normal text-gray-600 block">
          {heading}
        </h3>
        <div className="font-normal text-gray-500 cursor-pointer text-[14px] duration-300 transition hover:text-[#FA5252] mt-2">
          <div>{description}</div>
          <div>
            <Pmodal
              slides={slides}
              title={heading}
              brief={brief}
              tools={tools}
              category={category}
              duration={duration}
              link={link}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pcard;
