import { cn } from "@/app/lib/utils";
import { useEffect, useState } from "react";

export const Card = ({ className, children }) => {
  // Track viewport size for responsive adjustments
  const [viewportSize, setViewportSize] = useState("desktop");
  
  useEffect(() => {
    const updateViewportSize = () => {
      if (window.innerWidth < 640) {
        setViewportSize("mobile");
      } else if (window.innerWidth < 1024) {
        setViewportSize("tablet");
      } else {
        setViewportSize("desktop");
      }
    };
    
    // Set initial value
    updateViewportSize();
    
    // Update on resize
    window.addEventListener('resize', updateViewportSize);
    return () => window.removeEventListener('resize', updateViewportSize);
  }, []);

  return (
    <div
      className={cn(

        "rounded-2xl h-full w-full",
        
        // Responsive padding based on viewport size
        viewportSize === "mobile" ? "p-3" : viewportSize === "tablet" ? "p-4" : "p-6",
        
        // Base styles
        "bg-white dark:bg-[#0b0c10]",
        "border border-neutral-300 dark:border-neutral-800",
        "text-black dark:text-white",
        "shadow-lg z-20 relative",
        "transition-all duration-1000 ease-in-out",
        "group-hover:shadow-accent",
        "flex flex-col justify-center",
        className
      )}
    >
      <div className={cn(
        viewportSize === "mobile" ? "p-2" : viewportSize === "tablet" ? "p-3" : "p-4"
      )}>
        {children}
      </div>
    </div>
  );
};