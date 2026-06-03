"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

const motionProps = {
  whileHover: { scale: 1.04, y: -2 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring" as const, stiffness: 400, damping: 20 },
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-sm transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-accent text-black hover:bg-accent-light shadow-md shadow-accent/30 hover:shadow-accent/50",
    secondary:
      "bg-white text-navy border border-slate-200 hover:border-accent/30 hover:bg-surface shadow-sm",
    outline:
      "border-2 border-slate-300 text-navy bg-white/50 hover:bg-accent/10 hover:border-accent",
    ghost: "text-accent hover:bg-accent/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (external || href.startsWith("http")) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps} className="inline-flex">
      <Link href={href} className={classes}>
        {children}
      </Link>
    </motion.div>
  );
}
