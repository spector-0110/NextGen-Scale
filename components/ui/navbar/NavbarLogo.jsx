"use client";

import React from "react";
import Link from "next/link";

export const NavbarLogo = () => {
  return (
    <Link
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black">
      <img
        src="/NextGen.png"
        alt="logo"
        width={35}
        height={30} />
      <div className="flex items-baseline space-x-1 font-[Geist]">
        <span className="text-lg font-semibold text-black dark:text-white">NextGen</span>
        <span className="text-lg font-bold text-[#FDE047]">Scale</span>
      </div>
    </Link>
  );
};

export default NavbarLogo;