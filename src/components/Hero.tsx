"use client";

import { BRAND_NAME, PLATFORM_URL, WHATSAPP_DEMO_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { HeroPlatformImage } from "./HeroPlatformImage";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-navy pt-28 pb-16 md:pt-36 md:pb-24"
    >
      <div className="hero-grid absolute inset-0 opacity-50" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Controle sua frota em tempo real com a{" "}
              <span className="gradient-text">{BRAND_NAME}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 text-justify"
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
              <Button href={WHATSAPP_DEMO_URL} variant="outline" size="lg" external>
                <MessageCircle className="h-5 w-5" />
                Solicitar Demonstração
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HeroPlatformImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
