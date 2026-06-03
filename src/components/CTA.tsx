"use client";

import { BRAND_NAME, PLATFORM_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./ui/AnimatedSection";
import { Button } from "./ui/Button";

export function CTA() {
  return (
    <AnimatedSection id="cta" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-sm border-2 border-accent/20 bg-navy px-8 py-16 text-center md:px-16 md:py-20">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <motion.div
            className="absolute -top-24 -right-24 h-64 w-64 bg-accent/20 blur-3xl"
            animate={{ x: [0, 20, 0], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-24 -left-24 h-64 w-64 bg-accent/10 blur-3xl"
            animate={{ x: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            >
              Comece agora mesmo
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-4 max-w-xl text-lg text-slate-300 text-justify"
            >
              Tenha total controle dos seus veículos através da {BRAND_NAME}.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mt-8"
            >
              <Button href={PLATFORM_URL} size="lg" external>
                Acessar Plataforma
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
