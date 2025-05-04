"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCard";

export default function PartnerMarquee() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-30 bg-background dark:bg-background-dark overflow-hidden">
      <div className="text-center mb-32">
        <h2 className="text-2xl md:text-6xl font-extrabold mt-4 mb-4 text-[var(--accent-color)] text-center">
          FOUNDERS HAVE WORKED <br /> WITH
        </h2>
      </div>

      <div className="w-full rounded-md flex flex-col antialiased bg-background dark:bg-background-dark items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={partners} direction="left" speed="fast" />
      </div>
    </section>
  );
}

const partners = [
  {
    name: "Genesis",
    logo: "https://www.genesis-tutorials.com/wp-content/themes/genesis-tutorials/images/logo-wide.png",
    link: "",
  },
  {
    name: "Meta",
    logo: "https://www.inrext.com/images/Inrext-logo-web.png.webp",
    link: "https://www.meta.com",
  },
  {
    name: "Adobe",
    logo: "https://socialoffline.in/cdn/uploads/social-logo.png",
    link: "https://www.adobe.com",
  },
  {
    name: "Shopify",
    logo: "https://www.thebeergardenindia.com/images/logo.png",
    link: "https://www.shopify.com",
  },
];