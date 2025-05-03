'use client';

import { useEffect, useRef, useState } from "react";

export default function HorizontalScroll({ children }) {
  const containerRef = useRef(null);
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const viewportHeight = window.innerHeight;
        const rect = entry.boundingClientRect;
        const centerPoint = viewportHeight / 2;
        setStartScroll(
          entry.isIntersecting && rect.top < centerPoint && rect.bottom > centerPoint
        );
      },
      {
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!startScroll) return;

    const container = containerRef.current;
    const scrollLength = container.scrollWidth - container.clientWidth;

    const handleScroll = () => {
      const containerTop = container.offsetTop;
      const scrollY = window.scrollY;
      const containerHeight = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(0, (scrollY + containerHeight - containerTop) / containerHeight)
      );

      container.scrollLeft = scrollLength * progress;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startScroll]);

  return (
    <div className="relative h-[100vh] overflow-hidden">
      <div
        ref={containerRef}
        className="whitespace-nowrap overflow-x-scroll no-scrollbar h-full"
      >
        {children}
      </div>
    </div>
  );
}