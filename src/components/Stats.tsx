"use client";

import { stats } from "@/lib/constants";
import { AnimatedSection } from "./ui/AnimatedSection";
import { StatCounter } from "./ui/StatCounter";

export function Stats() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy py-16 md:py-20">
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
