import React, { useRef } from "react";
import { useState } from "react";
import Link from "next/link";

const Mylink = ({
  children,
  title,
  className,
  color,
  textcolor,
  target,
  href,
  ...prop
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  return (
    <>
      <div
        className={`shadow-outside-shadow h-fit w-fit rounded-full ${className}`}
      >
        <Link
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`flex p-2 items-center rounded-full ${
            textcolor || "text-white"
          } ${color || "bg-gray-600"} shadow-inside-shadow`}
          {...prop}
          target={target}
          href={href}
        >
          {children}

          <div
            style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
            className="overflow-x-hidden transition-all duration-300 ease-out"
          >
            <span ref={ref} className="px-1.5">
              {title}
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Mylink;
