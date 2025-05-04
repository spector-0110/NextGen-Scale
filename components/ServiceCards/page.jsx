'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card/HoverEffect";

export default function ServiceCards() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCount, projects.length - visibleCount)
    );
  };

  // Calculate number of dots needed based on projects and visible count
  const totalDots = Math.ceil((projects.length - visibleCount + 1) / visibleCount);
  const activeDotIndex = Math.floor(startIndex / visibleCount);
  
  const visibleProjects = projects.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="w-full min-h-[60vh] bg-white dark:bg-[#0b0c10] py-8 md:py-12">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold px-4 mb-8 md:mb-12 text-[var(--accent-color)] text-center">
        OUR SERVICES
      </h2>
      <motion.div
        className="flex flex-col items-center justify-center px-4 md:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-6xl mx-auto relative">
          
          <HoverEffect items={visibleProjects} />
          
          <div className="flex justify-center items-center mt-8 space-x-2">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * visibleCount)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-[var(--accent-color)] ${
                  index === activeDotIndex 
                    ? "bg-[var(--accent-color)] w-4 h-4" 
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export const projects = [
  {
    title: "Custom Website Design",
    description:
      "We create fast, responsive, and SEO-optimized websites that convert visitors into customers.",
  },
  {
    title: "Social Media Management",
    description:
      "End-to-end management of your social media profiles to grow followers and increase engagement.",
  },
  {
    title: "Brand Identity & Strategy",
    description:
      "We craft a strong digital brand presence with compelling visuals and messaging tailored to your audience.",
  },
  {
    title: "Content Creation",
    description:
      "Professional content—graphics, videos, and copywriting—for consistent and captivating online presence.",
  },
  {
    title: "SEO & Google Ranking",
    description:
      "Improve your visibility with our proven SEO techniques to rank higher on Google and drive organic traffic.",
  },
  {
    title: "Ad Campaigns (Meta & Google)",
    description:
      "Targeted ad campaigns that generate leads and boost sales using Meta Ads and Google Ads.",
  },
];