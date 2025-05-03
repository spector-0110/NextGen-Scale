'use client';

import { useEffect, useRef } from "react";
import { HoverEffect } from "@/app/components/ui/CardComp";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ServiceCards() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5, once: false });
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    const container = containerRef.current;
    const cards = cardsRef.current;
    
    if (!container || !cards) return;
    
    // Calculate the total width more precisely
    const cardsContainer = cards.querySelector('div > div'); // Get the actual container with all cards
    const allCards = cards.querySelectorAll('a'); // Get all card elements
    const lastCard = allCards[allCards.length - 1]; // Get the last card element
    const firstCardWidth = allCards[0].offsetWidth;
    
    // Get the full width needed for all cards to scroll through
    const totalContentWidth = cardsContainer.scrollWidth;
    
    // Position the first card at the center of viewport initially
    const startX = (window.innerWidth / 2) - firstCardWidth / 2;
    gsap.set(cards, { x: startX });
    
    // Calculate how far we need to scroll to show the last card centered
    const endX = -(totalContentWidth - window.innerWidth + (firstCardWidth ) + 500);
    
    // Create the horizontal scroll animation
    const horizontalScroll = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "center center",
        end: () => `+=${totalContentWidth} `, // Use the full content width to determine scroll length
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });
    
    // Animate from centered first card to centered last card
    horizontalScroll.to(cards, {
      x: endX,
      ease: "none",
    });
    
    return () => {
      // Clean up the animation when the component unmounts
      if (horizontalScroll.scrollTrigger) {
        horizontalScroll.scrollTrigger.kill();
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="w-full h-screen overflow-hidden bg-white dark:bg-[#0b0c10] transition-colors duration-300"
      >
      <motion.div
        ref={cardsRef}
        className="h-full flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >

        <div className="max-w-5xl mx-auto px-8"> 
          <HoverEffect items={projects} />
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
    link: "/services/web-design", // Update to actual route if available
  },
  {
    title: "Social Media Management",
    description:
      "End-to-end management of your social media profiles to grow followers and increase engagement.",
    link: "/services/social-media", 
  },
  {
    title: "Brand Identity & Strategy",
    description:
      "We craft a strong digital brand presence with compelling visuals and messaging tailored to your audience.",
    link: "/services/branding", 
  },
  {
    title: "Content Creation",
    description:
      "Professional content—graphics, videos, and copywriting—for consistent and captivating online presence.",
    link: "/services/content-creation", 
  },
  {
    title: "SEO & Google Ranking",
    description:
      "Improve your visibility with our proven SEO techniques to rank higher on Google and drive organic traffic.",
    link: "/services/seo", 
  },
  {
    title: "Ad Campaigns (Meta & Google)",
    description:
      "Targeted ad campaigns that generate leads and boost sales using Meta Ads and Google Ads.",
    link: "/services/ads", 
  },
];