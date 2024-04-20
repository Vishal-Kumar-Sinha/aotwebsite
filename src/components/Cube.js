import React from "react";
import Image from "next/image";
import p2 from "@/assets/images/artificial-intelligence-produc-unscreen.gif";
const Cube = ({className}) => {
  return (
    <>
      <div className={`${className}`}>
        <div className="w-full h-full relative transform-style-3d duration-[2s] animate-spinner-cube" >
            <div className="w-[inherit] h-[inherit] absolute duration-[2s] bg-no-repeat bg-cubecol opacity-50 text-center font-serif text-[0px] font-[800] leading-[80px] shadow-cube-shadow text-white front"></div>
            <Image src={p2} alt="" className="w-[inherit] h-[inherit] absolute duration-[2s] bg-no-repeat text-center font-serif text-[0px] font-[800] leading-[80px] shadow-cube-shadow text-white ifcs ifc" />
            <Image src={p2} alt="" className="w-[inherit] h-[inherit] absolute duration-[2s] bg-no-repeat text-center font-serif text-[0px] font-[800] leading-[80px] shadow-cube-shadow text-white ifcs ifc2" />
            <Image src={p2} alt="" className="w-[inherit] h-[inherit] absolute duration-[2s] bg-no-repeat text-center font-serif text-[0px] font-[800] leading-[80px] shadow-cube-shadow text-white ifcs ifc3" />
            <div className="w-[inherit] h-[inherit] absolute duration-[2s] bg-no-repeat bg-cubecol opacity-50 text-center font-serif text-[0px] font-[800] leading-[80px] shadow-cube-shadow text-white back"></div> 
            <div className="w-[inherit] h-[inherit] absolute duration-[2s] bg-no-repeat bg-cubecol opacity-50 text-center font-serif text-[0px] font-[800] leading-[80px] shadow-cube-shadow text-white left"></div>
            <div className="w-[inherit] h-[inherit] absolute duration-[2s] bg-no-repeat bg-cubecol opacity-50 text-center font-serif text-[0px] font-[800] leading-[80px] shadow-cube-shadow text-white right"></div>
            <div className="w-[inherit] h-[inherit] absolute duration-[2s] bg-no-repeat bg-cubecol opacity-50 text-center font-serif text-[0px] font-[800] leading-[80px] shadow-cube-shadow text-white top"></div>
            <div className="w-[inherit] h-[inherit] absolute duration-[2s] bg-no-repeat bg-cubecol opacity-50 text-center font-serif text-[0px] font-[800] leading-[80px] shadow-cube-shadow text-white bottom"></div>
        </div>
      </div>
    </>
  );
};

export default Cube;
