"use client";

import { cn } from "@/lib/utils";
import { BRAND_NAME } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string;
  priority?: boolean;
  size?: "default" | "large";
  onDark?: boolean;
}

export function Logo({
  className,
  href = "#inicio",
  priority = false,
  size = "default",
  onDark = false,
}: LogoProps) {
  const imageSizes = {
    default: "h-14 w-auto sm:h-16",
    large: "h-[3.25rem] w-auto sm:h-[4.25rem] md:h-[5rem] lg:h-[5.5rem]",
  };

  const image = (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className="inline-flex"
    >
      <Image
        src="/logo.png"
        alt={BRAND_NAME}
        width={320}
        height={100}
        priority={priority}
        className={cn(
          imageSizes[size],
          "object-contain",
          onDark &&
            "drop-shadow-[0_0_18px_rgba(34,197,94,0.55)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]",
          className
        )}
      />
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex shrink-0 transition-opacity hover:opacity-90"
      >
        {image}
      </Link>
    );
  }

  return image;
}
