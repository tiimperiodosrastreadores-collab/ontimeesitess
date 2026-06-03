"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function GlassCard({ children, className, dark = false }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(34, 197, 94, 0.35)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "rounded-sm p-6 transition-shadow duration-300 hover:shadow-lg",
        dark ? "glass-card-dark" : "glass-card shadow-sm hover:shadow-accent/10",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
