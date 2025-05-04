"use client";

import React , {useState} from "react";
import { NavbarButton } from "./NavbarButton";
import { motion } from "motion/react";
import { cn } from "@/app/lib/utils";

export const MobileNavItems = ({
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
    <>
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
            key={`mobile-link-${idx}`}
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
              <a
                onMouseEnter={() => setHovered(idx)}
                onClick={onItemClick}
                href={item.link}
                className={sharedClasses}
              >
                {content}
              </a>
            )}
          </motion.div>
        );
      })}

      <div className="flex w-full flex-col gap-4">
        <NavbarButton
          href="#form"
          onClick={onItemClick}
          variant="primary"
          className="w-full">
          Book a call
        </NavbarButton>
      </div>
    </>
  );
};

export default MobileNavItems;