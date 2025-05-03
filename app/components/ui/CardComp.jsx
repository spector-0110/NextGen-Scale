'use client'

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";

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
// Card component
export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 bg-white dark:bg-[#0b0c10] border border-neutral-300 dark:border-neutral-800 text-black dark:text-white shadow-lg z-20 relative group-hover:shadow-accent transition-all duration-300 ease-in-out flex flex-col justify-center",
        className
      )}
    >
  <div className="p-4">{children}</div>
</div>
  );
};
export const CardTitle = ({ className, children }) => (
  <h4 className={cn(
    "text-black dark:text-white font-bold text-xl tracking-wide",
    className
  )}>
    {children}
  </h4>
);

export const CardDescription = ({ className, children }) => (
  <p className={cn(
    "mt-4 text-neutral-700 dark:text-neutral-400 tracking-wide leading-relaxed text-sm",
    className
  )}>
    {children}
  </p>
);