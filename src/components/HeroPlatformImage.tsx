"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroPlatformImage() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      <motion.div
        className="absolute -inset-3 bg-accent/15 blur-3xl animate-pulse-glow"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-sm border-2 border-accent/25 bg-navy-light shadow-2xl glow-accent animate-float"
      >
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-30">
          <div
            className="h-24 w-full bg-gradient-to-b from-transparent via-accent/40 to-transparent"
            style={{ animation: "scan-line 4s linear infinite" }}
          />
        </div>
        <Image
          src="/plataforma-mapa.png"
          alt="Mapa da Plataforma OnTime com rastreamento em tempo real"
          width={1200}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}
