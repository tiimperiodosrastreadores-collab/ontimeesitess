"use client";

import { openPlatformWithLogin } from "@/lib/platformAccess";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AccessPlatformButtonProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: "popup" | "sameTab";
}

export function AccessPlatformButton({
  children,
  size = "md",
  className,
  target = "popup",
}: AccessPlatformButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-sm transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 bg-accent text-black hover:bg-accent-light shadow-md shadow-accent/30 hover:shadow-accent/50";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type="button"
      onClick={() => openPlatformWithLogin({ target })}
      className={cn(baseStyles, sizes[size], className)}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}
