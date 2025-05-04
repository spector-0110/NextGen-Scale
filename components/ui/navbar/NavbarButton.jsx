"use client";

import React from "react";
import { cn } from "@/app/lib/utils";
import { usePathname } from "next/navigation";

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const pathname = usePathname();
  const isAnchorLink = href?.startsWith("#");
  const sectionId = href?.replace("#", "");

  const handleClick = (e) => {
    if (isAnchorLink && pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const baseStyles = cn(
    "relative inline-block px-6 py-2.5 text-base font-semibold tracking-wide transition duration-200",
    "rounded-full text-center cursor-pointer z-10",
    "text-black dark:text-white bg-white dark:bg-black"
  );

  const glowingBorder = cn(
    "border-2 border-yellow-400",
    "shadow-[0_0_4px_1px_rgba(253,224,71,0.4)]", 
    "hover:shadow-[0_0_12px_3px_rgba(253,224,71,0.8)]",
    "transition-shadow duration-300 ease-in-out"
  );

  const variantStyles = {
    primary: "bg-white text-[#0b0c10] dark:bg-[#0b0c10] dark:text-white",
    secondary: "bg-transparent text-[#0b0c10] dark:text-white",
    dark: "bg-[#0b0c10] text-white",
    gradient: "bg-gradient-to-b from-[#ffaa23] to-[#b08800] text-[#0b0c10]",
  };

  const combinedClass = cn(baseStyles, glowingBorder, variantStyles[variant], className);

  if (isAnchorLink) {
    return (
      <button onClick={handleClick} className={combinedClass} {...props}>
        {children}
      </button>
    );
  }

  return (
    <Tag href={href} className={combinedClass} {...props}>
      {children}
    </Tag>
  );
};

export default NavbarButton;