"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString("pt-BR")
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function StatCounter({ value, suffix, prefix, label }: StatCounterProps) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-white md:text-5xl">
        <AnimatedNumber value={value} suffix={suffix} prefix={prefix} />
      </div>
      <p className="mt-2 text-sm text-accent-light/80 md:text-base">{label}</p>
    </div>
  );
}
