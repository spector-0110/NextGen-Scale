'use client'

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { Card, CardDescription, CardTitle } from "@/app/(components)/ui/card";

export const HoverEffect = ({ items, className }) => {
  return (
    <section className={cn("py-10 h-full flex items-center justify-center", className)}>
  <div className="flex flex-row gap-6 w-max">
    {items.map((item) => (
      <a
        href={item?.link}
        key={item?.link}
        className="relative group min-w-[350px] h-[350px]"
      >
        <motion.span
          className="absolute inset-0 h-full w-full bg-accent/10 dark:bg-[#66fcf1]/10 rounded-3xl z-10"
          layoutId="hoverBackground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
        />
        <Card>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </Card>
      </a>
    ))}
  </div>
</section>
  );
};