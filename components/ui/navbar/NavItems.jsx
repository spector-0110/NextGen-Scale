"use client";

import React, { useState } from "react";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion"; // use framer-motion, not motion/react
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = ({
  items,
  className,
  onItemClick,
}) => {
  const [hovered, setHovered] = useState(null);
  const pathname = usePathname();

  const handleSmoothScroll = (e, id) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      onItemClick?.(); // if you want to close a dropdown or do something after click
    }
  };

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => {
        const isAnchorLink = item.link?.startsWith("#");
        const sectionId = item.link?.replace("#", "");

        return (
          <motion.div
            key={`item-wrapper-${idx}`}
            whileHover={{ y: -0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Link
              href={item.link}
              onClick={(e) =>
                isAnchorLink && pathname === "/" // only intercept if on homepage
                  ? handleSmoothScroll(e, sectionId)
                  : onItemClick?.()
              }
              onMouseEnter={() => setHovered(idx)}
              className="relative px-4 py-2 font-[Geist] text-neutral-700 dark:text-neutral-200 font-semibold transition duration-200"
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-full bg-neutral-200 dark:bg-neutral-900 shadow-[0_0_8px_rgba(255,255,255,0.08)] dark:shadow-[0_0_12px_rgba(255,255,255,0.12)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-20">{item.name}</span>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default NavItems;