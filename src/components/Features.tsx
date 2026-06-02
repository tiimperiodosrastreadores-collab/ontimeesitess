"use client";

import { features } from "@/lib/constants";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItem,
} from "./ui/AnimatedSection";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";
import {
  MapPin,
  Route,
  ShieldCheck,
  Bell,
  BarChart3,
  Truck,
  Gauge,
  Map,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Route,
  ShieldCheck,
  Bell,
  BarChart3,
  Truck,
  Gauge,
  Map,
};

export function Features() {
  return (
    <AnimatedSection
      id="funcionalidades"
      className="py-20 md:py-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Funcionalidades
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Tudo que você precisa para gerenciar sua frota
          </h2>
          <p className="mt-4 text-lg text-muted">
            Recursos completos para monitoramento, segurança e gestão eficiente
            dos seus veículos.
          </p>
        </div>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div key={feature.title} variants={staggerItem}>
                <GlassCard className="group h-full hover:-translate-y-1 hover:border-accent/20 hover:shadow-accent/10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
