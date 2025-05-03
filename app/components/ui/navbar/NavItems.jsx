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

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={`item-wrapper-${idx}`}
          whileHover={{ y: -0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Link
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className="relative px-4 py-2 font-[Geist] text-neutral-700 dark:text-neutral-200 font-semibold transition duration-200"
            href={item.link}
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
      ))}
    </motion.div>
  );
};

export default NavItems;