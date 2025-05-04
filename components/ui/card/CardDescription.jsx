import { cn } from "@/app/lib/utils";

export const CardDescription = ({ className, children }) => (
    <p className={cn(
      "mt-4 text-neutral-700 dark:text-neutral-400 tracking-wide leading-relaxed text-sm",
      className
    )}>
      {children}
    </p>
  );