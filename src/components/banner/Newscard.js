import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
//import "./News.css";

const Newscard = ({props, newsview}) => {
  const setitems = (() => {
    localStorage.setItem("aot-news-ntitle", props.ntitle);
    localStorage.setItem("aot-news-imgLink", props.imgLink);
    localStorage.setItem("aot-news-ndesc", props.ndesc);
  });
  const content = props.ndesc.slice(0,135) + "... ";
  return (
    <div>
      <div className="xs:p-1 flex justify-center p-4 h-fit">
        <div className="bg-slate-200/40 block p-4 relative w-[280px] rounded-se-[30px] rounded-es-[30px] h-[300px] shadow-news-shadow">
          <Image className="w-[250px] h-[140px] rounded-se-2xl shadow-outside-shadow" width={1280} height={720} src={props.imgLink} alt="" />
          <div className="rounded-es-2xl p-2">
            <h2 className="font-serif text-lg px-1 font-semibold">{props.ntitle}</h2>
            <p className=" font-mont font-[350] leading-[1.05]">
              {content}
              <Link href={newsview} onClick={setitems} className=" text-blue-700 font-semibold px-2 text-center pb-0.5 rounded-2xl hover:bg-slate-400/40 transition-all ease-in-out duration-300 delay-0 active:opacity-0">
                Read&nbsp;More
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newscard;
