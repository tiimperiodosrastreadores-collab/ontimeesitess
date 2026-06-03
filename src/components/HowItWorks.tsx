"use client";

import { steps } from "@/lib/constants";
import { AnimatedSection, FadeIn } from "./ui/AnimatedSection";
import { motion } from "framer-motion";
import { Wrench, ClipboardList, LogIn, Eye } from "lucide-react";

const stepIcons = [Wrench, ClipboardList, LogIn, Eye];

export function HowItWorks() {
  return (
    <AnimatedSection
      id="como-funciona"
      className="py-20 md:py-28 bg-surface"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Como Funciona
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
            Simples de implementar, poderoso na operação
          </h2>
          <p className="mt-4 text-lg text-muted text-justify">
            Em quatro passos, sua frota estará totalmente monitorada.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Timeline line - desktop */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <FadeIn key={step.step} delay={index * 0.15}>
                  <div className="relative flex flex-col items-center text-center">
                    {/* Connector dot */}
                    <div className="relative mb-6">
                      <motion.div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-black shadow-lg shadow-accent/30"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="h-7 w-7" />
                      </motion.div>
                      <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-bold text-white ring-4 ring-surface">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>

                    {/* Vertical connector - mobile/tablet */}
                    {index < steps.length - 1 && (
                      <div className="mt-6 h-8 w-0.5 bg-accent/20 lg:hidden" />
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
