"use client";

import { BRAND_NAME, differentials } from "@/lib/constants";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItem,
} from "./ui/AnimatedSection";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Smartphone,
  Lock,
  RefreshCw,
  Radio,
  Cpu,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  MonitorSmartphone,
  Smartphone,
  Lock,
  RefreshCw,
  Radio,
  Cpu,
};

export function Differentials() {
  return (
    <AnimatedSection
      id="diferenciais"
      className="py-20 md:py-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Diferenciais
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Por que escolher a {BRAND_NAME}?
          </h2>
          <p className="mt-4 text-lg text-muted text-justify">
            Uma plataforma pensada para entregar performance, segurança e
            facilidade de uso.
          </p>
        </div>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div key={item.title} variants={staggerItem}>
                <GlassCard className="group h-full border border-slate-100 hover:border-accent/20">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy text-accent transition-colors group-hover:bg-accent group-hover:text-black"
                      whileHover={{ rotate: 5, scale: 1.08 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-navy">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
