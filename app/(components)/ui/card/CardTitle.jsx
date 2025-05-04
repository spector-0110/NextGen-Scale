import { cn } from "@/app/lib/utils";


export const CardTitle = ({ className, children }) => (
  <h4 className={cn(
    "text-black dark:text-white font-bold text-xl tracking-wide",
    className
  )}>
    {children}
  </h4>
);