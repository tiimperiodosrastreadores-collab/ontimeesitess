"use client";

import { PLATFORM_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { HeroMapIllustration } from "./HeroMapIllustration";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-navy pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <div className="hero-grid absolute inset-0 opacity-50" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-400/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-blue-200 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Plataforma de rastreamento GPS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Controle sua frota em tempo real com a{" "}
              <span className="gradient-text">OnTime Tracker</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
            >
              Monitore veículos, motos, caminhões e ativos com tecnologia avançada
              de rastreamento GPS, relatórios inteligentes e acompanhamento em
              tempo real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button href={PLATFORM_URL} size="lg" external>
                Acessar Plataforma
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="#" variant="outline" size="lg">
                <Play className="h-5 w-5" />
                Solicitar Demonstração
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <div className="h-1 w-8 rounded-full bg-accent" />
                <span>Tempo real</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-8 rounded-full bg-accent" />
                <span>100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-8 rounded-full bg-accent" />
                <span>Multi-dispositivo</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HeroMapIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
