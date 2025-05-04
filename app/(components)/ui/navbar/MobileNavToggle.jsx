"use client";

import React from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

export const MobileNavToggle = ({
  isOpen,
  onClick
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};

export default MobileNavToggle;