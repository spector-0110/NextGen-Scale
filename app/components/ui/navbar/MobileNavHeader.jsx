"use client";

import React from "react";
import { cn } from "@/app/lib/utils";

export const MobileNavHeader = ({
  children,
  className
}) => {
  return (
    <div
      className={cn("flex w-full flex-row items-center justify-between", className)}>
      {children}
    </div>
  );
};

export default MobileNavHeader;