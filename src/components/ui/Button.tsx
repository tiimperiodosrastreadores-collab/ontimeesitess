"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5",
    secondary:
      "bg-white text-navy border border-slate-200 hover:border-accent/30 hover:bg-surface shadow-sm hover:-translate-y-0.5",
    outline:
      "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50",
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
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
