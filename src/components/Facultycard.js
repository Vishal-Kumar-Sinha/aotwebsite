import Image from "next/image";
import React from "react";

const Facultycard = ({ props }) => {
  return (
    <div>
      <div className="rounded-[40px] py-2 px-5 justify-around cursor-pointer shadow-news-shadow hover:scale-95 transition-all ease-in-out duration-200">
        <div className="flex justify-around gxl:flex-col gxl:items-center">
          <div className="p-2 w-fit h-fit rounded-[50%] shadow-news-shadow">
            <Image
              className="h-32 w-32 rounded-[50%] shadow-outside-shadow"
              width={500}
              height={500}
              src={props.imgUrl}
              alt=""
            />
          </div>
          <div className="mx-5 p-1 content-center">
            <div className="font-serif xs:text-xl text-center text-2xl font-semibold">
              {props.name}
            </div>
            <div className="text-lg font-medium text-center">
              {props.designation}
            </div>
            <div className="text-md font-medium text-center">
              {props.mailid}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facultycard;
