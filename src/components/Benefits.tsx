"use client";

import { benefits } from "@/lib/constants";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItem,
} from "./ui/AnimatedSection";
import { motion } from "framer-motion";
import {
  Shield,
  TrendingDown,
  LayoutDashboard,
  Zap,
  Clock,
  LineChart,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  TrendingDown,
  LayoutDashboard,
  Zap,
  Clock,
  LineChart,
};

export function Benefits() {
  return (
    <AnimatedSection
      id="beneficios"
      className="relative overflow-hidden py-20 md:py-28 bg-navy"
    >
      <div className="absolute inset-0 hero-grid opacity-30" />
      <motion.div
        className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-accent/10 blur-[100px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-light">
            Benefícios
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Por que investir em rastreamento veicular?
          </h2>
          <p className="mt-4 text-lg text-slate-300 text-justify">
            Resultados concretos para a operação e segurança do seu negócio.
          </p>
        </div>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40 hover:bg-white/10">
                  <div className="absolute -right-4 -top-4 text-7xl font-bold text-white/5">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <motion.div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-accent/20 text-accent"
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
