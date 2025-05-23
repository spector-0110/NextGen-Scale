"use client";

import React, { useState } from "react";
import { cn } from "@/app/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";

export const NavItems = ({
  items,
  className,
  onItemClick,
}) => {
  const [hovered, setHovered] = useState(null);

  const handleScroll = (e, link) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(link);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      if (onItemClick) onItemClick();
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
        const isInternalAnchor = item.link.startsWith("#");

        const sharedClasses =
          "relative px-4 py-2 font-[Geist] text-neutral-700 dark:text-neutral-200 font-semibold transition duration-200";

        const content = (
          <>
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-neutral-200 dark:bg-neutral-900 shadow-[0_0_8px_rgba(255,255,255,0.08)] dark:shadow-[0_0_12px_rgba(255,255,255,0.12)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </>
        );

        return (
          <motion.div
            key={`item-wrapper-${idx}`}
            whileHover={{ y: -0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {isInternalAnchor ? (
              <button
                onMouseEnter={() => setHovered(idx)}
                onClick={(e) => handleScroll(e, item.link)}
                className={sharedClasses}
              >
                {content}
              </button>
            ) : (
              <Link
                onMouseEnter={() => setHovered(idx)}
                onClick={onItemClick}
                href={item.link}
                className={sharedClasses}
              >
                {content}
              </Link>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default NavItems;