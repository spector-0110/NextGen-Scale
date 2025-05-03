import { cn } from "@/app/lib/utils";

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