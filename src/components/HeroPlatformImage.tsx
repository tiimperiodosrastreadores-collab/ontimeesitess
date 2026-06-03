"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroPlatformImage() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      <div className="absolute -inset-4 rounded-3xl bg-accent/15 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative overflow-hidden rounded-2xl border border-accent/20 bg-navy-light shadow-2xl glow-accent"
      >
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
