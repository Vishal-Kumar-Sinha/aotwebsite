import Link from "next/link";
import React from "react";
import { AotLogo } from "./Icons";


const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link href="/" className="flex items-center justify-center">
        <AotLogo />
      </Link>
    </div>
  );
};

export default Logo;
